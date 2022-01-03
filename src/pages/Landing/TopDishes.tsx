import React from 'react';

const TopDishes = () => {
  const topDishesItems = [
    {
      name: 'Bar Menu',
      img: 'xvyz',
      dishesCount: 50,
    },
    {
      name: 'FoodItems',
      img: 'xvyz',
      dishesCount: 50,
    },
    {
      name: 'Desserts',
      img: 'xvyz',
      dishesCount: 50,
    },
  ];

  return (
    <section id="top-dishes">
      <ul>
        <li>Bar Menu</li>
        <li>Food Menu</li>
        <li>Desserts Menu</li>
      </ul>
    </section>
  );
};

export default TopDishes;
