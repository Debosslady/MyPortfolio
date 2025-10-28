
import { ContactForm } from "@/hooks/types";
import api from "./axios"; 

export const sendContact = async (data: ContactForm) => {
  const response = await api.post("/contact", data);
  return response.data;
};
