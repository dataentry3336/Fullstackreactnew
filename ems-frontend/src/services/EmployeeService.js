import axios from "axios"
import ListEmployeeComponent from "../components/ListEmployeeComponent";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);
