import axios from "axios";

export const getAllBoards = () => axios.get("/boards");
//getBoardsByUserId
export const getBoardsById = user_id => axios.get(`/users/${user_id}/boards`);
