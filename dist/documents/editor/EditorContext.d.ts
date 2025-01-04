import { TEditorConfiguration } from './core';
type Tab = "editor" | "preview" | "json" | "html";
export type TValue = {
    document: TEditorConfiguration;
    selectedBlockId: string | null;
    selectedSidebarTab: "block-configuration" | "styles";
    selectedMainTab: Tab;
    selectedScreenSize: "desktop" | "mobile";
    inspectorDrawerOpen: boolean;
    samplesDrawerOpen: boolean;
    tools: {
        [key in Tab]: boolean;
    };
};
export declare function useTools(): {
    editor: boolean;
    preview: boolean;
    json: boolean;
    html: boolean;
};
export declare function useDocument(): TEditorConfiguration;
export declare function useSelectedBlockId(): string | null;
export declare function useSelectedScreenSize(): "desktop" | "mobile";
export declare function useSelectedMainTab(): Tab;
export declare function setSelectedMainTab(selectedMainTab: TValue["selectedMainTab"]): void;
export declare function useSelectedSidebarTab(): "styles" | "block-configuration";
export declare function useInspectorDrawerOpen(): boolean;
export declare function useSamplesDrawerOpen(): boolean;
export declare function setState(state: Partial<TValue>): void;
export declare function setSelectedBlockId(selectedBlockId: TValue["selectedBlockId"]): void;
export declare function setSidebarTab(selectedSidebarTab: TValue["selectedSidebarTab"]): void;
export declare function resetDocument(document: TValue["document"]): void;
export declare function setDocument(document: TValue["document"]): void;
export declare function toggleInspectorDrawerOpen(): void;
export declare function toggleSamplesDrawerOpen(): void;
export declare function setSelectedScreenSize(selectedScreenSize: TValue["selectedScreenSize"]): void;
export {};
//# sourceMappingURL=EditorContext.d.ts.map