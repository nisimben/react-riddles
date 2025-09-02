import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { findUser } from "../mock/dbHelper";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const user = findUser(formData.email, formData.password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    console.log("Login successful:", user);
    navigate("/dashboard", { state: { user: user.name } });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
        <Button
          variant="text"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up
        </Button>
      </Box>
    </Paper>
  );
}
