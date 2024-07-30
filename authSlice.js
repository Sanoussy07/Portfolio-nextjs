import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  messages: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = action.payload;

      if (users.some(user => user.email === newUser.email)) {
        alert('Cet email est déjà enregistré.');
        return;
      }

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      state.user = newUser;
      state.isAuthenticated = true;
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    },
    login(state, action) {
      const { email, password } = action.payload;
      const storedPassword = getStoredPassword(email);

      if (storedPassword && storedPassword === password) {
        state.isAuthenticated = true;
        state.user = { email };
        state.messages = 'Connexion réussie !';
      } else {
        state.isAuthenticated = false;
        state.user = null;
        state.messages = 'Adresse email ou mot de passe incorrect.';
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('loggedInUser');
      state.messages = '';
    },
    checkAuth: (state) => {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser) {
        state.user = loggedInUser;
        state.isAuthenticated = true;
      }
    }
  },
});

export const { signup, login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;

// Fonction getStoredPassword (anciennement checkAuth)
function getStoredPassword(email) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email);
  return user ? user.password : null;
}
