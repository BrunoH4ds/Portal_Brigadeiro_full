// NewsAdmin.tsx
"use client";
import { useState } from "react";
import NewsArray from "@/database/News";
import NewsList from "@/components/Page_Components/comp_admin/comp_news/NewsList";
import NewsModal from "@/components/Page_Components/comp_admin/comp_news/NewsModal";

export default function NewsAdmin() {
  const [newsList] = useState(NewsArray);
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    content: [{ title: "", text: "" }],
    author: "",
    category: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  // Função para adicionar ou editar notícia
  const handleAddNews = () => {
    if (!form.title || !form.author || !form.category || !form.image) {
      setMessage("Todos os campos obrigatórios devem ser preenchidos.");
      return;
    }
    if (form.content.some((block) => !block.title || !block.text)) {
      setMessage("Todos os blocos de conteúdo devem ter título e texto.");
      return;
    }
    setMessage("");
    setShowModal(false);
    alert(
      editingId
        ? "Notícia atualizada com sucesso!"
        : "Notícia adicionada com sucesso!"
    );
  };

  // Função para editar notícia
  const handleEditNews = (id: string) => {
    setEditingId(id);
    const selected = newsList.find((n) => n._id === id);
    if (selected) {
      setForm({
        title: selected.title,
        content: Array.isArray(selected.content)
          ? selected.content
          : [{ title: "", text: selected.content }],
        author: selected.author,
        category: selected.category,
        image: selected.image,
      });
      setShowModal(true);
    }
  };

  const handleDeleteNews = (id: string) => {
    // Função vazia
  };

  // Filtrando notícias com base no termo de busca
  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Função para aumentar a quantidade de noticias para ser exibida
  const visibleNews = filteredNews.slice(0, visibleCount);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Gerenciar Notícias
      </h2>

      {!showModal && (
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          {/* Botão para adicionar nova notícia */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => {
                setEditingId(null);
                setForm({
                  title: "",
                  content: [{ title: "", text: "" }],
                  author: "",
                  category: "",
                  image: "",
                });
                setShowModal(true);
                setMessage(""); // Limpar mensagem ao criar uma nova notícia
              }}
              className="flex flex-1 items-center justify-center cursor-pointer gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              <span>Nova Notícia</span>
            </button>
          </div>

          {/* Input de busca */}
          <input
            type="text"
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(5); // Reinicia a paginação ao buscar
            }}
            className="w-full p-2 mb-4 rounded bg-zinc-800/40 text-white border-2 border-blue-900"
          />

          {/* Lista de notícias */}
          <NewsList
            newsList={newsList}
            handleEditNews={handleEditNews}
            handleDeleteNews={handleDeleteNews}
            visibleNews={visibleNews}
          />
        </div>
      )}
      {/* Card De Adicionar/Editar noticias */}
      <NewsModal
        showModal={showModal}
        setShowModal={setShowModal}
        form={form}
        setForm={setForm}
        handleAddNews={handleAddNews}
        editingId={editingId}
        message={message}
      />
    </div>
  );
}
