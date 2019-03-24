import axios from "axios";

export const getAllPins = () => axios.get("/pins");

export const getSinglePin = id => axios.get(`/pins/${id}`);

export const getPinsByBoardId = board_id => axios.get(`/boards/${board_id}`);

export const createPin = pin => axios.post("/pins", pin);
