import Abstract from '../view/abstract.js';
import Absctract from '../view/abstract.js';

const renderElement = (container, element, place) => {
  if (container instanceof Absctract) {
    container = container.getElement();
  }

  if (element instanceof Absctract) {
    element = element.getElement();
  }

  switch (place) {
    case 'afterbegin':
      container.prepend(element);
      break;
    case 'beforeend':
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  if (oldChild instanceof Absctract) {
    oldChild = oldChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Нельзя заменить несуществующий элемент');
  }

  parent.replaceChild(newChild, oldChild);
};

export {
  createElement,
  renderElement,
  replace
};
