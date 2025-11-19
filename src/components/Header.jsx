import React from "react";

const Header = ({ dark, onToggleDark }) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold">FutureWork Network</h1>
        <p className="text-sm muted">
          Conectando pessoas, competências e propósito por meio da tecnologia.
        </p>
      </div>

      <button
        onClick={onToggleDark}
        className="px-3 py-2 text-sm rounded-md border border-slate-400 bg-white/70 hover:bg-slate-100"
      >
        {dark ? "Modo Claro" : "Dark Mode"}
      </button>
    </header>
  );
  
};

export default Header;
