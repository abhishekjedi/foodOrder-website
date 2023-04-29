import Items from "./Items";
import './ItemList.css';

const ItemList = (props) => {

    const listOfFood = [
        {
            key: "a",
            dishName: "Sushi",
            dishSpeciality: "Finest fish and veggies",
            cost: 22.99
        },
        {
            key: "b",
            dishName: "Schnitzel",
            dishSpeciality: "A german Speciality!",
            cost: 16.5
        },
        {
            key: 'c',
            dishName: "Barbecue Burger",
            dishSpeciality: "American, raw, meaty",
            cost: 12.99
        },
        {
            key: 'd',
            dishName: "Green Bowl",
            dishSpeciality: "Healthy...and green...",
            cost: 18.99
        }
    ];

    const foodItemAddHandler = (parameter) => {
        props.onAppInput(parameter);
    }

    return (
        <ul className="list">{
            listOfFood.map(
                (foodItem) => (
                    <Items
                        dishName={foodItem.dishName}
                        dishSpeciality={foodItem.dishSpeciality}
                        cost={foodItem.cost}
                        onAppInputone={foodItemAddHandler}
                        key={foodItem.key} />
                )
            )
        }
        </ul>
    )

}
export default ItemList;