import { Tooltip } from "@mui/material";

import { useDocument } from "../../../documents/editor/EditorContext";

type Props = {
  saveButton: (data: string) => JSX.Element;
};

export default function SaveButtonWrapped({ saveButton }: Props) {
  const doc = useDocument();

  return <Tooltip title="Save">{saveButton(JSON.stringify(doc))}</Tooltip>;
}
