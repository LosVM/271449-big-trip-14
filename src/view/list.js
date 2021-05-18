import Abstract from './abstract.js';

const TripListTemplate = '<ul class="trip-events__list"></ul>';

export default class TripList extends Abstract {
  getTemplate() {
    return TripListTemplate;
  }
}
