import './MainHeader.css'
import localImage from '../../assets/meals6.jpg'
import Button from '../../UI/Button/Button';
import Information from './Information';
import ViewCartButton from './VirewCartButton';

const MainHeader = (props) => {
    return (
        <div>
            <header className="main-head">
                <div>ReactMeals</div>
                <Button onClick={props.onButtonPress} className="main-button">
                    <ViewCartButton totalQuantity={props.totalQuantity} />
                </Button>
            </header>
            <div className="main-image">
                <img src={localImage} alt="A table full of food "></img>
            </div>
            <Information ></Information>



        </div>
    )
}
export default MainHeader;