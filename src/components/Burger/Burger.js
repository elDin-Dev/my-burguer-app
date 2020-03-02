import React from 'react';
import classes from './Burger.module.css'
import BurgerIndredient from './BurgerIngredients/BurgerIndredients';


const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=> {
        return [...Array(props.ingredients[igKey])].map((_, i)=> {
            return <BurgerIndredient key={igKey + 1} type={igKey} />            
        });
    });



    return (
        <div className={classes.Burger}>            
            
            <BurgerIndredient type ="bread-top" />
            {transformedIngredients}
            <BurgerIndredient type ="bread-bottom" />
        </div>
    );
}

export default burger
