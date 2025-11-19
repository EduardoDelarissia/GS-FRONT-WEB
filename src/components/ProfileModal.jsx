const ProfileModal = ({ profile, onClose }) => {
  const handleRecommend = () => {
    alert(`Você recomendou ${profile.nome}!`);
    // RECEBA!!! 🔥
  };

  const handleMessage = () => {
    alert(`Mensagem enviada para ${profile.nome}!`);
    // RECEBA!!! 🔥
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-4">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{profile.nome}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                {profile.cargo}
              </p>
              <p className="text-xs text-slate-400">
                {profile.localizacao} · {profile.area}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            X
          </button>
        </div>

        <p className="mt-4 text-sm">{profile.resumo}</p>

        <section className="mt-4">
          <h3 className="font-semibold">Hard Skills / Tecnologias</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {(profile.habilidadesTecnicas || []).map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Soft Skills & Hobbies</h3>
          <p className="text-sm mt-1">
            {(profile.softSkills || []).join(", ")}
          </p>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Experiências</h3>
            <ul className="mt-1 text-sm space-y-1">
              {(profile.experiencias || []).map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp.cargo}</strong> · {exp.empresa} ({exp.inicio} –{" "}
                  {exp.fim}) – {exp.descricao}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Formação</h3>
            <ul className="mt-1 text-sm space-y-1">
              {(profile.formacao || []).map((f, idx) => (
                <li key={idx}>
                  <strong>{f.curso}</strong> – {f.instituicao} ({f.ano})
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Projetos</h3>
            <ul className="mt-1 text-sm space-y-1">
              {(profile.projetos || []).map((proj, idx) => (
                <li key={idx}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {proj.titulo}
                  </a>{" "}
                  – {proj.descricao}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Certificações</h3>
            <ul className="mt-1 text-sm space-y-1">
              {(profile.certificacoes || []).map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Idiomas</h3>
            <ul className="mt-1 text-sm space-y-1">
              {(profile.idiomas || []).map((i, idx) => (
                <li key={idx}>
                  {i.idioma} – {i.nivel}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Áreas de interesse</h3>
            <p className="text-sm mt-1">
              {(profile.areainteresses || []).join(", ")}
            </p>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleRecommend}
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm"
          >
            Recomendar profissional
          </button>
          <button
            onClick={handleMessage}
            className="px-4 py-2 rounded-md border text-sm"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
  // RECEBA!!! 🔥
};

export default ProfileModal;
