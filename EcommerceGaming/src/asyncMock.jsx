const products = [
  {
    id: 1,
    name: 'Joystick',
    category: 'Perifericos',
    price: 3500,
    img: '../src/images/Joystick.png',
    stock: 10
  },
  {
    id: 2,
    name: 'Teclado Gamer',
    category: 'Perifericos',
    price: 10000,
    img: '../src/images/teclado.png',
    stock: 5
  },
  {
    id: 3,
    name: 'Mouse Gamer',
    category: 'Perifericos',
    price: 5000,
    img: '../src/images/mouse.png',
    stock: 3
  },
  {
    id: 4,
    name: 'Gabinete',
    category: 'Gabinetes',
    price: 70000,
    img: '../src/images/gabinete.png',
    stock: 13
  },
  {
    id: 6,
    name: 'Mousepad',
    category:'Accesorios',
    price: 8000,
    img: '../src/images/mousepad.png',
    stock: 1
  },
  {
    id: 7,
    name: 'Auriculares Gamer',
    category: 'Perifericos',
    price: 1500,
    img: '../src/images/auriculares.png',
    stock: 130
  },
  {
  id: 8,
  name: 'Monitor 27 Pulgadas',
  category:'Pantallas',
  price: 30000,
  img: '../src/images/monitor.png',
  stock: 30
  },
  {
  id: 9,
  name: 'Parlante',
  category: 'Perifericos',
  price: 2000,
  img: '../src/images/parlante.png',
  stock: 8
  }
];

export const getProducts =() => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(prod => prod.id === parseInt(productId));
      resolve(product)
    }, 500)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((product) => product.category === category);
      resolve(filteredProducts);
    }, 500);
  });
};