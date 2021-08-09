import axios from "./client";

export const getUsers = async () => {
  const response = await axios.get(`http://jsonplaceholder.typicode.com/users`);
  return response.data;
};
