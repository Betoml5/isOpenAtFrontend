import axios from "axios";
const BASE_API = process.env.REACT_APP_API_URL;
const API = `${BASE_API}/users`;

export const addShop = async (userId, shopId) => {
  try {
    const response = await axios({
      url: `${API}/owner/addshop/${userId}/${shopId}`,
      method: "PATCH",
    });
    return response.data.body;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const removeShop = async function (userId, shopId) {
  try {
    const response = await axios({
      url: `${API}/owner/removeshop/${userId}/${shopId}`,
      method: "DELETE",
    });
    console.log(response.data.body);
    return response.data.body;
  } catch (error) {
    console.log(error);
    return error;
  }
};
