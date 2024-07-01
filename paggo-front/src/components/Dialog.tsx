import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Image } from "@/types/ImageType";
import TextRecognition from "./TextRecognition";

const emails = ["username@gmail.com", "user02@gmail.com"];

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
  console.log(selectedValue);

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
