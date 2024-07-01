import React from "react";
import { Box, Typography } from "@mui/material";

const TextRecognition = ({
  selectedImage,
  recognizedText,
}: {
  selectedImage: string;
  recognizedText: string;
}) => {
  return (
    <>
      {recognizedText && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box
            component="img"
            alt="Selected"
            src={selectedImage}
            sx={{
              borderRadius: "5px",
              border: "1px solid #1976D2",
              width: "50%",
            }}
          />
          <Box marginLeft={2} width={"50%"}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Recognized Text:
            </Typography>
            <Typography variant="subtitle2" textAlign={"justify"}>
              {recognizedText}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
export default TextRecognition;
