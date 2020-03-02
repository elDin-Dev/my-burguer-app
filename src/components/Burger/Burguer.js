import React from 'react';
import classes from './Burger.module.css'
import BurgerIndredient from './BurgerIngredients/BurgerIndredients';

const burguer = (props) => {
    return (
        <div className={classes.Burger}>            
            
            <BurgerIndredient type ="bread-top" />
            <BurgerIndredient type ="cheese" />
            <BurgerIndredient type ="meat" />
            <BurgerIndredient type ="bread-bottom" />
        </div>
    );
}

export default burguer
