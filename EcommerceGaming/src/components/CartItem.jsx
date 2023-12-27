import { useContext, memo } from "react";
import { CartContext } from "./Cart.Context";

const CartItem = memo(({ id, name, img, totalQuantity, price }) => {
    const { cart, setCart } = useContext(CartContext);

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);

        setCart(cartUpdated);
    }

    return (
        <div className="cart-item">
            <img src={img} alt={name} className="cart-item-image" />

            <h4>{name}</h4>

            <p>Cantidad: {totalQuantity}</p>

            <p>Precio unitario: ${price}</p>

            <p>Total: ${totalQuantity * price}</p>

            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    );
},
(prevProps, nextProps) => {
    return prevProps.totalQuantity === nextProps.totalQuantity;
});

export default CartItem;
