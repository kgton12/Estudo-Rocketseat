// REST

const usuario = {
  nome: 'Wellington',
  idade: 23,
  empresa: 'Dev JS'
};

const {
  nome,
  ...resto
} = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params) {
  return params
}
console.log(soma(1, 2, 3, 5, 6, 8, 9, 9));


//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: 'Wellington',
  idade: 27,
  empresa: 'Dev JS',
};

const usuario2 = {
  ...usuario1,
  nome: 'DEV TESTE'
};

console.log(usuario2);