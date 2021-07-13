import axios from "axios";

export const userLogin = async (email, password) => {
    return await axios.post("/api/users/login", {
        email: email,
        password: password
    });
};

export const userRegister = async (first_name, last_name, username, email, password) => {
    return await axios.post("/api/users/register", {
        first_name,
        last_name,
        username,
        email,
        password
    });
};