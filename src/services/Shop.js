import axios from "axios";
const API = "http://localhost:3013/api/shops";

export const getShops = async (setState) => {
  const response = await axios({
    method: "GET",
    url: `${API}/all`,
  });
  console.log(response.data.body);
  setState(response.data.body);
};
