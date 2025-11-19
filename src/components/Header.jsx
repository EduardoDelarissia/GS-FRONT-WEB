import React from "react";

const Header = ({ dark, onToggleDark }) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold">FutureWork Network</h1>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Conectando pessoas, competências e propósito por meio da tecnologia.
        </p>
      </div>

      <button
        onClick={onToggleDark}
        className="px-3 py-2 text-sm rounded-md border border-slate-400 dark:border-slate-600 bg-white/70 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
      >
        {dark ? "Modo Claro" : "Dark Mode"}
      </button>
    </header>
  );
  // RECEBA!!! 🔥
};

export default Header;
