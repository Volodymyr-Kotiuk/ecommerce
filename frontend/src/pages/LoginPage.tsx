import { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      alert('Реєстрація успішна! Тепер увійдіть в систему.');
    } catch (error) {
      alert('Помилка реєстрації');
    }
  };

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      alert('Вхід успішний!');
      navigate('/');
    } catch (error) {
      alert('Помилка входу');
    }
  };

  return (
    <div>
      <h2>Вхід / Реєстрація</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Увійти</button>
      <button onClick={handleRegister}>Реєстрація</button>
    </div>
  );
};

export default LoginPage;
