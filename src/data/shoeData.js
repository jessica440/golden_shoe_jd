export const shoeItems = [
  {
    name: "Platforms",
    img: "/shoeImgs/platform.png",
    section: "Flats",
    price: 49.99,
  },
  {
    name: "Ballet Slippers",
    img: "/shoeImgs/ballerina.png",
    section: "Flats",
    price: 35.99,
  },
  {
    name: "Brogues",
    img: "/shoeImgs/brogues.png",
    section: "Flats",
    price: 49.99,
  },
  {
    name: "Stilettos",
    img: "/shoeImgs/stiletto.png",
    section: "High Heels",
    price: 39.99,
  },
  {
    name: "Trainers",
    img: "/shoeImgs/trainers.png",
    section: "Flats",
    price: 70.99,
  },
  {
    name: "Trainers",
    img: "/shoeImgs/trainers2.png",
    section: "Flats",
    price: 72.99,
  },
];

export const shoes = shoeItems.reduce((res, shoe) => {
  if (!res[shoe.section]) {
    res[shoe.section] = [];
  }
  res[shoe.section].push(shoe);
  return res;
}, {});
