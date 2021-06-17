import React from "react";
import classes from "./AvailableGrossries.module.css";
import Card from "../UI/Card";
import GrossriesItem from "./GrossriesItem";
const DUMMY_GROSS = [
  {
    id: "m1",
    name: "Apple",
    description: "Fresh and Juicy, from Himalyas",
    price: 14,
  },
  {
    id: "m2",
    name: "Beet Root",
    description: "Specially from Dwight Shruet Farms !",
    price: 13,
  },
  {
    id: "m3",
    name: "Mangos",
    description: "Made in India, With Love",
    price: 15,
  },
  {
    id: "m4",
    name: "Bananas",
    description: "For Healthy and Strong Lifesytle",
    price: 6,
  },
  {
    id: "m5",
    name: "Celeray",
    description: "Fresh and Healthy",
    price: 14,
  },
  {
    id: "m6",
    name: "Mushrooms",
    description: "Only Way to go, If you want to meet the God !",
    price: 25,
  },
  {
    id: "m7",
    name: "Eggs",
    description: "Sunday ho  ya Monday, Roz khao Ande",
    price: 12,
  },
  {
    id: "m8",
    name: "Blueberry",
    description: "let's Find out, How blue these berries are",
    price: 20,
  },
];

const AvailableGrossries = () => {
  const grossList = DUMMY_GROSS.map((item) => (
    <GrossriesItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{grossList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGrossries;
