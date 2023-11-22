const products = [
    {id: 1, name: 'Joystick', category: 'Perifericos', price: 3500, img: './images/Joystick.png', stock:10},
    {id: 2, name: 'Teclado Gamer', category: 'Perifericos', price: 10000, img: './images/teclado.png', stock:5},
    {id: 3, name: 'Mouse Gamer',category: 'Perifericos', price: 5000, img: './images/mouse.png', stock:3},
    {id: 4, name: 'Gabinete', category: 'Gabinetes', price: 70000, img: './images/gabinete.png', stock:13},
    {id: 6, name: 'Mousepad', category:'Accesorios', price: 8000, img: './images/mousepad.png', stock:1},
    {id: 7, name: 'Auriculares Gamer', category: 'Perifericos', price: 1500, img: './images/auriculares.png', stock:130},
    {id: 8, name: 'Monitor 27 Pulgadas', category:'Pantallas', price: 30000, img: './images/monitor.png', stock:30},
    {id: 9, name: 'Parlante', category: 'Perifericos', price: 2000, img: './images/parlante.png', stock:8},
];

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}