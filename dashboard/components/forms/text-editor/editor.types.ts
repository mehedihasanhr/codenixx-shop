import { type EditorState } from "draft-js";

export interface IToolbarProps {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
}
