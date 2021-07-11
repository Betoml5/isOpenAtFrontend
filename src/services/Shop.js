import axios from "axios";
const API = "http://192.168.1.66:3013/api/shops";

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

export const createUser = async (name, address, email, phone) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API}/create`,
      data: {
        name,
        address,
        email,
        phone,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${API}/remove/${id}`,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id, name, email, address) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/update/${id}`,
      data: {
        name,
        email,
        address,
      },
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const isPromo = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/ispromo/${shopId}`,
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

export const isHot = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/ishot/${shopId}`,
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

export const isOpen = async (shopId) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: `${API}/isopen/${shopId}`,
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

export const getAvgPrice = async (shopId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/avgprice/${shopId}`,
    });
    return response.data.body;
  } catch (error) {
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

export const getCode = async (shopId) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/code/${shopId}`,
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

export const getAvgTime = async (shopId) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/avgtime/${shopId}`,
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

export const getRating = async (shopId) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/rating/${shopId}`,
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
