import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import Main from "@/components/Main";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { DESCRIPTION, DRAWER_WIDTH, LOAD_IMAGE, OCR_TITLE } from "@/helpers/constants";
import DrawerMenu from "@/components/DrawerMenu";
import InputField from "@/components/InputField";
import ImageUploader from "@/components/ImageUploader";
import TextRecognition from "@/components/TextRecognition";
import Tesseract from "tesseract.js";
import ThreeDotsLoading from "@/components/ThreeDotsLoading";

export default function Home() {
  const { openDrawer, userId, loading, setLoading } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [description, setDescription] = useState("");
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    setWindowWidth(window.screen.availWidth);
  }, []);
  console.log(openDrawer);

  const handleRecognizeText = async (e: React.SyntheticEvent) => {
    setLoading(true);
    if (selectedImage) {
      const result = await Tesseract.recognize(selectedImage);
      setRecognizedText(result.data.text);
    }
    setLoading(false)
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: grey[100] }}>
      <CssBaseline />
      <DrawerMenu />
      <Main open={windowWidth < 780 ? false : openDrawer}>
        <Box
          sx={{
            marginTop: "100px",
            paddingLeft: `${DRAWER_WIDTH}px`,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h5"
            component="p"
            textAlign="center"
          >
            {OCR_TITLE}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "80%",
              marginLeft: "10%",
            }}
            component="form"
          >
            <InputField
              name={DESCRIPTION}
              value={description}
              handleChange={setDescription}
            />
            <ImageUploader
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              onClick={handleRecognizeText}
            >
              {loading ? <ThreeDotsLoading /> : LOAD_IMAGE}
            </Button>
            <TextRecognition
              selectedImage={selectedImage}
              recognizedText={recognizedText}
            />
          </Box>
        </Box>
      </Main>
    </Box>
  );
}
