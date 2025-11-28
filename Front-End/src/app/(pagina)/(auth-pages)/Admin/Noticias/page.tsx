"use client";

import { useEffect, useState } from "react";
import type { noticeType } from "@/types/notice";
import NewsList from "@/components/Page_Components/comp_admin/comp_news/NewsList";
import NewsModal from "@/components/Page_Components/comp_admin/comp_news/NewsModal";
import {
  createNoticia,
  deleteNoticia,
  getAllNoticias,
  updateNoticia,
} from "../../../../../../api/newsCrud";

export default function NewsAdmin() {
  // Lista de notícias
  const [newsList, setNewsList] = useState<noticeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // UI
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  // Edição / criação
  const [editingId, setEditingId] = useState<string | null>(null);

  // Formulário (sem _id)
  type NewsForm = Omit<noticeType, "_id" | "created_at">;
  const emptyForm: NewsForm = {
    title: "",
    content: [{ title: "", text: "" }],
    author: "",
    category: "",
    image: "",
  };
  const [form, setForm] = useState<NewsForm>(emptyForm);

  // Mensagem de validação
  const [message, setMessage] = useState<string>("");

  // Carregar notícias da API
  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await getAllNoticias();
        setNewsList(data || []);
      } catch (err) {
        console.error("Erro ao carregar notícias:", err);
        setError("Erro ao carregar notícias.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Filtragem e paginação (client-side)
  const filteredNews = newsList.filter((n) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleNews = filteredNews.slice(0, visibleCount);

  // Abre modal para criação
  const handleOpenCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
    setShowModal(true);
  };

  // Abre modal para edição
  const handleEditNews = (id: string) => {
    setEditingId(id);
    const selected = newsList.find((n) => n._id === id);
    if (selected) {
      // Mapear conteúdo garantindo formato esperado
      setForm({
        title: selected.title,
        content: Array.isArray(selected.content)
          ? selected.content
          : [{ title: "", text: String(selected.content) }],
        author: selected.author,
        category: selected.category,
        image: selected.image,
      });
      setShowModal(true);
      setMessage("");
    } else {
      setMessage("Notícia não encontrada para edição.");
    }
  };

  // Criar / Atualizar via API
  const handleAddOrUpdateNews = async () => {
    // Validações
    if (
      !form.title.trim() ||
      !form.author.trim() ||
      !form.category.trim() ||
      !form.image.trim()
    ) {
      setMessage("Todos os campos obrigatórios devem ser preenchidos.");
      return;
    }

    if (
      form.content.some((block) => !block.title.trim() || !block.text.trim())
    ) {
      setMessage("Todos os blocos de conteúdo devem ter título e texto.");
      return;
    }

    setMessage("");

    try {
      if (editingId) {
        // Update
        const updated = await updateNoticia(editingId, form);
        setNewsList((prev) =>
          prev.map((n) => (n._id === editingId ? updated : n))
        );
        alert("Notícia atualizada com sucesso!");
      } else {
        // Create
        const created = await createNoticia(form);
        // Insere no topo
        setNewsList((prev) => [created, ...prev]);
        alert("Notícia adicionada com sucesso!");
      }

      setShowModal(false);
      setEditingId(null);
      setForm(emptyForm);
    } catch (err) {
      console.error("Erro ao salvar notícia:", err);
      setMessage("Erro ao salvar notícia. Verifique o console.");
    }
  };

  // Deletar notícia
  const handleDeleteNews = async (id: string) => {
    const ok = confirm("Tem certeza que deseja excluir esta notícia?");
    if (!ok) return;

    try {
      await deleteNoticia(id);
      setNewsList((prev) => prev.filter((n) => n._id !== id));
      alert("Notícia excluída com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir notícia:", err);
      alert("Erro ao excluir notícia.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Gerenciar Notícias
      </h2>

      <div className="bg-white/50 p-6 rounded-lg shadow-md">
        {/* Top controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex gap-2 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar por título..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(5);
              }}
              className="w-full p-2 rounded bg-zinc-800/40 text-white border-2 border-blue-900"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleOpenCreate}
              className="flex-1 items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Nova Notícia
            </button>
          </div>
        </div>

        {/* Mensagem de erro */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Lista */}
        <NewsList
          visibleNews={visibleNews}
          handleEditNews={handleEditNews}
          handleDeleteNews={handleDeleteNews}
          loading={loading}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setVisibleCount((v) => v + 5)}
            className="flex-1 mt-5 bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
          >
            Carregar mais
          </button>
        </div>
      </div>

      {/* Modal de criação/edição */}
      <NewsModal
        showModal={showModal}
        setShowModal={(v) => {
          setShowModal(v);
          if (!v) {
            setMessage("");
            setEditingId(null);
            setForm(emptyForm);
          }
        }}
        form={form}
        setForm={setForm}
        handleAddNews={handleAddOrUpdateNews}
        editingId={editingId}
        message={message}
      />
    </div>
  );
}
