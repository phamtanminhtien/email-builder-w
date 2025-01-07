import { useEffect } from "react";

import { Stack, useTheme } from "@mui/material";

import {
  setState,
  TValue,
  useInspectorDrawerOpen,
  useSamplesDrawerOpen,
} from "../documents/editor/EditorContext";

import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from "./InspectorDrawer";
import SamplesDrawer, { SAMPLES_DRAWER_WIDTH } from "./SamplesDrawer";
import TemplatePanel from "./TemplatePanel";

function useDrawerTransition(
  cssProperty: "margin-left" | "margin-right",
  open: boolean
) {
  const { transitions } = useTheme();
  return transitions.create(cssProperty, {
    easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
    duration: !open
      ? transitions.duration.leavingScreen
      : transitions.duration.enteringScreen,
  });
}

export type AppProps = {
  config?: Partial<TValue>;
  samplesDrawer?: JSX.Element;
  saveButton?: (data: string) => JSX.Element;
};

export default function App({ config, samplesDrawer, saveButton }: AppProps) {
  useEffect(() => {
    if (config) {
      setState(config);
    }
  }, []);

  const inspectorDrawerOpen = useInspectorDrawerOpen();
  const samplesDrawerOpen = useSamplesDrawerOpen();

  const marginLeftTransition = useDrawerTransition(
    "margin-left",
    samplesDrawerOpen
  );

  const marginRightTransition = useDrawerTransition(
    "margin-right",
    inspectorDrawerOpen
  );

  return (
    <>
      <InspectorDrawer />
      {samplesDrawer && <SamplesDrawer samplesDrawer={samplesDrawer} />}

      <Stack
        sx={{
          marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
          marginLeft: samplesDrawer
            ? samplesDrawerOpen
              ? `${SAMPLES_DRAWER_WIDTH}px`
              : 0
            : 0,
          transition: [marginLeftTransition, marginRightTransition].join(", "),
        }}
      >
        <TemplatePanel
          showToggleSamplesPanelButton={!!samplesDrawer}
          saveButton={saveButton}
        />
      </Stack>
    </>
  );
}
