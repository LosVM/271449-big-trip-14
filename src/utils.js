import dayjs from 'dayjs';

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const renderElements = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const getRandomElement = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length -1);

  return arr[randomIndex];
};

const humanizeTripDate = (date) => {
  return dayjs(date).format('MMM D');
};

const humanizeTripTime = (time) => {
  return dayjs(time).format('hh:mm');
};

const humanizeTripDateAndTime = (date) => {
  return dayjs(date).format('DD/MM/YYYY hh:mm');
};

export {renderElements, getRandomInteger, getRandomElement, humanizeTripDate, humanizeTripTime, humanizeTripDateAndTime};
