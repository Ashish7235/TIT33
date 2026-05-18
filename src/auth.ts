import axios from "axios";
import { CONFIG } from "./config";

const AUTH_URL = "http://4.224.186.213/evaluation-service/auth";

export async function getAuthToken() {
  try {
    const response = await axios.post(AUTH_URL, {
      email: CONFIG.email,
      name: CONFIG.name,
      rollNo: CONFIG.rollNo,
      accessCode: CONFIG.accessCode,
      clientID: CONFIG.clientID,
      clientSecret: CONFIG.clientSecret,
    });

    return response.data.access_token;

  } catch (error: any) {
    console.error("Authentication Failed");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}