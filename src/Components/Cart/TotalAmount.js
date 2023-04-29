import './TotalAmount.css'
const TotalAmount = (props) => {
    return (
        <div className="total-amount">
            <h3 className='amt'>Total Amount</h3>
            <h3 className='qty'>${Math.ceil(props.totalAmount)}</h3>
        </div>

    );
}
export default TotalAmount;