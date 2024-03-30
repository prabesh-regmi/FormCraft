import { Api } from "./api";

export const handleLogin = async (payload) => {
    try {
        console.log("here",payload)
        const { email, password } = payload;
        const rs = await Api.post("/auth/login", { email, password });
        console.log("here")
        if (rs?.status === 200) {
            return rs.data.user;
        }
        return false;
    } catch (err) {
        console.log(err)
        return false;
    }
};
