import * as React from "react";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Image } from "@/types/ImageType";
import TextRecognition from "./TextRecognition";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: Image;
  onClose: () => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle textAlign={"center"}>
        {selectedValue.description}
      </DialogTitle>
      <List sx={{ pt: 0, marginX: 2 }}>
        <TextRecognition
          selectedImage={selectedValue.uploadedImage}
          recognizedText={selectedValue.textRecognition}
        />
        <Typography textAlign={"center"}>{`Adicionado em ${new Date(
          selectedValue.uploadedAt
        ).toLocaleDateString("pt-br")}`}</Typography>
      </List>
    </Dialog>
  );
}
