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
import { UploadImage } from "./InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/UploadImageInput";

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
  rightTool?: JSX.Element;
  leftTool?: JSX.Element;
  uploadImage?: UploadImage;
};

export default function App({
  config,
  samplesDrawer,
  rightTool,
  leftTool,
  uploadImage,
}: AppProps) {
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
      <InspectorDrawer uploadImage={uploadImage} />
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
          rightTool={rightTool}
          leftTool={leftTool}
        />
      </Stack>
    </>
  );
}
