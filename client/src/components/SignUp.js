import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from "../logo.svg";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Cancel";
import AuthContext from "../auth";
import { GlobalStoreContext } from "../store";
import "./SignUp.css";
export default function LoginScreen() {
  const { auth } = useContext(AuthContext);
  const { store } = useContext(GlobalStoreContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    auth.registerUser({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
      passwordVerify: formData.get('passwordVerify')
  }, store);
    console.log(auth.loggedIn);
  };
  return (
    <div className="foundation-screen">
      {/* <img src={logo} className="app-logo" alt="logo" /> */}
      <div className="splash-text">
        <Typography variant="h2" gutterBottom>
          Sign Up
        </Typography>
      </div>
      <Modal
        open={auth.error !== null}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Make a close button at the top right of the box */}
          <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
            <CloseIcon />
          </IconButton>
          <Alert severity="error">{auth.error}</Alert>
        </Box>
      </Modal>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          variant="filled"
          name="username"
          color="secondary"
          autoComplete="username"
          autoFocus
        />{" "}
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          variant="filled"
          color="secondary"
          id="password"
          autoComplete="current-password"
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          variant="filled"
          color="secondary"
          id="password"
          autoComplete="current-password"
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="confirmPassword"
          variant="filled"
          color="secondary"
          id="password"
          autoComplete="current-password"
        />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, color: "white", backgroundColor: "#6a3d45" }}
        >
          Sign Up
        </Button>{" "}
        <br />
        <Link to="/login/" variant="body2">
          {"Have an account? Sign in"}
        </Link>
      </Box>
    </div>
  );
}
