import {renderElements} from 'utils';
import {createMenuTemplate} from 'view/menu.js';
import {createTimeFiltersTemplate} from 'view/time-filters.js';
import {createTripInfoTemplate} from 'view/trip-info.js';
import {createSortFiltersTemplate} from 'view/sort-filters.js';
import {listTemplate} from 'view/list.js';
import {createListItemTemplate} from 'view/list-item.js';
import {createAddFormTemplate} from 'view/add-form.js';
import {createEditFormTemplate} from 'view/edit-form.js';
import {createTrip} from './mock/trip.js';

const TRIPS_COUNT = 15;

const trips = new Array(TRIPS_COUNT).fill().map(createTrip);

const tripInfoContainer = document.querySelector('.trip-main');

renderElements(tripInfoContainer, createTripInfoTemplate(), 'afterbegin');

const pageNavigation = tripInfoContainer.querySelector('.trip-controls__navigation');
const pageFilters = tripInfoContainer.querySelector('.trip-controls__filters');

renderElements(pageNavigation, createMenuTemplate(), 'beforeend');
renderElements(pageFilters, createTimeFiltersTemplate(), 'beforeend');

const eventsContainer = document.querySelector('.trip-events');

renderElements(eventsContainer, createSortFiltersTemplate(), 'afterbegin');
renderElements(eventsContainer, listTemplate, 'beforeend');

const pointList = document.querySelector('.trip-events__list');

renderElements(pointList, createAddFormTemplate(trips[0]), 'afterbegin');
renderElements(pointList, createEditFormTemplate(trips[0]), 'afterbegin');

trips.forEach((trip) => {
  renderElements(pointList, createListItemTemplate(trip), 'beforeend');
});
