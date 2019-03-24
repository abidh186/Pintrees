import axios from "axios";

export const getAllBoards = () => axios.get("/boards");

export const getBoardsById = user_id => axios.get(`/users/${user_id}/boards`);

export const createBoard = board => axios.post("/boards", board);
