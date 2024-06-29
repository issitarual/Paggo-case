import { Dispatch, SetStateAction, useState } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { useGlobalContext } from "@/hooks/useGlobalContext";


export default function ImageUploader({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}) {
  const { userId, loading, setLoading } = useGlobalContext();

  const handleImageUpload = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const image = files[0];
    setSelectedImage(URL.createObjectURL(image));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={handleImageUpload}
        sx={{ width: "100%" }}
      />
    </Box>
  );
}
