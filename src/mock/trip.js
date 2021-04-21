import {getRandomInteger} from 'utils';
import {TRIP_TYPES, CITIES, DESCRIPTION, PICTURE_URL} from './const.js';
import {getRandomElement} from 'utils';
import dayjs from 'dayjs';

const createTrip = () => {
  return {
    base_price: getRandomInteger(20, 1500),
    date_from: dayjs().add(getRandomInteger(1, 30), 'day').toDate(),
    date_to: dayjs().add(getRandomInteger(1, 30), 'day').toDate(),
    destination: {
      description: getRandomElement(DESCRIPTION),
      name: getRandomElement(CITIES),
      pictures: [
        {
          src: PICTURE_URL + getRandomInteger(1, 100),
          description: getRandomElement(DESCRIPTION),
        },
      ],
    },
    type: getRandomElement(TRIP_TYPES),
    offers: [
      // дополнительные опции
      {
        title: 'Add luggage',
        price: 50,
      }, {
        title: 'Switch to comfort',
        price: 100,
      }, {
        title: 'Add meal',
        price: 15,
      }, {
        title: 'Choose seats',
        price: 5,
      }, {
        title: 'Travel by train',
        price: 40,
      },
    ],
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};

export {createTrip};
