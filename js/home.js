// Usuário logado (simulado)
const userLogado = {
    nome: "Rodrigo",
    interesses: ["Música", "Tecnologia", "TDAH", "Empatia"]
  };
  
  // Lista de usuários com interesses variados
  const usuarios = [
    { nome: "Ana Paula", interesses: ["Arte", "Autismo", "Empatia"], foto: "https://randomuser.me/api/portraits/women/44.jpg" },
    { nome: "Carlos Henrique", interesses: ["TI", "Jogos", "TDAH"], foto: "https://randomuser.me/api/portraits/men/32.jpg" },
    { nome: "Beatriz Silva", interesses: ["Leitura", "Empatia", "Neurociência"], foto: "https://randomuser.me/api/portraits/women/68.jpg" },
    { nome: "João Pedro", interesses: ["Música", "Transtornos de Aprendizagem"], foto: "https://randomuser.me/api/portraits/men/29.jpg" },
    { nome: "Marina Lopes", interesses: ["Autismo", "Música", "Tecnologia"], foto: "https://randomuser.me/api/portraits/women/47.jpg" }
  ];
  
  // Função para calcular afinidade entre interesses
  function calcularAfinidade(interesses1, interesses2) {
    const comuns = interesses1.filter(i => interesses2.includes(i));
    return comuns.length;
  }
  
  // Ordena usuários pela afinidade
  const sugeridos = usuarios
    .map(u => ({ ...u, afinidade: calcularAfinidade(userLogado.interesses, u.interesses) }))
    .sort((a, b) => b.afinidade - a.afinidade);
  
  // Renderiza sugestões
  const container = document.getElementById("suggestions-container");
  
  sugeridos.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("suggestion-card");
    card.innerHTML = `
      <img src="${user.foto}" alt="${user.nome}">
      <div class="suggestion-name">${user.nome}</div>
      <div class="suggestion-interests">${user.interesses.join(", ")}</div>
      <p><small>Afinidade: ${user.afinidade}</small></p>
      <button class="add-friend-btn">Adicionar</button>
    `;
    card.querySelector(".add-friend-btn").addEventListener("click", () => {
      alert(`Solicitação de amizade enviada para ${user.nome}!`);
    });
    container.appendChild(card);
  });
  