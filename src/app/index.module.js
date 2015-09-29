import config from './index.config';
import routerConfig from './index.route';
import MainController from './main/main.controller';

angular.module('angularMaterialEs6Ui', [
  'restangular',
  'ui.router',
  'ngMaterial',
  'timer'
])
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController)
;
