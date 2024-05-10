import { EditorState, RichUtils } from "draft-js";

export const forceSelection = (editorState: EditorState) => {
  return EditorState.forceSelection(editorState, editorState.getSelection());
};

// focus block key
export const getFocusedBlockKey = (editorState: EditorState) => {
  const selection = editorState.getSelection();
  const focusKey = selection.getFocusKey();
  return focusKey;
};

// focused block
export const getFocusedBlock = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const focusKey = getFocusedBlockKey(editorState);
  const focusedBlock = contentState.getBlockForKey(focusKey);
  return focusedBlock;
};

// check style is active
export const isStyleActive = (
  editorState: EditorState,
  style: string
): boolean => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return currentStyle.has(style);
};

// active block
export const isActiveBlock = (
  editorState: EditorState,
  block: string
): boolean => {
  const currentBlock = RichUtils.getCurrentBlockType(editorState);
  return currentBlock === block;
};

// toggle blocks
export const toggleBlock = (
  editorState: EditorState,
  onChange: (editorState: EditorState) => void,
  block: string
) => {
  const state = forceSelection(editorState);
  return onChange(RichUtils.toggleBlockType(state, block));
};

// apply style
export const toggleStyle = (
  editorState: EditorState,
  onChange: (editorState: EditorState) => void,
  style: string
) => {
  // force focus
  const state = forceSelection(editorState);

  // check user select any text if true toggle style or add style
  onChange(RichUtils.toggleInlineStyle(state, style));
};
