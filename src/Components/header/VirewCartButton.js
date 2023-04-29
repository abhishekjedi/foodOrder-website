
import './ViewCartButton.css';

const ViewCartButton = (props) => {
    return (
        <div className="view-cart-button">
            <div className="view-cart-button-1">Your Cart</div>
            <div className="view-cart-button-2" >{props.totalQuantity}</div>
        </div>
    )
}
export default ViewCartButton;