import axios from "axios";
const BASE_API = process.env.REACT_APP_API_URL;
const API = `${BASE_API}/users`;

export const signin = async (username, password) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/login`,
      data: {
        username,
        password,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const signup = async (username, email, password) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/create`,
      data: {
        username,
        email,
        password,
      },
    });
    console.log(response);
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
  } catch (error) {
    return error;
  }
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

export const removeFavorite = async (userId, shopId) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${API}/favorites/delete/${userId}/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getFavorites = async (id) => {
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

export const setImage = async (id, imageurl) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/image/${id}`,
      data: {
        imageurl: imageurl,
      },
    });
    console.log("imageURL", imageurl);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
