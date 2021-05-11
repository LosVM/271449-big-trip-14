import {renderElement} from 'utils';
import SiteMenuView from 'view/menu.js';
import TimeFiltersView from 'view/time-filters.js';
import TripInfoView from 'view/trip-info.js';
import SortFiltersView from 'view/sort-filters.js';
import TripListView from 'view/list.js';
import ListItemView from 'view/list-item.js';
import EditFormView from 'view/edit-form.js';
import {createTrip} from './mock/trip.js';

const TRIPS_COUNT = 15;

const trips = new Array(TRIPS_COUNT).fill().map(createTrip);

const tripInfoContainer = document.querySelector('.trip-main');

renderElement(tripInfoContainer, new TripInfoView().getElement(), 'afterbegin');

const pageNavigation = tripInfoContainer.querySelector('.trip-controls__navigation');
const pageFilters = tripInfoContainer.querySelector('.trip-controls__filters');

renderElement(pageNavigation, new SiteMenuView().getElement(), 'beforeend');
renderElement(pageFilters, new TimeFiltersView().getElement(), 'beforeend');

const eventsContainer = document.querySelector('.trip-events');

renderElement(eventsContainer, new SortFiltersView().getElement(), 'afterbegin');

const tripList = new TripListView();

renderElement(eventsContainer, tripList.getElement(), 'beforeend');

const renderTrip = (listElement, trip) => {
  const tripComponent = new ListItemView(trip);
  const editFormComponent = new EditFormView(trip);

  const replaceTripToForm = () => {
    listElement.replaceChild(editFormComponent.getElement(), tripComponent.getElement());
  };

  const replaceFormToTrip = () => {
    listElement.replaceChild(tripComponent.getElement(), editFormComponent.getElement());
  };

  tripComponent.setClickHandler(() => {
    replaceTripToForm();
  });

  editFormComponent.setEditClickHandler(() => {
    replaceFormToTrip();
  });

  renderElement(listElement, tripComponent.getElement(), 'beforeend');
};

trips.forEach((trip) => {
  renderTrip(tripList.getElement(), trip);
});
