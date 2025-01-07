import { useState } from "react";

import { Box, CircularProgress, InputLabel } from "@mui/material";

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
export default function UploadImageInput({
  label,
  defaultValue,
  onChange,
  uploadImage,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onUpload = (file: File) => {
    try {
      setUploading(true);
      uploadImage?.onUpload(file).then((url) => {
        setValue(url);
        onChange(url);
      });
    } catch (error) {
      uploadImage?.onError?.(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>
      <InputLabel shrink>{label}</InputLabel>
      <input
        disabled={uploading}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onUpload(file);
          }
        }}
      />
      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          cursor: "pointer",
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
        }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.click();
        }}
      >
        <Box
          component={"img"}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
          src={value}
          style={{ maxWidth: "100%" }}
        />
        {uploading && (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.488)",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "white" }} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
