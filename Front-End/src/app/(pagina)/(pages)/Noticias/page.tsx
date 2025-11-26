"use client";

import { useState, useEffect } from "react";
import { getAllNoticias } from "../../../../../api/newsCrud";
import { IconNews } from "@tabler/icons-react";
import NewsCarousel from "@/components/Page_Components/comp_news/NewsCarousel";
import SearchBar from "@/components/Page_Components/comp_news/SearchBar";
import NewsList from "@/components/Page_Components/comp_news/ItemList";
import type { noticeType } from "@/types/notice";
import Loading from "@/components/optional/Loading";

export default function NewsPage() {
  const [allNews, setAllNews] = useState<noticeType[] | null>(null);
  const [filteredNews, setFilteredNews] = useState<noticeType[] | null>(null);
  const [viewMode, setViewMode] = useState<"recent" | "all">("recent");

  // Carrega as notícias da API ao iniciar
  useEffect(() => {
    async function fetchNews() {
      const res = await getAllNoticias();
      if (!res) return;

      setAllNews(res);
      setFilteredNews(res);
    }

    fetchNews();
  }, []);

  // Atualiza lista quando o modo muda (recentes ou todas)
  useEffect(() => {
    if (!allNews) return;

    if (viewMode === "recent") {
      const sorted = [...allNews].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setFilteredNews(sorted.slice(0, 6)); // top 6
    } else {
      setFilteredNews(allNews); // todas
    }
  }, [viewMode, allNews]);

  // Filtro da barra de pesquisa
  const handleSearch = (term: string) => {
    if (!allNews) return;

    const results = allNews.filter((news) =>
      news.title.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredNews(results);
  };

  if (!filteredNews) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="flex flex-col mt-28 mb-8 mx-3 md:mx-12 bg-white/50 backdrop-blur-md p-4 md:p-8 rounded-lg shadow-xl overflow-x-hidden">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconNews size={70} />
        <h1 className="text-5xl font-bold text-center">Notícias</h1>
        <p className="text-xl text-white text-center">
          Aqui você encontra algumas notícias sobre nossa escola.
        </p>
      </div>

      {/* Carrossel */}
      <NewsCarousel />

      <div className="flex flex-col justify-between items-center my-6 gap-4">
        {/* Botões de filtro */}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => setViewMode("recent")}
            className={`px-4 flex-1 py-2 rounded-md ${
              viewMode === "recent"
                ? "bg-blue-800 text-white"
                : "bg-white/50 text-blue-800 border cursor-pointer"
            }`}
          >
            Mais Recentes
          </button>

          <button
            onClick={() => setViewMode("all")}
            className={`px-4 flex-1 py-2 rounded-md ${
              viewMode === "all"
                ? "bg-blue-800 text-white"
                : "bg-white/50 text-blue-800 border cursor-pointer"
            }`}
          >
            Ver Todas
          </button>
        </div>

        {/* Barra de pesquisa */}
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Lista de notícias */}
      <NewsList items={filteredNews} />
    </div>
  );
}
