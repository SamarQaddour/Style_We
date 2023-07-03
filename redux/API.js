import axios from "axios";

export const API = axios.create({
	baseURL: process.env.REACT_APP_USER_BASE_URL,
	headers: { dev: true }

})
