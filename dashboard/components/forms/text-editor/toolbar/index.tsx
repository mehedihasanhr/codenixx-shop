import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import {
  FontBoldIcon,
  FontItalicIcon,
  QuoteIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { type IToolbarProps } from "../editor.types";
import {
  isActiveBlock,
  isStyleActive,
  toggleBlock,
  toggleStyle as toggleTextStyle,
} from "../utils";
import { HeadingButtons } from "./heading-tool";
import ImageTool from "./image-tool";
import { ListFormatting } from "./list-tool";
import { TextFormatting } from "./text-tools";

export function Toolbar(props: IToolbarProps) {
  const { editorState, onChange } = props;

  const toggleStyle = (style: string) => {
    toggleTextStyle(editorState, onChange, style);
  };

  const isActive = (style: string): boolean => {
    return isStyleActive(editorState, style);
  };

  return (
    <div className="flex items-center gap-0.5 p-1 border rounded-lg">
      {/* Headings */}
      <HeadingButtons {...props} />

      <Separator orientation="vertical" className="h-5 mx-2.5" />
      {/* bold */}
      <Toggle
        size="sm"
        pressed={isActive("BOLD")}
        onPressedChange={() => toggleStyle("BOLD")}
        aria-label="Toggle bold"
        className="py-0"
      >
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>

      {/* italic */}
      <Toggle
        size="sm"
        pressed={isActive("ITALIC")}
        onPressedChange={() => toggleStyle("ITALIC")}
        aria-label="Toggle italic"
        className="py-0"
      >
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      {/* underline */}
      <Toggle
        size="sm"
        pressed={isActive("UNDERLINE")}
        onPressedChange={() => toggleStyle("UNDERLINE")}
        aria-label="Toggle underline"
        className="py-0"
      >
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>

      {/* StrikeThrough */}
      <Toggle
        size="sm"
        pressed={isActive("STRIKETHROUGH")}
        onPressedChange={() => toggleStyle("STRIKETHROUGH")}
        aria-label="Toggle StrikeThrough"
        className="py-0"
      >
        <StrikethroughIcon className="h-4 w-4" />
      </Toggle>

      {/* Quote */}
      <Toggle
        size="sm"
        pressed={isActiveBlock(editorState, "blockquote")}
        onPressedChange={() => toggleBlock(editorState, onChange, "blockquote")}
        aria-label="Toggle StrikeThrough"
        className="py-0"
      >
        <QuoteIcon className="h-4 w-4" />
      </Toggle>

      <Separator orientation="vertical" className="h-5 mx-2.5" />

      <TextFormatting {...props} />

      {/* List */}
      <ListFormatting {...props} />

      <Separator orientation="vertical" className="h-5 mx-2.5" />

      {/* Image */}
      <ImageTool {...props} />
    </div>
  );
}
