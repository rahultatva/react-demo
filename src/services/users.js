import axios from "./index";
import { config } from "../constants";

//API call to fetch users
export const fetchUsers = () => {
    return axios.get(`/api?results=${config.TOTAL_RECORDS}&inc=id,name,email,location,picture`);
};