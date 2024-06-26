import { Dispatch, SetStateAction, useState } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

export default function ImageUploader({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}) {
  const handleImageUpload = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const image = files[0];
    setSelectedImage(URL.createObjectURL(image));
  };
  return (
    <>
      <TextField
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={handleImageUpload}
      />
      {selectedImage && (
        <Box component="img" alt="Selected" src={selectedImage} />
      )}
    </>
  );
}
