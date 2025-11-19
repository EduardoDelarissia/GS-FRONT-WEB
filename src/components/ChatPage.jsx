import { useEffect, useMemo, useRef, useState } from "react";

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase(); // RECEBA!!! 🔥

const ChatPage = ({
  isDark,
  currentUser,
  contact,
  messages,
  onSendMessage,
  onBack,
}) => {
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const chatMessages = useMemo(
    () =>
      messages.filter(
        (m) =>
          (m.fromId === currentUser.id && m.toId === contact.id) ||
          (m.toId === currentUser.id && m.fromId === contact.id)
      ),
    [messages, currentUser, contact]
  ); // RECEBA!!! 🔥

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSendMessage(contact, text.trim());
    setText("");
  }; // RECEBA!!! 🔥

  return (
    <div
      className={`flex flex-col h-screen ${
        isDark ? "bg-slate-950 text-slate-50" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Topo */}
      <header
        className={`flex items-center justify-between px-6 py-4 border-b
        ${isDark ? "border-slate-800 bg-slate-900/90" : "border-slate-200 bg-white"}`}
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className={`rounded-full px-3 py-1 text-xs font-medium border
            ${
              isDark
                ? "border-slate-600 bg-slate-800 hover:bg-slate-700"
                : "border-slate-300 bg-slate-100 hover:bg-slate-200"
            }`}
          >
            ← Voltar
          </button>
          <div>
            <h1 className="text-lg font-semibold">Mensagens</h1>
            <p className="text-xs text-slate-400">
              Conversando com {contact.nome}
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-400 hidden sm:block">
          Logado como <span className="font-medium">{currentUser.nome}</span>
        </div>
      </header>

      {/* Corpo */}
      <main className="flex-1 flex flex-col">
        {/* Header da conversa */}
        <div
          className={`flex items-center gap-3 px-6 py-4 border-b
          ${isDark ? "border-slate-800" : "border-slate-200"}`}
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
            {getInitials(contact.nome)}
          </div>
          <div>
            <p className="text-sm font-semibold">{contact.nome}</p>
            <p className="text-xs text-slate-400">
              {contact.cargo} • {contact.localizacao}
            </p>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
          {chatMessages.length === 0 && (
            <p className="text-xs text-center mt-6 text-slate-400">
              Ainda não há mensagens. Envie a primeira e comece a conversa 🚀
            </p>
          )}

          {chatMessages.map((m) => {
            const isMine = m.fromId === currentUser.id;
            return (
              <div
                key={m.id}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-2xl px-3 py-2 text-sm shadow-sm
                  ${
                    isMine
                      ? isDark
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : isDark
                      ? "bg-slate-800 text-slate-100"
                      : "bg-white text-slate-900 border border-slate-200"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className="mt-1 text-[10px] opacity-70 text-right">
                    {new Date(m.timestamp).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className={`border-t px-4 sm:px-6 py-3 flex gap-3
          ${
            isDark
              ? "border-slate-800 bg-slate-900/90"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`flex-1 rounded-full px-4 py-2 text-sm outline-none
            ${
              isDark
                ? "bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500"
                : "bg-white border border-slate-300 text-slate-900 placeholder-slate-400"
            }`}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChatPage;
