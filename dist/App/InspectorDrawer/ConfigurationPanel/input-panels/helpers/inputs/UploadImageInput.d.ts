export type UploadImage = {
    onUpload: (file: File) => Promise<string>;
    onError?: (error: any) => void;
};
type Props = {
    label: string;
    defaultValue: string;
    onChange: (v: string) => void;
    uploadImage?: UploadImage;
};
export default function UploadImageInput({ label, defaultValue, onChange, uploadImage, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=UploadImageInput.d.ts.map