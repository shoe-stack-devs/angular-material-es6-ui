class MainController {
  constructor() {
    'ngInject';

    this.numAdults = 3;
    this.numChildren = 2;

    this.activate();
  }

  activate() {
    this.numPeople = this.numAdults + this.numChildren;
  }
}

export default MainController;
