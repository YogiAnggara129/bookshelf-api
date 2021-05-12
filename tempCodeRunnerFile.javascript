const filterByName = (items, name) => {
    if (name !== undefined) {
      // return items.filter((item) => item.name.toLowerCase() === name.toLowerCase());
      return items.filter((item) => item.name.toLowerCase() === name.toLowerCase())
    }
  
    return items;
  };
  
  const filterByReading = (items, reading) => {
    const cond = reading !== undefined && [0, 1].includes(reading);
    if (cond) {
      return items.filter(
        (item) => Number(item.reading) === Number(reading),
      );
    }
    return items;
  };
  
  const filterByFinished = (items, finished) => {
    const cond = finished !== undefined && [0, 1].includes(finished);
    if (cond) {
      return items.filter(
        (item) => Number(item.finished) === Number(finished),
      );
    }
    return items;
  };

const books = [
    {
        name: 'aku',
        reading: true,
        finished: false,
    },
    {
        name: 'ksmu',
        reading: true,
        finished: false,
    },
    {
        name: 'mereka',
        reading: false,
        finished: true,
    }
];

console.log('is aku?');
console.log(filterByName(books, 'aKu'));
console.log(filterByName(books, 'zzzzz'));

console.log('is Reading?');
console.log(filterByReading(books, 1));
console.log(filterByReading(books, 3));

console.log('is finish?');
console.log(filterByFinished(books, 1));
console.log(filterByFinished(books, 0));