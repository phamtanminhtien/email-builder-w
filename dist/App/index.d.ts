import { TValue } from '../documents/editor/EditorContext';
import { UploadImage } from './InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/UploadImageInput';
export type AppProps = {
    config?: Partial<TValue>;
    samplesDrawer?: JSX.Element;
    rightTool?: JSX.Element;
    leftTool?: JSX.Element;
    uploadImage?: UploadImage;
};
export default function App({ config, samplesDrawer, rightTool, leftTool, uploadImage, }: AppProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map