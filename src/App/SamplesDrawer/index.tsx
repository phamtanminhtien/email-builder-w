import React from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { useSamplesDrawerOpen } from "../../documents/editor/EditorContext";

import SidebarButton from "./SidebarButton";
import logo from "./waypoint.svg";

export const SAMPLES_DRAWER_WIDTH = 240;

type Props = {
  samplesDrawer: React.ReactNode;
};

export default function SamplesDrawer({ samplesDrawer }: Props) {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack
        spacing={3}
        py={1}
        px={2}
        width={SAMPLES_DRAWER_WIDTH}
        justifyContent="space-between"
        height="100%"
      >
        <Stack
          spacing={2}
          sx={{
            "& .MuiButtonBase-root": {
              width: "100%",
              justifyContent: "flex-start",
            },
          }}
        >
          {samplesDrawer}
        </Stack>
      </Stack>
    </Drawer>
  );
}
