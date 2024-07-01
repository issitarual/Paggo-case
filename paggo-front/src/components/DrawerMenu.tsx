import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import AppBar from "./AppBar";
import DrawerHeader from "./DrawerHeader";
import {
  APP_NAME,
  DRAWER_WIDTH,
  IMAGES,
  LOGOUT,
  ROUTE,
  USER_WITHOUT_IMAGES,
} from "@/helpers/constants";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from "next/navigation";
import { Image } from "@/types/ImageType";
import { SimpleDialog } from "./Dialog";

export default function PersistentDrawerLeft({ images }: { images: Image[] }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<Image | null>(null);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("paggo_token");
    router.push(ROUTE.REGISTER);
  };

  const handleShowImage = (image: Image) => {
    setSelectedImage(image);
    handleClickOpenDialog();
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setOpenDialog(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => router.push(ROUTE.HOME)}
            sx={{ cursor: "pointer" }}
          >
            {APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            textAlign={"center"}
            marginTop={1}
            fontWeight={"bold"}
            sx={{ width: "100%" }}
          >
            {IMAGES}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {!images.length && (
          <Typography variant="body1" textAlign={"center"} margin={2}>
            {USER_WITHOUT_IMAGES}
          </Typography>
        )}
        <Box>
          <List>
            {images.map((i, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleShowImage(i)}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={i.description} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {selectedImage && (
            <SimpleDialog
              selectedValue={selectedImage}
              open={open}
              onClose={handleCloseDialog}
            />
          )}
          <List sx={{ position: "fixed", bottom: 0, width: DRAWER_WIDTH }}>
            <Divider />
            <ListItem key={LOGOUT} onClick={handleLogOut} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={LOGOUT} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
