import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

import {
  SIGN_UP_COMMAND as SIGN_UP,
  SIGN_IN_COMMAND as SIGN_IN,
  SIGN_IN_SUBMIT_BUTTON,
  MISSING_INFORMATION_SIGN_FORM,
  USERNAME,
  PASSWORD,
  EMAIL,
  ROUTE,
  ERROR_FORM,
  SIGN_UP_SUBMIT_BUTTON,
  API_URL,
} from "@/helpers/constants";
import Logo from "@/components/Logo";

import SignSubmitButton from "@/components/SignSubmitButton";
import { fetchGetUser, fetchPostUser } from "@/helpers/api/User";
import ThreeDotsLoading from "@/components/ThreeDotsLoading";
import InputField from "@/components/InputField";

export default function Login() {
  const router = useRouter();
  const { loading, setLoading } = useGlobalContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setLogin] = useState(true);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();

    let isNotValidUser = !email.trim().length || !password.trim().length;
    if (!isLogin) {
      isNotValidUser = isNotValidUser || !username.trim().length;
    }
    if (isNotValidUser) {
      setLoading(false);
      return alert(MISSING_INFORMATION_SIGN_FORM);
    }

    let validate = true;
    if (isLogin) {
      const token = await fetchGetUser({ email, password });
      token
        ? localStorage.setItem("paggo_token", JSON.stringify(token))
        : (validate = false);
    } else {
      validate = !!(await fetchPostUser({ username, email, password }));
    }
    if (!validate) {
      setLoading(false);
      return alert(ERROR_FORM);
    }

    setUsername("");
    setPassword("");
    setEmail("");
    setLoading(false);

    isLogin ? router.push(ROUTE.HOME) : setLogin(!isLogin);
  };

  const handleGoogleLogin = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();

    window.location.assign(API_URL + ROUTE.GOOGLE);
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
                {!isLogin && (
                  <InputField
                    name={USERNAME}
                    value={username}
                    handleChange={setUsername}
                  />
                )}
                <InputField
                  name={EMAIL}
                  value={email}
                  handleChange={setEmail}
                />

                <InputField
                  name={PASSWORD}
                  type="password"
                  value={password}
                  handleChange={setPassword}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                  disabled={loading}
                >
                  {loading ? (
                    <ThreeDotsLoading />
                  ) : isLogin ? (
                    SIGN_IN_SUBMIT_BUTTON
                  ) : (
                    SIGN_UP_SUBMIT_BUTTON
                  )}
                </Button>
                {isLogin && (
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    disabled={loading}
                    sx={{ mb: 2 }}
                    onClick={handleGoogleLogin}
                  >
                    <GoogleIcon sx={{ mr: 2 }} />
                    Entrar com google
                  </Button>
                )}
                <SignSubmitButton
                  command={isLogin ? SIGN_UP : SIGN_IN}
                  setLogin={setLogin}
                  isLogin={isLogin}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
