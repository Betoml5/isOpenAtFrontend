import axios from "axios";
const API = "http://localhost:3013/api/shops";

export const getShops = async (setState) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/all`,
    });
    console.log(response.data.body);
    setState(response.data.body);
  } catch (error) {
    return error;
  }
};

export const getShop = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/shop/${id}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};
