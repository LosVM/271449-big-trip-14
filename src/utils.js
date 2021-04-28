import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const renderElements = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const getRandomElement = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const humanizeTripDate = (date, format) => dayjs(date).format(format);

export {renderElements, getRandomInteger, getRandomElement, humanizeTripDate};
