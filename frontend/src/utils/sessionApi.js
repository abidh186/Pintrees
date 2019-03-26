import axios from "axios";

export const loginUser = user => axios.post("/users/login", user);

export const registerUser = user => axios.post("/users/new", user);

export const logoutUser = () => axios.post("/users/logout");

export const getUser = () => axios.get("/users/getuser");

export const getPinsByUserId = user_id => axios.get(`/${user_id}/pins`);

// export const getAllUserIds = () => axios.get("/users");
