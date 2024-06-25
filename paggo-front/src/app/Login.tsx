import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  USER_TYPE,
  SIGN_UP_COMMAND as SIGN_UP,
  SIGN_IN_SUBMIT_BUTTON,
  MISSING_INFORMATION_SIGN_FORM,
  USERNAME,
  PASSWORD,
  ROUTE,
  ERROR_FORM,
} from "@/helpers/constants";
import Logo from "@/components/Logo";

import SignSubmitButton from "@/components/SignSubmitButton";
import { fetchGetUser } from "@/helpers/api/User";
import ThreeDotsLoading from "@/components/ThreeDotsLoading";
import InputField from "@/components/InputField";

export default function Login() {
  const router = useRouter();
  const { setUserId, loading, setLoading } =
    useGlobalContext();

  const [usuário, setUsuário] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();

    const isNotValidUser = !usuário.trim().length || !senha.trim().length;
    if (isNotValidUser) {
      setLoading(false);
      return alert(MISSING_INFORMATION_SIGN_FORM);
    }

    let user = await fetchGetUser("a");
    if (!user?.id) {
      setLoading(false);
      return alert(ERROR_FORM);
    }

    setUserId(user?.id);
    setLoading(false);

    router.push(ROUTE.HOME);
  };

  useEffect(() => {
    if (loading) setLoading(false);
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginY: 8,
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Logo />
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <InputField
                  name={USERNAME}
                  value={usuário}
                  handleChange={setUsuário}
                />
                <InputField
                  name={PASSWORD}
                  type="password"
                  value={senha}
                  handleChange={setSenha}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loading}
                >
                  {loading ? <ThreeDotsLoading /> : SIGN_IN_SUBMIT_BUTTON}
                </Button>
                <SignSubmitButton route={ROUTE.SIGN_UP} command={SIGN_UP} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}