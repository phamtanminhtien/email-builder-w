import { InputProps } from '@mui/material';
type Props = {
    label: string;
    rows?: number;
    placeholder?: string;
    helperText?: string | JSX.Element;
    InputProps?: InputProps;
    defaultValue: string;
    onChange: (v: string) => void;
};
export default function TextInput({ helperText, label, placeholder, rows, InputProps, defaultValue, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextInput.d.ts.map