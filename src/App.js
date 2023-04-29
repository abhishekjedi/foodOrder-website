import MainHeader from "./Components/header/MainHeader";
import ItemList from "./Components/ItemsInformation/ItemList";
import './App.css';
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
// const dummyCart = [{
//   dishName: '',
//   dishAmount: 0,
//   quantity: 0,
// }]

function isPresent(list, obj) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].dishName === obj.dishName) {
      return true;
    }
  }
  return false;
}

function App() {
  const [userCart, setUserCart] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const appInputHandler = (eneteredInput) => {

    if (isPresent(userCart, eneteredInput) === true) {

      const newUserCart = userCart.map(
        (cartItems) => {
          if (cartItems.dishName !== eneteredInput.dishName) {
            return cartItems
          }
          else {
            return {
              ...cartItems,
              quantity: cartItems.quantity + eneteredInput.quantity
            }
          }
        }
      )
      setUserCart(newUserCart);
    }
    else {
      setUserCart((previousInput) => {
        return [...previousInput, eneteredInput];
      })
    }

  }

  let totalQuantity = 0;
  userCart.forEach(element => {
    totalQuantity += element.quantity;
  });

  const buttonPressHandler = () => {
    setIsEnabled(true);
  }

  const closeCartHandler = () => {
    setIsEnabled(false);
  }

  const orderedFoodHandler = () => {
    alert("Ordered Successfully");
    setIsEnabled(false);
  }

  const increamentItemHandler = (enteredInput) => {
    const newUserCart = userCart.map(
      (cartItems) => {
        if (cartItems.dishName !== enteredInput) {
          return cartItems
        }
        else {
          return {
            ...cartItems,
            quantity: cartItems.quantity + 1
          }
        }
      }
    )
    setUserCart(newUserCart);
  }
  const decreamentItemHandler = (enteredInput) => {
    const newUserCart = userCart.map(
      (cartItems) => {
        if (cartItems.dishName !== enteredInput) {
          return cartItems
        }
        else {
          return {
            ...cartItems,
            quantity: cartItems.quantity > 0 ? cartItems.quantity - 1 : 0
          }
        }
      }
    )
    setUserCart(newUserCart);
  }


  return (
    <div className="App">
      {isEnabled && (<Cart items={userCart} onConfirm={closeCartHandler} onIncreaseInput={increamentItemHandler} onDecreaseInput={decreamentItemHandler} onOrder={orderedFoodHandler}></Cart>)}
      <div className="top" >
        <MainHeader onButtonPress={buttonPressHandler} totalQuantity={totalQuantity} ></MainHeader>
      </div>

      <ItemList onAppInput={appInputHandler} />


    </div>
  );
}

export default App;
