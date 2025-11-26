import { axiosInstance } from "./Config";
import { UserType } from "@/types/user";

export async function getAllUsers(): Promise<UserType[] | null> {
  console.log("Calling getAllUsers API");
  try {
    const res = await axiosInstance.get("/users");
    console.log("getAllUsers response received");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar os usuários:", error);
    return null;
  }
}

export async function getUserById(id: string): Promise<UserType | null> {
  console.log("Calling getUserById API with id:", id);
  try {
    const res = await axiosInstance.get(`/users/${id}`);
    console.log("getUserById response received for id:", id);
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
}

export async function createUser(
  user: Partial<UserType>
): Promise<UserType | null> {
  try {
    const res = await axiosInstance.post("/users", user);
    return res.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }
}

export async function updateUser(
  id: string,
  updates: Partial<UserType>
): Promise<UserType | null> {
  try {
    const res = await axiosInstance.put(`/users/${id}`, updates);
    return res.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return null;
  }
}

export async function deleteUser(id: string): Promise<boolean> {
  try {
    await axiosInstance.delete(`/users/${id}`);
    return true;
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return false;
  }
}
