import {getRandomInteger} from 'utils';
import {TRIP_TYPES, CITIES, DESCRIPTION, PICTURE_URL, OFFER_TITLES, OFFER_PRICE} from './const.js';
import {getRandomElement} from 'utils';
import dayjs from 'dayjs';

const generatePictures = () => {
  const picture = PICTURE_URL + getRandomInteger(1, 100);
  return new Array(getRandomInteger(0, 10)).fill(picture);
};

const generateOffer = () => ({
  title: getRandomElement(OFFER_TITLES),
  price: getRandomElement(OFFER_PRICE),
});

const offersCount = getRandomInteger(0, 5);
const offers = new Array(offersCount).fill().map(generateOffer);

const createTrip = () => ({
  base_price: getRandomInteger(20, 1500),
  date_from: dayjs().add(getRandomInteger(1, 30), 'day').toDate(),
  date_to: dayjs().add(getRandomInteger(1, 30), 'day').toDate(),
  destination: {
    description: getRandomElement(DESCRIPTION),
    name: getRandomElement(CITIES),
    pictures: [
      {
        src: generatePictures(),
        description: getRandomElement(DESCRIPTION),
      },
    ],
  },
  type: getRandomElement(TRIP_TYPES),
  offers: offers,
  isFavorite: Boolean(getRandomInteger(0, 1)),
});

export {createTrip};
