import axios from "axios";

export const userLogin = async (email, password) => {
    return await axios.post("/api/users/login", {
        email: email,
        password: password
    });
};