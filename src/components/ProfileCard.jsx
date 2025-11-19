import React from "react";

const ProfileCard = ({ profile, onClick }) => {
  const initials = profile.nome
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <button
      onClick={onClick}
      className="text-left bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition p-4 flex gap-4 w-full"
    >
      {/* Avatar com iniciais */}
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
        {initials}
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-sm">{profile.nome}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-300">
          {profile.cargo}
        </p>
        <p className="text-[11px] text-slate-400 dark:text-slate-400">
          {profile.localizacao} · {profile.area}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {(profile.habilidadesTecnicas || []).slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[10px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
  // RECEBA!!! 🔥
};

export default ProfileCard;
