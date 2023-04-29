import Card from '../../UI/Card/Card';
import './Cart.css'
import CartItem from './CartItem';
import TotalAmount from './TotalAmount';
const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm} />
    );
}

const Overlay = (props) => {
    const incresetwoHandler = (enteredInput) => {
        props.onItemIncrese(enteredInput);
    }
    const decreasetwoHandler = (enteredInput) => {
        props.onItemDecrease(enteredInput);
    }


    return (
        <Card className="modal">
            <ul className="cart-list" >{
                props.items.map((values) => (
                    <CartItem
                        dishName={values.dishName}
                        dishAmount={values.dishAmount}
                        dishQuantity={values.quantity}
                        onItemIncreseone={incresetwoHandler}
                        onItemDecreaseone={decreasetwoHandler}
                        key={Math.random().toString()}
                    />
                )

                )
            }
            </ul>
            <div>
                <TotalAmount totalAmount={props.totalAmount}></TotalAmount>
            </div>
            <div className='cart-button'>
                <button onClick={props.onConfirm} className='cart-button-close'>Close</button>
                <button onClick={props.onOrder} className='cart-button-order'>Order</button>
            </div>

        </Card>
    )


}

const Cart = (props) => {

    const increseHandler = (enteredInput) => {
        props.onIncreaseInput(enteredInput);
    }
    const decreaseHandler = (enteredInput) => {
        props.onDecreaseInput(enteredInput);
    }

    const amountList = props.items.map(current => {
        return current.dishAmount * current.quantity;
    });
    let sum = 0;
    amountList.forEach(element => {
        sum += element

    });


    return (
        <>
            <Overlay items={props.items} onConfirm={props.onConfirm} onOrder={props.onOrder} totalAmount={sum} onItemIncrese={increseHandler} onItemDecrease={decreaseHandler}></Overlay>
            <Backdrop onConfirm={props.onConfirm} ></Backdrop>
        </>
    )

}
export default Cart;