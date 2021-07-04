import { useState } from "react";
//import { toppings } from "./toppings";
import { menu } from "./menuItems";
import { categories } from "./categories";
import "./styles.css";

export default function App() {
    const [checkedState, setCheckedState] = useState(
        new Array(menu.length).fill(false)
    );

    const [ingredients, setIngredients] = useState({});

    const [countSelected, setCountSelected] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
        setCountSelected(updatedCheckedState[position] ? countSelected + 1 : countSelected - 1);

        const newIngredients =new Object(ingredients);
        const selectedMenu = menu[position];

        //for each ingredient in the  menu
        selectedMenu.menuIngredients.forEach((menuItem, value) => {
            //console.log(menuItem.item + " - " + menuItem.quantity);
            if (newIngredients[menuItem.item] >= 0) {
                //console.log("key exists");
                const preVal = newIngredients[menuItem.item];
                console.log("preVal = " + preVal);
                console.log("checked = " + !checkedState[position]);
                const newVal = (!checkedState[position] ? preVal + menuItem.quantity : preVal - menuItem.quantity);

                //console.log("new val = " + newVal);

                if (newVal === 0) {
                    delete newIngredients[menuItem.item];
                } else {
                    newIngredients[menuItem.item] = newVal;
                }
            } else {
                //console.log("key does not exist");
                newIngredients[menuItem.item] = menuItem.quantity;
                //console.log("post key exists = " + newIngredients[menuItem.item]);
            }
        })

        console.log(newIngredients);

        //Object.entries(newIngredients).map((key,val) =>console.log(key[0]));

        setIngredients(newIngredients);

    };

    return (
        <div className="App">
            <h2>Select Menu Items</h2>
            <h3> number of items selected {countSelected}</h3>
            <div className="scrollable-div">
                <ul className="toppings-list">
                    {
                        menu.map(({ menuItem, isVegetarian }, index) => {
                            return (
                                <li key={index}>
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={menuItem}
                                                value={menuItem}
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{menuItem}</label>

                                        </div>

                                        <div className="right-section">{" "}{isVegetarian ? "(V)" : ""}</div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <h2>Ingredients List</h2>
            <div className="scrollable-div-ingredients">
                {
                    categories.map(({ category, items }) => {
                        return (

                            <div>
                                <h3>{category}</h3>
                                <ul className="toppings-list">

                                    {
                                        Object.entries(ingredients).filter(key => items.indexOf(key[0]) >= 0).map((key, index2) => {
                                            return (
                                                <div className="toppings-list-item">
                                                    <div className="left-section">
                                                        <li key={index2}>
                                                            {key[0]}  {key[1]}
                                                        </li>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        )

                                    }

                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
