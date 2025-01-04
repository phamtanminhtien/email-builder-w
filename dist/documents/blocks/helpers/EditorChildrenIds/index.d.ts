import { TEditorBlock } from '../../../editor/core';
export type EditorChildrenChange = {
    blockId: string;
    block: TEditorBlock;
    childrenIds: string[];
};
export type EditorChildrenIdsProps = {
    childrenIds: string[] | null | undefined;
    onChange: (val: EditorChildrenChange) => void;
};
export default function EditorChildrenIds({ childrenIds, onChange }: EditorChildrenIdsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map