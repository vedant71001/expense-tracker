import axios from "axios";
import { baseUrl } from "../constants/constants";

export const request = axios.create({
    baseURL: baseUrl
})