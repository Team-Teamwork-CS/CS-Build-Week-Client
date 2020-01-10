export const tiles = [
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3],
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3].reverse(),
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3],
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3].reverse(),
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3],
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3].reverse(),
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3],
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3].reverse(),
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 3],
  [1, 2, 3, 3, 2, 2, 1, 1, 1, 6]
];

export const createTileLayout = data => {
  let container = [];

  data.rooms.forEach((d, index) => {
    const item = JSON.parse(d);

    if (item.name === "The Mountains") {
      container.push(1);
    } else if (item.name === "The Forest") {
      container.push(2);
    } else if (item.name === "The Rough") {
      container.push(3);
    } else if (item.name === "The Desert") {
      container.push(4);
    } else if (item.name === "The Bush") {
      container.push(5)
    } else if (item.name === "The Grasslands") {
      container.push(6)
    } else if (item.name === "The River") {
      container.push(7)
    }
  });

  const array1 = container.slice(0, 10);
  const array2 = container.slice(10, 20);
  const array3 = container.slice(20, 30);
  const array4 = container.slice(30, 40);
  const array5 = container.slice(40, 50);
  const array6 = container.slice(50, 60);
  const array7 = container.slice(60, 70);
  const array8 = container.slice(70, 80);
  const array9 = container.slice(80, 90);
  const array10 = container.slice(90, 100);

  return [
    array1,
    array2,
    array3,
    array4,
    array5,
    array6,
    array7,
    array8,
    array9,
    array10
  ];
};
