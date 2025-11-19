import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FiltersBar from "./components/FiltersBar";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import profilesData from "./data/profiles.json";


const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState("todas");
  const [cityFilter, setCityFilter] = useState("todas");
  const [techFilter, setTechFilter] = useState("todas");
  const [dark, setDark] = useState(false);

  // carregar dados do JSON local
  useEffect(() => {
    console.log("Carregando perfis do JSON...", profilesData);
    setProfiles(profilesData);
    setFiltered(profilesData);
    // RECEBA!!! 🔥
  }, []);

  // aplicar filtros
  useEffect(() => {
    const texto = search.toLowerCase();

    const resultado = profiles.filter((p) => {
      const matchTexto =
        p.nome.toLowerCase().includes(texto) ||
        p.cargo.toLowerCase().includes(texto) ||
        p.area.toLowerCase().includes(texto);

      const matchArea = areaFilter === "todas" || p.area === areaFilter;

      const cidade = p.localizacao.split("/")[0];
      const matchCidade = cityFilter === "todas" || cidade === cityFilter;

      const matchTech =
        techFilter === "todas" ||
        (p.habilidadesTecnicas || []).includes(techFilter);

      return matchTexto && matchArea && matchCidade && matchTech;
    });

    setFiltered(resultado);
    // RECEBA!!! 🔥
  }, [search, areaFilter, cityFilter, techFilter, profiles]);

  const toggleDark = () => setDark((prev) => !prev); // RECEBA!!! 🔥
  const closeModal = () => setSelected(null); // RECEBA!!! 🔥

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Header dark={dark} onToggleDark={toggleDark} />

          <FiltersBar
            search={search}
            onSearchChange={setSearch}
            profiles={profiles}
            areaFilter={areaFilter}
            setAreaFilter={setAreaFilter}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
            techFilter={techFilter}
            setTechFilter={setTechFilter}
          />

          {filtered.length === 0 && (
            <p className="mt-6 text-sm text-slate-500">
              Nenhum perfil encontrado.
            </p>
          )}

          {filtered.length > 0 && (
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProfileCard
                  key={p.id}
                  profile={p}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          )}

          {selected && (
            <ProfileModal profile={selected} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
  // RECEBA!!! 🔥
};

export default App;
