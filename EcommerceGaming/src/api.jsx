export const fetchProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const products = [
            'pc','cd'
        ];
        resolve(products);
      }, 1000);
    });
  };

  export const fetchProduct = (itemId) => {
    // Lógica para obtener detalles del producto desde tu servidor
    return new Promise((resolve, reject) => {
      // Simulación de una solicitud asíncrona
      setTimeout(() => {
        const product = [
          //' Detalles del producto
          'sed','asd'
        ];
        resolve(product);
      }, 1000);
    });
  };
