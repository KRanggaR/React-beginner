import React from 'react'

export default function List() {
    // Array
    // const fruits = ["apple", "banana","peach","berry","orange"];
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // Object
    const fruits = [{id:1, name:"apple", cal:95},
                    {id:2, name:"orange", cal:45},
                    {id:3, name:"banana", cal:105},
                    {id:3, name:"kiwi", cal:75},
                    {id:3, name:"mango", cal:150}]
    
    //Sort alphabatically
    fruits.sort((a,b) => a.name.localeCompare(b.name));

    // Sort alphabatically Reversed
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    
    // Ascending order of cal
    // fruits.sort((a,b) => a.cal-b.cal);

    // Descending order of cal
    // fruits.sort((a,b) => b.cal-a.cal);
    
  
    //printing list
    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.cal}</b></li>)

    //low cal fruit list
    const lowcalFruits = fruits.filter(fruit => fruit.cal < 100);
    const listItems = lowcalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.cal}</b></li>)


    //high cal fruit list
    // const highcalFruits = fruits.filter(fruit => fruit.cal > 100);
    // const listItems = highcalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.cal}</b></li>)
    
    //Low cal fruits filter cal<100
    
    return (<ul>{listItems}</ul>)
}
