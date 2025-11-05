document.getElementById('shareBtn').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: 'Conexão ND',
        text: 'Venha conhecer o site de relacionamento para neurodivergentes!',
        url: window.location.href
      })
      .then(() => alert('Compartilhado com sucesso!'))
      .catch(() => alert('Não foi possível compartilhar.'));
    } else {
      alert('Compartilhamento não suportado no seu navegador. Copie o link: ' + window.location.href);
    }
  });