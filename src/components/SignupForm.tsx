import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { isEmailTaken, addUser } from "../mock/dbHelper";

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    if (isEmailTaken(formData.email)) {
      setError("Email already registered.");
      return;
    }

    addUser({ ...formData });
    console.log("Signup successful:", formData);
    navigate("/dashboard", { state: { user: formData.name } });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" mb={2}>Sign Up</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
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
          Sign Up
        </Button>
        <Button
          variant="text"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate("/")}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Paper>
  );
}
