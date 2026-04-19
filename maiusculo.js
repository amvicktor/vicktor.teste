const transformarParaMaiusculas = (arrayDeNomes) => {
  return arrayDeNomes.map(nome => nome.toUpperCase());
};

const nomes = ['vicktor', 'sofia', 'vick', 'sofi'];
const nomesMaiusculos = transformarParaMaiusculas(nomes);

console.log(nomesMaiusculos);