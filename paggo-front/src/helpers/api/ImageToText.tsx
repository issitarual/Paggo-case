import axios from "axios";
import { CreateImage, Image } from "@/types/ImageType";
import { API_URL } from "../constants";
import Tesseract from "tesseract.js";

const IMAGE = "/images";

const fetchPostImage = async (image: CreateImage, token: string) => {
  try {
    console.log(image);
    const res = await axios.post<number>(`${API_URL + IMAGE}`, image, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.status === 201;
  } catch (error) {
    return false;
  }
};

const fetchGetImages = async (token: string) => {
  try {
    const res = await axios.get<[Image]>(`${API_URL + IMAGE}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};

const fetchGetRecognizedText = async (selectedImage: string) => {
  try {
    const res = await Tesseract.recognize(selectedImage);
    return res?.data?.text;
  } catch (error) {
    return "";
  }
};

export { fetchPostImage, fetchGetImages, fetchGetRecognizedText };
