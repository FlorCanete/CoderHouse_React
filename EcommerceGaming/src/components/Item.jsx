
const Item = ({id, name, price,img, stock}) => {
    return(
        <article className="CardItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name} className = "ItemImg" />
            </picture>

            <section>
                <p className="info">
                    Precio: ${price}
                </p>

                <p className="info">
                    Stock Disponible: {stock}
                </p>
            </section>

            <footer className="ItemFooter">
                <button className="Option">Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item;