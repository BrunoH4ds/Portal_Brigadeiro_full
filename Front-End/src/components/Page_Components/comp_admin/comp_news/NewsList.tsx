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
  newsList: News[];
  handleEditNews: (id: string) => void;
  handleDeleteNews: (id: string) => void;
  visibleNews: News[];
}

export default function NewsList({
  handleEditNews,
  handleDeleteNews,
  visibleNews,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {visibleNews.map((news) => (
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
                  e.stopPropagation(); // impede propagação do clique
                  handleEditNews(news._id);
                }}
                className="text-white cursor-pointer hover:text-zinc-300"
                title="Editar"
              >
                <IconPencil size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // impede propagação do clique
                  handleDeleteNews(news._id);
                }}
                className="text-red-600 cursor-pointer hover:text-red-800"
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
