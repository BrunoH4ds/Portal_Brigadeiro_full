import { axiosInstance } from "./Config";

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
    role: string;
    user_type: string;
    ra?: string;
    curso?: string;
    turma?: string;
    rg?: string;
    materia?: string;
    created_at: string;
  };
}

export async function loginUser(credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse | null> {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    return res.data as LoginResponse;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}

export async function meUser() {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data; // retorna authenticated e user
  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
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
