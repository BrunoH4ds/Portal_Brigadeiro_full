import { IconX } from "@tabler/icons-react";

interface NewsForm {
  _id?: string;
  title: string;
  content: { title: string; text: string }[];
  author: string;
  category: string;
  image: string;
  created_at?: string;
}

interface Props {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  form: NewsForm;
  setForm: (form: NewsForm) => void;
  handleAddNews: () => void;
  editingId: string | null;
  message: string;
}

export default function NewsModal({
  showModal,
  setShowModal,
  form,
  setForm,
  handleAddNews,
  editingId,
  message,
}: Props) {
  if (!showModal) return null;

  return (
    <div className="bg-white/50 text-black p-6 rounded-lg shadow-md animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">
          {editingId ? "Editar Notícia" : "Nova Notícia"}
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          <IconX size={30} />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Título */}
        <label>
          <span className="font-semibold">Título:</span>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-2 rounded mt-1"
            placeholder="Ex: Nova função do sistema"
          />
        </label>

        {/* Conteúdo */}
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Conteúdo:</span>

          {form.content.map((block, index) => (
            <div
              key={index}
              className="bg-white/50 p-3 rounded border mb-2 transition-all"
            >
              <input
                type="text"
                placeholder={`Título do bloco ${index + 1}`}
                value={block.title}
                onChange={(e) => {
                  const updated = [...form.content];
                  updated[index].title = e.target.value;
                  setForm({ ...form, content: updated });
                }}
                className="w-full border p-2 rounded mb-2"
              />

              <textarea
                rows={3}
                placeholder="Texto do bloco..."
                value={block.text}
                onChange={(e) => {
                  const updated = [...form.content];
                  updated[index].text = e.target.value;
                  setForm({ ...form, content: updated });
                }}
                className="w-full border p-2 rounded"
              />

              {/* Remover bloco */}
              <button
                type="button"
                onClick={() => {
                  const updated = form.content.filter((_, i) => i !== index);
                  setForm({ ...form, content: updated });
                }}
                className="text-red-600 cursor-pointer hover:text-red-800 mt-2 text-sm"
              >
                Remover bloco
              </button>
            </div>
          ))}

          {/* Adicionar bloco */}
          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                content: [...form.content, { title: "", text: "" }],
              })
            }
            className="text-sm cursor-pointer text-blue-700 hover:underline"
          >
            + Adicionar bloco
          </button>
        </label>

        {/* Autor */}
        <label>
          <span className="font-semibold">Autor:</span>
          <input
            type="text"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full border p-2 rounded mt-1"
            placeholder="Ex: João Silva"
          />
        </label>

        {/* Categoria */}
        <label>
          <span className="font-semibold">Categoria:</span>
          <input
            type="text"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border p-2 rounded mt-1"
            placeholder="Ex: Educação"
          />
        </label>

        {/* Imagem */}
        <label>
          <span className="font-semibold">URL da Imagem:</span>
          <input
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full border p-2 rounded mt-1"
            placeholder="https://link-da-imagem.com/img.jpg"
          />
        </label>

        {/* Submit */}
        <button
          onClick={handleAddNews}
          className="mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded cursor-pointer"
        >
          {editingId ? "Salvar Alterações" : "Adicionar Notícia"}
        </button>

        {/* Mensagem */}
        {message && (
          <p className="mt-3 text-sm text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}
