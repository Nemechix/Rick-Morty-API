import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import "./Login.css";
import { Email, VisibilityOff, Lock, Visibility } from "@mui/icons-material";
import {Link} from 'react-router-dom'
function Login() {
  const [isPassVisible, setPassVisible] = useState(false);

  function handleClick() {
    setPassVisible(!isPassVisible);
  }

  return (
    <div className="Card-login-container">
      <Card className="card" sx={{ width: "700px" }} raised={true}>
        <CardHeader title="Login"></CardHeader>
        <CardContent>
          <TextField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            InputProps={{
              startAdornment: <Email />,
            }}
          ></TextField>
          <TextField
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={isPassVisible ? "text" : "password"}
            margin="dense"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={handleClick}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          ></TextField>
        </CardContent>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" color="secondary" variant="contained">
            Register
          </Button>
          <Link to="/api">
            <Button size="small" color="primary" variant="contained">
              Login
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
