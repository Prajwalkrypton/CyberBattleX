import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Change if needed

export const authService = {
  login: async (data) => {
    return axios.post(`${API_BASE_URL}/login`, data, { withCredentials: true });
  },
  signup: async (data) => {
    return axios.post(`${API_BASE_URL}/signup`, data, { withCredentials: true });
  },
  getCurrentUser: async () => {
    const token = localStorage.getItem('token');
    return axios.get(`${API_BASE_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    });
  }
};

export const userService = {
  updateXP: async (userId, xpGain) => {
    return axios.post(`${API_BASE_URL}/update_xp`, { user_id: userId, xp_gain: xpGain }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      withCredentials: true
    });
  }
};
