import axios from "axios";
import { CreateUser, GetUser, User } from "@/types/UserType";
import { API_URL, EMPTY_USER } from "../constants";

const USER = "/users";

const fetchPostUser = async (user: CreateUser) => {
  try {
    const res = await axios.post<User>(`${API_URL + USER}`, user);
    return res.data || EMPTY_USER;
  } catch (error) {
    return EMPTY_USER;
  }
};

const fetchGetUser = async (user: GetUser) => {
  try {
    const res = await axios.put<User>(`${API_URL + USER}`, user);
    return res.data || EMPTY_USER;
  } catch (error) {
    return EMPTY_USER;
  }
};

export { fetchPostUser, fetchGetUser };
