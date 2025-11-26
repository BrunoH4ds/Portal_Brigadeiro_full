import { axiosInstance } from "./Config";
import { noticeType } from "@/types/notice";

export async function getAllNoticias(): Promise<noticeType[] | null> {
  try {
    const res = await axiosInstance.get("/news");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar as notícias:", error);
    return null;
  }
}

export async function getNoticiaById(id: string): Promise<noticeType | null> {
  try {
    const res = await axiosInstance.get(`/news/${id}`);
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
}
