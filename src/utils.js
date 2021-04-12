const renderElements = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export {renderElements};
