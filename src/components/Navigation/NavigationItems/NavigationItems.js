import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigattionItem/NavigationItem'

const navigationItems = (prop) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/" >Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;
