"use client";

import { EditorState } from "draft-js";
import { useState } from "react";
import TextEditor from "../text-editor";

interface IProps {
  defaultValue: EditorState;
  onChange: (value: string) => void;
}

export default function ProductDescriptionEditor({
  defaultValue,
  onChange,
}: IProps) {
  const [editorState, setEditorState] = useState(
    () => defaultValue ?? EditorState.createEmpty()
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onChange(JSON.stringify(editorState));
  };

  return (
    <TextEditor
      editorState={editorState}
      onChange={handleEditorChange}
      placeholder="Product description"
    />
  );
}
