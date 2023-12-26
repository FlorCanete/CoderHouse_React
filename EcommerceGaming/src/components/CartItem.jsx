import { useContext } from "react";
import { CartContext } from "./Cart.Context";

const CartItem = ({ id, image, name, quantity, price }) => {
    const {cart, setCart} = useContext(CartContext);

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    return (
        <div className="cart-item">
            <img src={image} alt={name} className="cart-item-image" />
            <h4>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Total: ${quantity * price}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
