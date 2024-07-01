import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import Main from "@/components/Main";
import { useGlobalContext } from "../hooks/useGlobalContext";
import {
  DESCRIPTION,
  DRAWER_WIDTH,
  LOAD_IMAGE,
  OCR_TITLE,
} from "@/helpers/constants";
import DrawerMenu from "@/components/DrawerMenu";
import InputField from "@/components/InputField";
import ImageUploader from "@/components/ImageUploader";
import TextRecognition from "@/components/TextRecognition";
import Tesseract from "tesseract.js";
import ThreeDotsLoading from "@/components/ThreeDotsLoading";
import {
  fetchPostImage,
  fetchGetRecognizedText,
  fetchGetImages,
} from "@/helpers/api/ImageToText";
import { CreateImage, Image } from "@/types/ImageType";

export default function Home() {
  const { openDrawer, userId, loading, setLoading } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [description, setDescription] = useState("");
  const [recognizedText, setRecognizedText] = useState("");
  const [userImages, setUserImages] = useState<Image[]>([]);

  useEffect(() => {
    setWindowWidth(window.screen.availWidth);
    handleUserImages();
  }, []);

  const getToken = () => {
    const token = localStorage?.getItem("paggo_token");
    return JSON.parse(token || "");
  };

  const handleUserImages = async () => {
    const parsed_token = getToken();
    const images = (await fetchGetImages(parsed_token)) || [];
    setUserImages(images);
  };

  const handleRecognizeText = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    if (selectedImage) {
      const text = await fetchGetRecognizedText(selectedImage);
      handlePostImage(text);

      setLoading(false);
    }
  };

  const handlePostImage = async (text: string) => {
    setRecognizedText(text);
    const image: CreateImage = {
      description,
      textRecognition: text,
      uploadedImage: selectedImage,
    };

    const parsed_token = getToken();

    const createImage = await fetchPostImage(image, parsed_token);
    if (!createImage) {
      alert("Algo deu errado, tente novamente");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: grey[100] }}>
      <CssBaseline />
      <DrawerMenu images={userImages} />
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
