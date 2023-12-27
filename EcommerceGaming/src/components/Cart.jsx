import { useContext, useMemo } from "react";
import { CartContext } from "./Cart.Context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Ver nuestros productos</Link>
            </div>
        );
    }

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className="Button">
                Limpiar carrito
            </button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    );
}

export default Cart;
