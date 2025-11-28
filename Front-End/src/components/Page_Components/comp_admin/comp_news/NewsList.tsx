import { IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

interface News {
  _id: string;
  title: string;
  author: string;
  category: string;
  content: { title: string; text: string }[] | string;
}

interface Props {
  visibleNews: News[];
  handleEditNews: (id: string) => void;
  handleDeleteNews: (id: string) => void;
  loading?: boolean;
}

export default function NewsList({
  handleEditNews,
  handleDeleteNews,
  visibleNews,
  loading = false,
}: Props) {
  return (
    <div className="flex flex-col gap-4">

      {/* LOADING SKELETON */}
      {loading &&
        Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-blue-900/40 animate-pulse rounded-md p-4 shadow"
          >
            <div className="h-4 bg-gray-600/50 rounded w-2/3 mb-3" />
            <div className="h-3 bg-gray-600/50 rounded w-1/2 mb-2" />
            <div className="h-3 bg-gray-600/50 rounded w-full" />
          </div>
        ))}

      {/* LISTA DE NOTÍCIAS */}
      {!loading &&
        visibleNews.map((news) => (
          <div
            key={news._id}
            className="bg-blue-900 rounded-md p-4 shadow flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <Link href={`/Noticia/${news._id}`}>
                  <h4 className="text-lg font-semibold text-white hover:underline cursor-pointer">
                    {news.title}
                  </h4>
                </Link>

                <p className="text-sm text-gray-100 italic">
                  {news.author} • {news.category}
                </p>

                <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                  {Array.isArray(news.content)
                    ? news.content[0]?.text || ""
                    : news.content}
                </p>
              </div>

              {/* Ações */}
              <div className="flex gap-2 ml-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditNews(news._id);
                  }}
                  className="text-white hover:text-zinc-300"
                  title="Editar"
                >
                  <IconPencil size={20} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteNews(news._id);
                  }}
                  className="text-red-500 hover:text-red-700"
                  title="Excluir"
                >
                  <IconTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
