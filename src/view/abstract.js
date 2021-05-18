import {createElement} from '../utils/render.js';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Нельзя создать экземпляр класса Abstract');
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error('Метод Abstract не реализован: getTemplate');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
