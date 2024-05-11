"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  type ContentBlock,
  DefaultDraftBlockRenderMap,
  type DraftStyleMap,
  Editor,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { type ComponentProps } from "react";
import { EditorImageRenderComponent } from "./component/iamge-component";
import { blockRenderMap, styleMap } from "./config";
import "./styles/editor.css";
import { Toolbar } from "./toolbar";

interface EditorProps extends ComponentProps<typeof Editor> {}

export default function TextEditor({
  editorState,
  onChange,
  ...props
}: EditorProps) {
  // blockStyleFn
  const blockStyleFn = (contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    const blockStyle = contentBlock.getData().get("style");

    const BlockType = {
      BASIC_BLOCKS: [
        "unstyled",
        "header-one",
        "header-two",
        "header-three",
        "header-four",
        "header-five",
        "header-six",
        "blockquote",
        "code-block",
      ],
    };

    let cls = "";
    switch (type) {
      case "unstyled":
        cls = "RichEditor-style__initial-unstyled";
        break;
      case "atomic":
        cls = "RichEditor-style__initial-atomic";
        break;
      default:
    }

    if (
      Object.keys(BlockType.BASIC_BLOCKS).some(
        (key: any) => BlockType.BASIC_BLOCKS[key] === type
      )
    ) {
      cls += ` RichEditor-style__text-align-${blockStyle?.textAlign ?? "left"}`;
    }

    if (type === "blockquote") {
      cls += ` RichEditor-style__blockquote`;
    }

    return cls;
  };

  // custom render component
  function customBlockRenderer(contentBlock: ContentBlock) {
    const type = contentBlock.getType();
    if (type === "atomic") {
      return {
        component: EditorImageRenderComponent,
        editable: false,
        props: {
          editorState,
          onChange,
        },
      };
    }
  }

  return (
    <>
      <Toolbar editorState={editorState} onChange={onChange} />

      <ScrollArea className="h-[300px] bg-background border border-border rounded-lg px-4">
        <Editor
          editorState={editorState}
          onChange={onChange}
          customStyleMap={styleMap as DraftStyleMap}
          blockRenderMap={DefaultDraftBlockRenderMap.merge(blockRenderMap)}
          blockRendererFn={customBlockRenderer}
          blockStyleFn={blockStyleFn}
          {...props}
        />
      </ScrollArea>
    </>
  );
}
