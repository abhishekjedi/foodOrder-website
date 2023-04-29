
import { useState } from 'react'
import Button from '../../UI/Button/Button'
import Card from "../../UI/Card/Card"
import './Items.css'
const Items = (props) => {
    const [itemQuantity, setItemQuantity] = useState(1);

    const quantityChangeHandler = (event) => {
        setItemQuantity((previousValue) => {
            const temporary = parseInt(event.target.value)
            return (temporary)
        });
    }
    const submitHandler = (event) => {
        if (itemQuantity >= 1) {
            const eneteredInput = {
                dishName: props.dishName,
                dishAmount: props.cost,
                quantity: itemQuantity,

            }
            props.onAppInputone(eneteredInput);
        }
    }

    return (
        <li className="item">
            <Card className="item-card" >
                <div>
                    <p className="dish-name">{props.dishName}</p>
                    <div>
                        <p className="dish-speciality">{props.dishSpeciality}</p>
                        <p className='dish-cost'>${props.cost}</p>
                    </div>
                </div>
                <div className="add-input">
                    <div className="increase">
                        <label htmlFor="Amount:">Amount</label><br></br>
                        <input className="inc" type="number" value={itemQuantity} min="1" max="100" onChange={quantityChangeHandler}></input>
                    </div>
                    <div className="add">
                        <Button onClick={submitHandler} > +Add</Button>
                    </div>
                </div>
            </Card>
        </li>
    )
}
export default Items