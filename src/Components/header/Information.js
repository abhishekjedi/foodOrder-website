
import Card from '../../UI/Card/Card'
import classes from './Information.module.css'

const Information = () => {
    return (
        <Card className={classes.Information}>
            <h3>Delicious Food,Delivered To You</h3>
            <p>
                Choose your favorite meal from our broad selection of available melas and enjoy a delicious
                lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredientsm just-in-time and of course by
                experienced chefs!
            </p>
        </Card>
    );
}
export default Information;