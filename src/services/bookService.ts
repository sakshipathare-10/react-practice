import api from "./api";

export const getBook = async () => {
  const response = await api.get("/posts/1");
  return response.data;
};
