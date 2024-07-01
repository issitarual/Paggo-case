import axios from "axios";
import { CreateUser, GetUser } from "@/types/UserType";
import { API_URL } from "../constants";

const USER = "/users";

interface Response {
  access_token: string;
}

const fetchPostUser = async (user: CreateUser) => {
  try {
    const res = await axios.post<number>(`${API_URL + USER}`, user);
    return res?.status === 201
  } catch (error) {
    return false;
  }
};

const fetchGetUser = async (user: GetUser) => {
  try {
    const res = await axios.put<Response>(`${API_URL + USER}`, user);
    return  res?.data?.access_token;
  } catch (error) {
    return false;
  }
};

export { fetchPostUser, fetchGetUser };
