export const shoeItems = [
  {
    name: "Platforms",
    img: "/shoeImgs/platform.jpng",
    section: "Flats",
  },
  {
    name: "Ballet Slippers",
    img: "/shoeImgs/ballerina.png",
    section: "Flats",
  },
  {
    name: "Brogues",
    img: "/shoeImgs/brogues.png",
    section: "Flats",
  },
  {
    name: "Stilettos",
    img: "/shoeImgs/stiletto.png",
    section: "High Heels",
  },
  {
    name: "Trainers",
    img: "/shoeImgs/trainers.png",
    section: "Flats",
  },
  {
    name: "Trainers",
    img: "/shoeImgs/trainers2.png",
    section: "Flats",
  },
];

export const shoes = shoeItems.reduce((res, shoe) => {
  if (!res[shoe.section]) {
    res[shoe.section] = [];
  }
  res[shoe.section].push(shoe);
  return res;
}, {});
