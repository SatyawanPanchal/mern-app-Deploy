import axios from "axios";

const API = axios.create({ baseURL: "https://api.roshnieducation.com" });

export const fetchStudents = () => API.get("/students");
export const createStudent = (student) => API.post("/students", student);
export const updateStudent = (id, updatedStudent) =>
  API.put(`/students/${id}`, updatedStudent);
export const deleteStudent = (id) => API.delete(`/students/${id}`);
