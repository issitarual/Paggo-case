import axios from "axios";
import { UserRequest, User } from "@/types/UserType";
import { API_URL, EMPTY_DRIVER } from "../constants";

const DRIVER = "/Condutor";

const fetchPostUser = async (user: UserRequest) => {
  try {
    await axios.post<string>(`${API_URL + DRIVER}`, user);
    return true;
  } catch (error) {
    return false;
  }
};

const fetchGetUser = async (id: string) => {
  try {
    const res = await axios.get<User>(`${API_URL + DRIVER}/${id}`);
    return res.data || EMPTY_DRIVER;
  } catch (error) {
    return EMPTY_DRIVER;
  }
};

export { fetchPostUser, fetchGetUser };
