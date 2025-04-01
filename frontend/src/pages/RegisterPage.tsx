import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>
        Реєстрація
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ім'я користувача"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Зареєструватися
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
