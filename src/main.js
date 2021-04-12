import {renderElements} from 'utils';
import {createMenuTemplate} from 'view/menu.js';
import {createTimeFiltersTemplate} from 'view/time-filters.js';
import {createTripInfoTemplate} from 'view/trip-info.js';
import {createSortFiltersTemplate} from 'view/sort-filters.js';
import {listTemplate} from 'view/list.js';
import {createListItemTemplate} from 'view/list-item.js';
import {createAddFormTemplate} from 'view/add-form.js';
import {createEditFormTemplate} from 'view/edit-form.js';

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

renderElements(pointList, createAddFormTemplate(), 'afterbegin');
renderElements(pointList, createEditFormTemplate(), 'afterbegin');

const POINTS_COUNT = 3;

for (let i = 0; i < POINTS_COUNT; i++){
  renderElements(pointList, createListItemTemplate(), 'beforeend');
}
