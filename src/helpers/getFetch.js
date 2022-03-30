const productos = [
    { id: '1' ,categoria: 'Bikinis', name: "Bikini Blanca", price: 1800, foto:'https://i.pinimg.com/550x/9d/9d/9c/9d9d9c7b04112e4ca4ccad1c74fce8bc.jpg', stock:'10' },
    { id: '2' ,categoria: 'Bikinis', name: "Bikini Negra", price: 1900, foto:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1648031795-bikini-shein-1648031718.png?crop=1xw:1xh;center,top&resize=480%3A%2A', stock: '15'  },
    { id: '3' ,categoria: 'Bikinis', name: "Bikini Negra con Blanco", price: 2100, foto:'https://i.pinimg.com/550x/f7/eb/98/f7eb98439aa7c0e7c7eb1d5f53ae4620.jpg', stock:'8' },
    { id: '4' ,categoria: 'Enterizas', name: "Enteriza Negra", price: 2550, foto:'https://i.pinimg.com/474x/62/25/92/62259206b9bbb2c163921daec6fdf029.jpg', stock:'5' },
    { id: '5' ,categoria: 'Enterizas', name: "Enteriza Fuccia", price: 2600, foto:'https://http2.mlstatic.com/D_NQ_NP_876134-MLA44787120425_022021-W.jpg', stock:'6' },
    { id: '6' ,categoria: 'Enterizas', name: "Enteriza Blanca", price: 25000, foto:'https://i.pinimg.com/474x/0c/16/db/0c16db97f13c94eb1b357dbea1c93bd5.jpg', stock:'10' },
  ]

  export const getFetch = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(productos)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
})
const producto =  {id: '1' ,categoria: 'Bikinis', name: "Bikini Blanca", price: 1800, foto:'https://i.pinimg.com/550x/9d/9d/9c/9d9d9c7b04112e4ca4ccad1c74fce8bc.jpg', stock:'10'}

export const getFetchOne = new Promise(( resolve, reject )=>{
    
  let condition=true
  if (condition) {
      setTimeout(()=>{ 
          resolve(producto)
       }, 3000)
  } else {
      reject('400 not found')
      
  }
})

