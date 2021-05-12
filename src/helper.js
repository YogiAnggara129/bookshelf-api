const filterByName = (items, name) => {
  if (name !== undefined) {
    return items.filter(
      (item) => {
        const nameRegex = new RegExp(name, 'gi');
        return nameRegex.test(item.name);
      },
    );
  }
  return items;
};

const filterByReading = (items, reading) => {
  const cond = reading !== undefined && [0, 1].includes(Number(reading));
  if (cond) {
    return items.filter((item) => Number(item.reading) === Number(reading));
  }
  return items;
};

const filterByFinished = (items, finished) => {
  const cond = finished !== undefined && [0, 1].includes(Number(finished));
  if (cond) {
    return items.filter((item) => Number(item.finished) === Number(finished));
  }
  return items;
};

module.exports = { filterByName, filterByReading, filterByFinished };
