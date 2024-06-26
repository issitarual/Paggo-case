import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import Main from "@/components/Main";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { DRAWER_WIDTH } from "@/helpers/constants";
import MainHeader from "@/components/MainHeader";
import DrawerMenu from "@/components/DrawerMenu";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import InputField from "@/components/InputField";
import ImageUploader from "@/components/ImageUploader";
import TextRecognition from "@/components/TextRecognition";

export default function Home() {
  const router = useRouter();
  const { openDrawer, userId, loading, setLoading } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setWindowWidth(window.screen.availWidth);
  }, []);
  console.log(openDrawer);
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
            Transforme sua imagem em texto
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
              name={"Descrição"}
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
            >
              Carregar Imagem
            </Button>
            <TextRecognition selectedImage={selectedImage} />
          </Box>
        </Box>
      </Main>
    </Box>
  );
}
