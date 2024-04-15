import axios from "axios";

export const requestImagesByQuery = async (query = "", page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=_GcPUqQvTkuJ9X11ue4CuXyUx08X2HB3ZZQQgcF5zjU&query=${query}&page=${page}&per_page=12`
  );
  return data;
};
