import { axiosInstance } from "./Config";

interface LoginResponse {
  token: string;
  userId: string;
  username: string;
}

export async function loginUser(credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse | null> {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    return res.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}

export async function logoutUser(): Promise<boolean> {
  try {
    await axiosInstance.post("/auth/logout");
    return true;
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    return false;
  }
}
