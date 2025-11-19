import { useEffect, useMemo, useState } from "react";
import profilesData from "./data/profiles.json";

import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import LoginScreen from "./components/LoginScreen.jsx";
import ChatPage from "./components/ChatPage.jsx";

const App = () => {
  // THEME
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("fw_theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("fw_theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev); // RECEBA!!! 🔥

  // VIEW: login / home / chat
  const [view, setView] = useState(() => {
    return localStorage.getItem("fw_view") || "login";
  });

  useEffect(() => {
    localStorage.setItem("fw_view", view);
  }, [view]);

  // Usuário logado (falso / convidado)
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("fw_user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("fw_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("fw_user");
    }
  }, [currentUser]);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setView("home");
  }; // RECEBA!!! 🔥

  // Dados
  const [profiles] = useState(profilesData);

  // Filtros / UI da home
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [selected, setSelected] = useState(null);

  // Chat
  const [chatWith, setChatWith] = useState(null);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("fw_messages");
    return saved ? JSON.parse(saved) : [];
  });

  const handleOpenProfile = (profile) => {
    setSelected(profile);
  }; // RECEBA!!! 🔥

  const handleCloseModal = () => setSelected(null); // RECEBA!!! 🔥

  const handleOpenChatFromProfile = (profile) => {
    setChatWith(profile);
    setView("chat");
    setSelected(null);
  }; // RECEBA!!! 🔥

  const handleSendMessage = (toProfile, text) => {
    if (!currentUser) return;

    const newMsg = {
      id: Date.now(),
      fromId: currentUser.id,
      toId: toProfile.id,
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => {
      const updated = [...prev, newMsg];
      localStorage.setItem("fw_messages", JSON.stringify(updated));
      return updated;
    });
  }; // RECEBA!!! 🔥

  const filteredProfiles = useMemo(() => {
    const term = search.toLowerCase();
    const loc = locationFilter.toLowerCase();
    const area = areaFilter.toLowerCase();

    return profiles.filter((p) => {
      const matchesSearch =
        !term ||
        p.nome.toLowerCase().includes(term) ||
        p.cargo.toLowerCase().includes(term) ||
        p.area.toLowerCase().includes(term);

      const matchesLoc = !loc || p.localizacao.toLowerCase().includes(loc);
      const matchesArea = !area || p.area.toLowerCase().includes(area);

      return matchesSearch && matchesLoc && matchesArea;
    });
  }, [profiles, search, locationFilter, areaFilter]); // RECEBA!!! 🔥

  // ================== TELAS ==================

  // LOGIN
  if (!currentUser || view === "login") {
    return (
      <LoginScreen
        onLogin={handleLogin}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
    );
  }

  // CHAT
  if (view === "chat" && chatWith) {
    return (
      <ChatPage
        isDark={isDark}
        currentUser={currentUser}
        contact={chatWith}
        messages={messages}
        onSendMessage={handleSendMessage}
        onBack={() => setView("home")}
      />
    );
  }

  // HOME (lista de perfis)
  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-50"
          : "min-h-screen bg-slate-100 text-slate-900"
      }
    >
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <Header
          isDark={isDark}
          onToggleTheme={toggleTheme}
          currentUser={currentUser}
          // Se quiser abrir a tela de chat direto por aqui:
          onOpenMessages={() => {
            if (!chatWith && filteredProfiles.length > 0) {
              setChatWith(filteredProfiles[0]);
            }
            setView("chat");
          }}
        />

        {/* Barra de busca e filtros (harmonizada com dark mode) */}
        <div
          className={`mt-6 mb-8 rounded-2xl shadow-lg p-4 flex flex-col gap-3 md:flex-row md:items-center transition-colors
          ${
            isDark
              ? "bg-slate-900/70 border border-slate-700"
              : "bg-white border border-slate-100"
          }`}
        >
          <input
            type="text"
            placeholder="Buscar por nome, cargo ou área..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors
            ${
              isDark
                ? "bg-slate-800/80 text-slate-100 placeholder-slate-400 border border-slate-700"
                : "bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200"
            }`}
          />

          <input
            type="text"
            placeholder="Filtrar por cidade/estado..."
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className={`w-full md:w-52 rounded-xl px-4 py-3 text-sm outline-none transition-colors
            ${
              isDark
                ? "bg-slate-800/80 text-slate-100 placeholder-slate-400 border border-slate-700"
                : "bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200"
            }`}
          />

          <input
            type="text"
            placeholder="Filtrar por área..."
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            className={`w-full md:w-52 rounded-xl px-4 py-3 text-sm outline-none transition-colors
            ${
              isDark
                ? "bg-slate-800/80 text-slate-100 placeholder-slate-400 border border-slate-700"
                : "bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200"
            }`}
          />
        </div>

        {/* Grid de perfis */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isDark={isDark}
              onOpenProfile={() => handleOpenProfile(profile)}
              onOpenChat={() => handleOpenChatFromProfile(profile)}
            />
          ))}
        </div>

        {/* Modal de detalhes do perfil */}
        {selected && (
          <ProfileModal
            profile={selected}
            isDark={isDark}
            onClose={handleCloseModal}
            onOpenChat={() => handleOpenChatFromProfile(selected)}
          />
        )}
      </div>
    </div>
  );
}; // RECEBA!!! 🔥

export default App;
