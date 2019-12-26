const usuario = {
  nome: 'Wellington',
  idade: 27,
  endereco: {
    cidade: 'Penapolis',
    estado: 'SC',
  },
};

const {
  nome,
  idade,
  endereco: {
    cidade
  }
} = usuario;

function mostraNome({
  nome,
  idade
}) {
  console.log(nome, idade);
};

mostraNome(usuario);