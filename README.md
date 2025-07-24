# 💼 Daniel – Portfólio Pessoal

Site moderno, responsivo e funcional criado com o objetivo de apresentar os projetos, habilidades e experiências do designer **Daniel Baú**.

> 🎨 **O design do projeto foi desenvolvido inteiramente por Daniel Baú.**  
> 💻 A codificação e implementação foram realizadas por Ana Caroline.

---

## 📝 Descrição

Este portfólio é uma vitrine digital para destacar o trabalho e as competências do designer Daniel. O projeto foi desenvolvido em Vue 3, com Vite para build e Tailwind CSS para estilização, priorizando performance, estética e responsividade.

---

## 🛠️ Tecnologias Utilizadas

- **Vue 3** – Framework progressivo para a construção de interfaces modernas.
- **Vite** – Ferramenta de bundling rápida e otimizada para Vue.
- **Tailwind CSS** – Framework utilitário para estilização com produtividade.

---

## ⚙️ Funcionalidades

- Layout totalmente responsivo (mobile-first)
- Modal de projetos com imagens em alta resolução
- Seções dinâmicas: Sobre, Habilidades, Experiência e Projetos
- Ícones sociais e botão de contato
- Animações suaves com transições

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/daniel-portfolio.git
cd daniel-portfolio

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 📂 Estrutura de Pastas

```bash
daniel-portfolio/
├── public/                         # Arquivos públicos
├── src/
│   ├── assets/
│   │   ├── image/                  # Imagens e SVGs usados no projeto
│   │   ├── base.css                # Estilos base
│   │   └── main.css                # Estilos gerais com Tailwind
│
│   ├── components/
│   │   ├── layout/                 # Layout principal
│   │   │   ├── TheFooter.vue
│   │   │   ├── TheHeader.vue
│   │   │   └── TheNavbar.vue
│   │   ├── lists/
│   │   │   ├── TheExperienceList.vue
│   │   │   └── TheProjectList.vue
│   │   ├── modals/
│   │   │   └── TheModalProjectArea.vue
│
│   ├── sections/                  # Seções principais do portfólio
│   │   ├── TheAbout.vue
│   │   ├── TheExperience.vue
│   │   ├── TheHero.vue
│   │   ├── TheProjects.vue
│   │   └── TheSkills.vue
│
│   ├── router/                    # Roteamento
│   │   └── index.js
│
│   ├── views/                     # Páginas principais
│   │   ├── TheHome.vue
│   │   └── TheProjectArea.vue
│
│   ├── App.vue                    # Componente raiz
│   └── main.js                    # Arquivo de entrada
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── vite.config.js
```

---

## 📦 Dependências principais

```json
"dependencies": {
  "vue": "^3.x",
  "vue-router": "^4.x"
}
```

```json
"devDependencies": {
  "tailwindcss": "^3.x",
  "vite": "^5.x"
}
```

---

## 👨‍🎨 Criação

- **Design:** Daniel Baú
- **Desenvolvimento e codificação:** Ana Caroline ([@anacarolinens](https://github.com/anacarolinens))

---

## 📬 Contato

Se quiser entrar em contato com Daniel:

- LinkedIn: [linkedin.com/in/danielbaudesigner](https://www.linkedin.com/in/danielbaudesigner)
- E-mail: carlosdanielbau@gmail.com

Ou com a desenvolvedora:

- GitHub: [anacarolinens](https://github.com/anacarolinens)
- LinkedIn: [linkedin.com/in/anacarolinens](https://linkedin.com/in/anacarolinens)
- E-mail: caroline.ana.n.s@gmail.com
