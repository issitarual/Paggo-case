import { Box, Typography } from "@mui/material";
import { APP_NAME } from "@/helpers/constants";

export default function Logo() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", cursor: "pointer" }}>
        {APP_NAME}
      </Typography>
    </Box>
  );
}