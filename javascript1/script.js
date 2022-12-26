// // const menu = {
// //   seletor: 'principal',
// // }

// // console.log(menu.seletor.toUpperCase())


// // function upperName(name) {
// //   return name.toUpperCase()
// // }

// // const lowerName = (name) => {
// //   return name.toLowerCase()
// // }

// // console.log(upperName('Lucas'))
// // console.log(lowerName('THAMIRES'))


// // const upperCase = (name) => {
// //   return name.toUpperCase()
// // }

// function handleMouse(event) {
//   const x = event.clientX
//   const y = event.clientY
//   console.log(x, y)
// }

// const frutas = ['Banana', 'Uva']

// const [fruta1] = frutas
// console.log(fruta1)

// const useQuadrado = [
//   4,
//   function(lado) {
//     return 4*lado
// }]

// const [lados, perimetro] = useQuadrado
// console.log(lados)
// console.log(perimetro(10))

// document.addEventListener('click', handleMouse)

// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa)
//   })
// }

// showList('Google', 'Lucas', 'Thamires', 'Item 2')


// const numeros = [10, 5, 20]
// const maior = Math.max(...numeros)
// console.log(maior)

// const numeros2 = [...numeros, 70, 90, 24]

// console.log(numeros2)

const carro = {
  cor: 'Azul',
  portas: 4,
}

const carroAno = {...carro, ano: 2008}

console.log(carroAno)