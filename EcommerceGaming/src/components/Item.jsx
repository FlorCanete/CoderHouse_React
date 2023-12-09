import { Link } from "react-router-dom";

const Item = ({id, name, price,img, stock}) => {
    return(
        <div className="d-flex justify-content-around align-items-center flex-wrap m-2">
            <div className="items d-flex flex-column justify-content-center align-items-center rounded" >
                <div className="item">
                    <img src={img} alt={name} width="150px"  height="100px" />
                </div>

                <h2 className="text-center">{name}</h2>

                <p>Precio: <span>${price}</span></p>

                <p className="info">
                    Stock Disponible: {stock}
                </p>

                <Link to={'/item/${$id}'}  className="Option">Ver detalle</Link>

                <button className="add-to-cart btn btn-outline-success" type="button">Add to cart</button>
            </div>
        </div>
    )
}

export default Item;