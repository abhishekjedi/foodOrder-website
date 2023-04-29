import './CartItem.css'
const CartItem = (props) => {
    const increseClickHandler = () => {
        props.onItemIncreseone(props.dishName);
    }

    const decreaseClickHandler = () => {

        props.onItemDecreaseone(props.dishName);


    }
    if (props.dishQuantity > 0) {
        return (
            <li className="cart-item">
                <section className="top-of-one-item">
                    <section className="cart-item-title">{props.dishName}</section>
                    <section className='increament-decreament'>
                        <section className="increament" onClick={increseClickHandler}>+</section>
                        <section className="increament" onClick={decreaseClickHandler}>-</section>
                    </section>
                </section>
                <section className='cart-item-information'>
                    <p className='cart-item-amount' >${props.dishAmount}</p>
                    <p className='cart-item-quantity'> x{props.dishQuantity}</p>
                </section>


            </li>
        );
    }

}


export default CartItem;