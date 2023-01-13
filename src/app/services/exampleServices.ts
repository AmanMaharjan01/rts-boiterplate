import httpClient from "./httpClient";

export const getExample = async () => {
  return await httpClient.get("/api/example");
};
