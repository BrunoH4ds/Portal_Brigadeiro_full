import { axiosInstance } from "./Config";
import { noticeType } from "@/types/notice";

export async function getAllNoticias(): Promise<noticeType[] | null> {
  try {
    const res = await axiosInstance.get("/news");
    console.log("getAllNoticias response received");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar as notícias:", error);
    return null;
  }
}

export async function getNoticiaById(id: string): Promise<noticeType | null> {
  try {
    const res = await axiosInstance.get(`/news/${id}`);
    console.log("getNoticiaById response received for id:", id);
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
}

export async function createNoticia(
  noticia: Partial<noticeType>
): Promise<noticeType | null> {
  try {
    const res = await axiosInstance.post("/news", noticia);
    return res.data;
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
    return null;
  }
}

export async function updateNoticia(
  id: string,
  updates: Partial<noticeType>
): Promise<noticeType | null> {
  try {
    const res = await axiosInstance.put(`/news/${id}`, updates);
    return res.data;
  } catch (error) {
    console.error("Erro ao atualizar notícia:", error);
    return null;
  }
}

export async function deleteNoticia(id: string): Promise<boolean> {
  try {
    await axiosInstance.delete(`/news/${id}`);
    return true;
  } catch (error) {
    console.error("Erro ao deletar notícia:", error);
    return false;
  }
}
