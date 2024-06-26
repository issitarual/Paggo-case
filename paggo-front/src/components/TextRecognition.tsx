import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { Box, Button, CssBaseline, Typography } from "@mui/material";

const TextRecognition = ({ selectedImage }: {selectedImage: string}) => {
  const [recognizedText, setRecognizedText] = useState('');
  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage);
        setRecognizedText(result.data.text);
      }
    };
    recognizeText();
  }, [selectedImage]);
  return (
    <Box>
      <Typography variant="h5">Recognized Text:</Typography>
      <Typography variant="body1">{recognizedText}</Typography>
    </Box>
  );
};
export default TextRecognition;