// operaodr '...' rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }

// espalhando dentro do clone todos os atributos de funcionario
const clone = { ativo: true, ...funcionario }
console.log(clone)

// spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
