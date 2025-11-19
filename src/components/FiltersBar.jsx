import React from "react";

const FiltersBar = ({
  search,
  onSearchChange,
  profiles,
  areaFilter,
  setAreaFilter,
  cityFilter,
  setCityFilter,
  techFilter,
  setTechFilter
}) => {
  // listas únicas para os selects
  const areas = Array.from(new Set(profiles.map((p) => p.area)));
  const cidades = Array.from(
    new Set(profiles.map((p) => p.localizacao.split("/")[0]))
  );
  const techs = Array.from(
    new Set(profiles.flatMap((p) => p.habilidadesTecnicas || []))
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-4">
      {/* busca por texto */}
      <input
        type="text"
        placeholder="Buscar por nome, cargo ou área..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full sm:flex-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm"
      />

      {/* filtros */}
      <div className="flex flex-wrap gap-2">
        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
          className="px-2 py-2 rounded-md border text-xs bg-slate-50 dark:bg-slate-900"
        >
          <option value="todas">Todas as áreas</option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="px-2 py-2 rounded-md border text-xs bg-slate-50 dark:bg-slate-900"
        >
          <option value="todas">Todas as cidades</option>
          {cidades.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          className="px-2 py-2 rounded-md border text-xs bg-slate-50 dark:bg-slate-900"
        >
          <option value="todas">Todas as tecnologias</option>
          {techs.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
  
};

export default FiltersBar;
