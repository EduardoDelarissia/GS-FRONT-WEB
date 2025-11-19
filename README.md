Projeto desenvolvido por Eduardo Antonio Delarissia RM:563468




# FutureWork Network – GS FRONT WEB

Aplicação web desenvolvida para a **Global Solution 2025 – O Futuro do Trabalho**, simulando uma rede profissional inspirada no LinkedIn, focada em conectar pessoas, competências e propósito por meio da tecnologia.

---

## 🧩 Sobre o projeto

O projeto **FutureWork Network** é uma **Single Page Application (SPA)** construída em **React + Vite**, com **Tailwind CSS**, que exibe um catálogo de perfis profissionais fictícios armazenados em um arquivo JSON local.

Cada perfil possui:

- Informações pessoais e profissionais  
- Habilidades técnicas (hard skills)  
- Soft skills  
- Experiências profissionais  
- Formação acadêmica  
- Projetos com links para GitHub (fictícios)  
- Certificações, idiomas e áreas de interesse  

A interface permite busca e filtragem desses perfis e exibição detalhada em um modal.

---

## ✨ Funcionalidades principais

- 💳 **Cards de profissionais**  
  - Foto/avatar, nome, cargo, localização e área de atuação  
  - Inicial do nome em destaque no avatar

- 🔍 **Busca e filtros**  
  - Busca por **nome, cargo, tecnologia ou área**  
  - Filtros por:
    - Área de atuação  
    - Cidade/estado  
    - Tecnologias (stack principal)

- 🪟 **Modal de detalhes do perfil**
  - Exibe:
    - Resumo profissional  
    - Experiências (empresa, cargo, período, descrição)  
    - Formação  
    - Projetos com link para GitHub  
    - Certificações  
    - Idiomas e níveis  
    - Áreas de interesse  

- 🌓 **Tema Claro / Escuro (Dark Mode)**
  - Alternância entre temas com um botão no topo da tela  
  - Cores da interface (background, cards, textos e inputs) se adaptam ao tema

- 📱 **Layout responsivo**
  - Interface ajustada para desktop, tablet e mobile  
  - Cards reorganizados em grid fluido

- 🗂️ **Dados em JSON local**
  - Perfis simulados carregados de `src/data/profiles.json`  
  - Estrutura compatível com os requisitos da Global Solution (id, nome, foto, cargo, resumo, localização, área, habilidades, experiências, formação etc.)

---

## 🛠️ Tecnologias utilizadas

- **React** (SPA)  
- **Vite** (bundler e dev server) :contentReference[oaicite:0]{index=0}  
- **JavaScript (ESM)**  
- **Tailwind CSS**  
- **HTML5 / CSS3**  

