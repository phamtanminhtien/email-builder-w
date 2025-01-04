import { TStyle } from '../../../../../../documents/blocks/helpers/TStyle';
type StylePropertyPanelProps = {
    name: keyof TStyle;
    value: TStyle;
    onChange: (style: TStyle) => void;
};
export default function SingleStylePropertyPanel({ name, value, onChange }: StylePropertyPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SingleStylePropertyPanel.d.ts.map