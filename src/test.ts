import { getAuthToken } from "./auth";

async function test() {
  const token = await getAuthToken();

  console.log("TOKEN:");
  console.log(token);
}

test();