import axios from "axios";
const API = "http://localhost:3013/api/users";

export const signin = async (username, password) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/singin`,
      data: {
        username,
        password,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const signup = async (username, email, password) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/singup`,
      data: {
        username,
        email,
        password,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/user/${id}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/users/all`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const profile = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/profile/${id}`,
    });
    return response.data.body;
  } catch (error) {}
};

export const addFavorite = async (userId, shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/favorites/add/${userId}/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const removeFavorite = async (userId, shopIndex) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${API}/favorites/delete/${userId}/${shopIndex}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getFavorite = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/favorites/${id}`,
    });

    return response.data.body;
  } catch (error) {
    return error;
  }
};
