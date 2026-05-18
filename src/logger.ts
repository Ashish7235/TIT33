const axios = require("axios");
const { getAuthToken } = require("./auth.");

const LOG_URL = "http://4.224.186.213/evaluation-service/logs";

type Stack = "backend" | "frontend";

type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

export async function Log(
  stack: Stack,
  level: Level,
  packageName: string,
  message: string
) {
  try {

    const token = await getAuthToken();

    const response = await axios.post(
      LOG_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log Created");

    return response.data;

  } catch (error: any) {

    console.error("Log Failed");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}