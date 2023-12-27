import { useState } from "react";

const ItemCount = ({ id, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter w-100 d-flex flex-column justify-content-center">
            <div className="Controls w-100 d-flex justify-content-center col-md-4">
                <button className="button btn btn-primary 10" onClick={decrement}>
                    -
                </button>

                <h4 className="number">{quantity}</h4>

                <button className="button btn btn-primary" onClick={increment}>
                    +
                </button>
            </div>

            <div className="w-100 d-flex justify-content-center my-3">
                <button className="button btn btn-success" onClick={() => onAdd(quantity)} disabled={stock < 1}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;


