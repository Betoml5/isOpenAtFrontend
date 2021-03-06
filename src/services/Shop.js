import axios from "axios";
// const API = "https://isopenatapi.herokuapp.com/api/shops";

const BASE_API = process.env.REACT_APP_API_URL;
const API = `${BASE_API}/shops`;

export const getShops = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/all`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};
export const getShopByName = async (name) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/name?name=${name}`,
    });
    return response.data.body;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getShop = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/shop/${id}`,
    });
    return response?.data?.body;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createShop = async (name, address, phone, location) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/create`,
      data: {
        name,
        address,
        phone,
        location,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const deleteShop = async (id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${API}/remove/${id}`,
      headers: { "X-Request-With": "XMLHttpRequest" },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const updateShop = async (id, update) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${API}/update/${id}`,
      data: update,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setPromo = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/setpromo/${shopId}`,
    });

    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setHot = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/sethot/${shopId}`,
    });

    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setOpen = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/setopen/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setAvgPrice = async (shopId, avgPrice) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/avgprice/${shopId}`,
      data: {
        avgPrice: avgPrice,
      },
    });
    return response.data.body;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getFamous = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/famous`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setCode = async (shopId) => {
  try {
    const response = await axios({
      method: "patch",
      url: `${API}/setcode/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setAvgTime = async (shopId, avgTime) => {
  try {
    const response = await axios({
      method: "patch",
      url: `${API}/avgtime/${shopId}`,
      data: {
        avgTime,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setRating = async (shopId, rating) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/rating/${shopId}`,
      data: {
        rating,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setShipping = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/shipping/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setHighLight = async (shopId) => {
  try {
    const response = await axios({
      method: "patch",
      url: `${API}/highlight/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const createReview = async (shopId, email, name, text) => {
  try {
    const response = await axios({
      method: "patch",
      url: `${API}/review/${shopId}?name=${name}&text=${text}`,
      data: email,
    });

    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const setImageCover = async (shopId, imageURL) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/image-cover/${shopId}`,
      data: {
        imageURL: imageURL,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const pushImageMenu = async (shopId, imageURL) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/image-menu/${shopId}`,
      data: {
        imageURL: imageURL,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const removeImageMenu = async (shopId, imageURL) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${API}/image-menu/${shopId}`,
      data: {
        imageURL: imageURL,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};
