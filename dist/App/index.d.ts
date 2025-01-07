import { TValue } from '../documents/editor/EditorContext';
export type AppProps = {
    config?: Partial<TValue>;
    samplesDrawer?: JSX.Element;
    saveButton?: (data: string) => JSX.Element;
};
export default function App({ config, samplesDrawer, saveButton }: AppProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map