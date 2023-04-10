import axios from "axios";

export const ax = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });
