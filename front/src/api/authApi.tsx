import axios from "axios";
import { Credentials, User } from "@shared_types";

// Define the base URL for your API (this could be in a config file)
const baseUrl = "http://localhost:4000/session";

export const loginUser = async (credentials: Credentials): Promise<string> => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data.token; // Assuming the API returns the token in the 'token' field
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const signupUser = async (
  credentials: Credentials
): Promise<User | null> => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, credentials);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};