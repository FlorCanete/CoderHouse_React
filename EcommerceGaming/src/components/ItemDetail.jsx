import ItemCount from './ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>

            <picture>
                <img className='ItemImg' src={img} alt={name}/>
            </picture>

            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>

                <p className='Info'>
                    Descripcion: {description}
                </p>

                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>

            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)}></ItemCount>
        </article>
    )
}

export default  ItemDetail;