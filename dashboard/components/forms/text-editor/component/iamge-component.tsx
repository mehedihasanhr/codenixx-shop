import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import {
  IconFloatCenter,
  IconFloatLeft,
  IconFloatNone,
  IconFloatRight,
  IconGripHorizontal,
  IconGripVertical,
  IconRadiusBottomLeft,
  IconRadiusBottomRight,
  IconRadiusTopLeft,
  IconRadiusTopRight,
  IconResize,
} from "@tabler/icons-react";
import clsx from "clsx";
import _ from "lodash";
import Image from "next/image";
import React from "react";
import { useClickAway } from "react-use";

const textFormat = [
  {
    title: "Image Default",
    Icon: IconFloatNone,
    style: {
      position: "relative",
    },
    type: "imageFloatNone",
  },
  {
    title: "Image Left",
    Icon: IconFloatLeft,
    style: {
      position: "relative",
      zIndex: "1",
      float: "left",
      paddingRight: "1rem",
      paddingBottom: "1rem",
    },
    type: "imageLeft",
  },
  {
    title: "Image Center",
    Icon: IconFloatCenter,
    style: {
      position: "relative",
      width: "fit-content",
      marginInline: "auto",
    },
    type: "imageCenter",
  },
  {
    title: "Image Right",
    Icon: IconFloatRight,
    style: {
      position: "relative",
      zIndex: "1",
      float: "right",
      paddingLeft: "1rem",
      paddingBottom: "1rem",
    },
    type: "imageRight",
  },
];

type ResizeDir = "s" | "n" | "w" | "e" | "nw" | "ne" | "sw" | "se";

const imageSizeButtons = [
  {
    className: "-top-1.5 left-1/2 -translate-x-1/2 px-1 hover:cursor-n-resize",
    dir: "n", // top
    Icon: IconGripHorizontal,
  },
  {
    className:
      "top-1/2 -right-1.5 -translate-y-1/2 py-1 rounded-[2px] hover:cursor-w-resize",
    dir: "e", // right
    Icon: IconGripVertical,
  },
  {
    className:
      "-bottom-1.5 left-1/2 -translate-x-1/2 px-1 rounded-[2px] hover:cursor-s-resize",
    dir: "s", // bottom
    Icon: IconGripHorizontal,
  },
  {
    className:
      "absolute top-1/2 -left-1.5 -translate-y-1/2 py-1 rounded-[2px] hover:cursor-w-resize",
    dir: "w", // bottom
    Icon: IconGripVertical,
  },
  {
    className: "-top-0.5 -left-0.5 z-10 hover:cursor-nw-resize",
    dir: "nw", // top-left-corner
    Icon: IconRadiusTopLeft,
  },

  {
    className: "-top-0.5 -right-0.5 z-10 hover:cursor-ne-resize",
    dir: "ne", // top-right-corner
    Icon: IconRadiusTopRight,
  },
  {
    className: "-bottom-0.5 -right-0.5 z-10 hover:cursor-se-resize",
    dir: "se", // bottom-right-corner
    Icon: IconRadiusBottomRight,
  },
  {
    className: "-bottom-0.5 -left-0.5 z-10 hover:cursor-sw-resize",
    dir: "sw", // bottom-left-corner
    Icon: IconRadiusBottomLeft,
  },
];

export function EditorImageRenderComponent(props: any) {
  const [isResizingMode, setIsResizingMode] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState("imageLeft");
  const [style, setStyle] = React.useState<React.CSSProperties>({
    position: "relative",
    zIndex: "1",
  });

  // data
  const data = props.contentState
    .getEntity(props.block.getEntityAt(0))
    .getData();

  // ref
  const imageWrapperRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  // handle mouse down
  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement>,
    dir: ResizeDir
  ) => {
    if (imageWrapperRef !== null && imageWrapperRef.current !== undefined) {
      // get current width and height
    }
  };

  // handle mouse down
  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    dir: ResizeDir
  ) => {};

  // handle mouse down
  const handleMouseUp = (
    e: React.MouseEvent<HTMLButtonElement>,
    dir: ResizeDir
  ) => {};

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (popoverRef.current !== undefined && popoverRef.current !== null) {
      if (popoverRef.current.getAttribute("data-show") != null) {
        popoverRef.current.toggleAttribute("data-show");
      } else {
        popoverRef.current.toggleAttribute("data-show");
        popoverRef.current.style.position = "fixed"; // Set position to absolute
        popoverRef.current.style.left = `${clientX}px`; // Position popover at mouse X coordinate
        popoverRef.current.style.top = `${clientY}px`; // Position popover at mouse Y coordinate
      }
    }
  };

  useClickAway(imageWrapperRef, (event) => {
    // check event not contain popover
    if (
      popoverRef.current !== undefined &&
      popoverRef.current !== null &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      popoverRef?.current?.removeAttribute("data-show");
    }
  });

  return (
    <div style={{ ...style }}>
      <div
        className={clsx(
          "relative w-fit h-fit border-primary rounded-sm",
          isResizingMode && "border"
        )}
        onClick={handleImageClick}
        aria-hidden="true"
        ref={imageWrapperRef}
      >
        {data.url !== undefined ? (
          <Image
            src={data.url}
            alt={data.alt}
            width={data.width}
            height={data.height}
            className="rounded-sm"
          />
        ) : (
          "Image container"
        )}
        {isResizingMode ? (
          <>
            {_.map(imageSizeButtons, ({ Icon, className, dir }) => (
              <button
                type="button"
                className={cn(
                  "absolute z-10 bg-background rounded-[2px] shadow",
                  className
                )}
                onMouseDown={(e) => handleMouseDown(e, dir as ResizeDir)}
                onMouseMove={(e) => handleMouseMove(e, dir as ResizeDir)}
                onMouseUp={(e) => handleMouseUp(e, dir as ResizeDir)}
              >
                <Icon size={10} />
              </button>
            ))}
          </>
        ) : null}
      </div>

      <div
        ref={popoverRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className="z-10 hidden data-[show]:flex w-fit p-1 pb-0.5 gap-0.5 bg-white shadow-md border rounded-lg"
      >
        {_.map(textFormat, ({ title, Icon, style, type }, index) => (
          <Toggle
            key={index}
            size="sm"
            pressed={activeKey === type}
            onPressedChange={() => {
              setStyle(style as React.CSSProperties);
              setActiveKey(type);
            }}
            aria-label={`Toggle ${title}`}
            className="flex items-center h-8 space-x-1.5 w-full px-2.5 py-1 justify-start"
          >
            <Icon size={23} stroke={1.5} opacity={0.6} />
          </Toggle>
        ))}

        {/* resizing mode */}
        <Toggle
          size="sm"
          pressed={isResizingMode}
          onPressedChange={(status) => setIsResizingMode(status)}
          aria-label={`Toggle resizing`}
          className="flex items-center h-8 space-x-1.5 w-full px-2.5 py-1 justify-start"
        >
          <IconResize size={23} stroke={1.5} opacity={0.6} />
        </Toggle>
      </div>
    </div>
  );
}
