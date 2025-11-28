import { axiosInstance } from "./Config";

interface Stats {
  users: number;
  news: number;
  contacts: number;
  pages: number;
}

export async function getStats(): Promise<Stats | null> {
  try {
    const res = await axiosInstance.get("/stats");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    return null;
  }
}
