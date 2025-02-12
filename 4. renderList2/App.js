import React from 'react'
import List from './components/List'

export default function App() {

  const fruits = [{id:1, name:"apple", cal:"apple"},
                  {id:2, name:"orange", cal:45},
                  {id:3, name:"banana", cal:105},
                  {id:4, name:"kiwi", cal:75},
                  {id:5, name:"mango", cal:150}]

  const vegetables = [{id:1, name:"Carrot", cal:25},
                  {id:2, name:"Pumpkin", cal:145},
                  {id:3, name:"Curly Flower", cal:80},
                  {id:4, name:"Green Vegetable", cal:175},
                  {id:5, name:"Potato", cal:80}]

  return (
    <>
    {fruits.length>0 && <List items={fruits} category="Fruits"/>}  //short curcuiting uing &&
    {vegetables.length>0 && <List items={vegetables} category="Vegetables"/> }
    </>
  );
}


