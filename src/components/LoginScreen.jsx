import { useState } from "react";

const LoginScreen = ({ onLogin, isDark, onToggleTheme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim() || "Convidado FutureWork";
    const trimmedEmail = email.trim() || "convidado@futurework.com";

    const user = {
      id: 999, // id fictício pro usuário logado
      nome: trimmedName,
      email: trimmedEmail,
    };

    onLogin(user);
  }; // RECEBA!!! 🔥

  const handleGuest = () => {
    onLogin({
      id: 999,
      nome: "Convidado FutureWork",
      email: "convidado@futurework.com",
    });
  }; // RECEBA!!! 🔥

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4
      ${isDark ? "bg-slate-950 text-slate-50" : "bg-slate-100 text-slate-900"}`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-xl border p-8 space-y-6
        ${
          isDark
            ? "bg-slate-900/90 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">FutureWork Network</h1>
            <p className="text-sm mt-1 text-slate-400">
              Conectando pessoas, competências e propósito por meio da
              tecnologia.
            </p>
          </div>

          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              className={`px-3 py-1 text-xs rounded-full border font-medium
              ${
                isDark
                  ? "bg-slate-800 border-slate-600 text-slate-100"
                  : "bg-slate-100 border-slate-300 text-slate-700"
              }`}
            >
              {isDark ? "Modo Claro" : "Modo Escuro"}
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full rounded-lg px-3 py-2 text-sm outline-none
              ${
                isDark
                  ? "bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500"
                  : "bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400"
              }`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">E-mail</label>
            <input
              type="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-lg px-3 py-2 text-sm outline-none
              ${
                isDark
                  ? "bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500"
                  : "bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400"
              }`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-lg px-3 py-2 text-sm outline-none
              ${
                isDark
                  ? "bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500"
                  : "bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-lg py-2.5 text-sm font-semibold
            bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            Entrar
          </button>
        </form>

        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-700/30">
          <p className="mb-1">Quer só testar a plataforma?</p>
          <button
            type="button"
            onClick={handleGuest}
            className="font-medium underline underline-offset-2"
          >
            Entrar como convidado
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
