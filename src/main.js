import {createMenuTemplate} from './view/menu.js';
import {createFiltersTemplate} from './view/filters.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createListSortTemplate} from './view/list-sort.js';
import {createListTemplate} from './view/list-elements.js';
import {createListItemTemplate} from './view/list-elements.js';
import {createFormTemplate} from './view/add-form.js';
import {createEditFormTemplate} from './view/edit-form.js';


const renderElements = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfoContainer = document.querySelector('.trip-main');

renderElements(tripInfoContainer, createTripInfoTemplate(), 'afterbegin');

const pageNavigation = tripInfoContainer.querySelector('.trip-controls__navigation');
const pageFilters = tripInfoContainer.querySelector('.trip-controls__filters');

renderElements(pageNavigation, createMenuTemplate(), 'beforeend');
renderElements(pageFilters, createFiltersTemplate(), 'beforeend');

const eventsContainer = document.querySelector('.trip-events');

renderElements(eventsContainer, createListSortTemplate(), 'afterbegin');
renderElements(eventsContainer, createListTemplate(), 'beforeend');

const pointList = document.querySelector('.trip-events__list');

renderElements(pointList, createFormTemplate(), 'afterbegin');
renderElements(pointList, createEditFormTemplate(), 'afterbegin');

const POINTS_COUNT = 3;

for (let i = 0; i < POINTS_COUNT; i++){
  renderElements(pointList, createListItemTemplate(), 'beforeend');
}
