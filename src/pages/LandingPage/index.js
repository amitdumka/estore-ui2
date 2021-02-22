import React, { useState, lazy, Suspense } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
//import * as Yup from 'yup';
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import { Helmet } from "react-helmet";
import FacebookIcon from "../..//icons/Facebook";
import GoogleIcon from "../../icons/Google";
import Page from "../../components/Page";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme as useAppTheme } from "material-ui-shell/lib/providers/Theme";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary1: { main: "#242424" },
    secondary1: {
      main: "#c62828",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  rootB: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexWrap: "wrap",
    justify: "center",
    padding:24,
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
      justify: "center",
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const history = useHistory();
  const [scrollbar, setScrollbar] = useState(null);
  const [transparent, setTransparent] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [components, setComponents] = useState(null);
  const [top, setTop] = useState(null);
  const { isRTL } = useAppTheme();
  const handel_LoginFunction = () => {
    alert("Logged In");
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment justify="center">
        <CssBaseline />
        <Helmet>
          <title>Login: eStore - Next Gen</title>
        </Helmet>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item m={3}>
            <div className={classes.rootb}>
              <Paper elevation={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  height="100%"
                  justifyContent="center"
                >
                  <Container maxWidth="sm">
                    <Formik
                      initialValues={{
                        email: "demo@aprajitaretails.io",
                        password: "Password123",
                      }}
                      // validationSchema={Yup.object().shape({
                      //   email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                      //   password: Yup.string().max(255).required('Password is required')
                      // })}
                      onSubmit={() => {
                        history.push("/app/dashboard", { replace: true });
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <Box mb={3}>
                            <Grid container spacing={3}>
                              <Grid item item xs={12} sm={6}>
                                <Typography color="textSecondary" variant="h3">
                                  eStore
                                </Typography>
                              </Grid>
                              <Grid item item xs={12} sm={6} justify="right" align="right">
                                <Typography color="secondary" variant="h4" >
                                  Sign In
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography
                                  color="textSecondary"
                                  gutterBottom
                                  variant="body2"
                                >
                                  Sign in on the internal platform
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Button
                                color="primary"
                                fullWidth
                                startIcon={<FacebookIcon />}
                                onClick={handleSubmit}
                                size="large"
                                variant="contained"
                              >
                                Login with Facebook
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Button
                                fullWidth
                                startIcon={<GoogleIcon />}
                                onClick={handleSubmit}
                                size="large"
                                variant="contained"
                              >
                                Login with Google
                              </Button>
                            </Grid>
                          </Grid>
                          <Box mt={3} mb={1}>
                            <Typography
                              align="center"
                              color="textSecondary"
                              variant="body1"
                            >
                              or login with email address
                            </Typography>
                          </Box>
                          <TextField
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            variant="outlined"
                          />
                          <TextField
                            error={Boolean(touched.password && errors.password)}
                            fullWidth
                            helperText={touched.password && errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            variant="outlined"
                          />
                          <Box my={2}>
                            <Button
                              fullWidth
                              color="secondary"
                              disabled={isSubmitting}
                              size="large"
                              style={{
                                marginVertical: "10px",
                                borderRadius: "40px",
                                fontSize: "bold",
                              }}
                              type="submit"
                              variant="contained"
                              onClick={handel_LoginFunction}
                            >
                              Sign
                            </Button>
                          </Box>
                          <Typography color="textSecondary" variant="body1">
                            Don&apos;t have an account?{" "}
                            <Link
                              component={RouterLink}
                              to="/register"
                              variant="h6"
                            >
                              Sign up
                            </Link>
                          </Typography>
                        </form>
                      )}
                    </Formik>
                  </Container>
                </Box>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
};
export default LoginView;
