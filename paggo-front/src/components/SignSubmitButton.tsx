import { Grid, Link } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function SignSubmitButton({
  setLogin,
  isLogin,
  command,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
  command: string;
}) {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Link
          onClick={() => setLogin(!isLogin)}
          variant="body2"
          sx={{ cursor: "pointer" }}
        >
          {command}
        </Link>
      </Grid>
    </Grid>
  );
}
