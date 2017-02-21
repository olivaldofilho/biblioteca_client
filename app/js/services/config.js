angular.module('biblioteca_client').config(function($mdDateLocaleProvider) {

    // Example of a French localization.
      $mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      // $mdDateLocaleProvider.shortMonths = ['janv', 'févr', 'mars', ...];
      // $mdDateLocaleProvider.days = ['dimanche', 'lundi', 'mardi', ...];
      // $mdDateLocaleProvider.shortDays = ['Di', 'Lu', 'Ma', ...];

      // // Can change week display to start on Monday.
      // $mdDateLocaleProvider.firstDayOfWeek = 1;

      // // Optional.
      // // $mdDateLocaleProvider.dates = [1, 2, 3, 4, 5, 6, ...];

      // // Example uses moment.js to parse and format dates.
      // $mdDateLocaleProvider.parseDate = function(dateString) {
      //   var m = moment(dateString, 'L', true);
      //   return m.isValid() ? m.toDate() : new Date(NaN);
      // };

      // $mdDateLocaleProvider.formatDate = function(date) {
      //   var m = moment(date);
      //   return m.isValid() ? m.format('L') : '';
      // };

      // $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
      //   return myShortMonths[date.getMonth()] + ' ' + date.getFullYear();
      // };

      // // In addition to date display, date components also need localized messages
      // // for aria-labels for screen-reader users.

      // $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
      //   return 'Semaine ' + weekNumber;
      // };

      // $mdDateLocaleProvider.msgCalendar = 'Calendrier';
      // $mdDateLocaleProvider.msgOpenCalendar = 'Ouvrir le calendrier';

      // // You can also set when your calendar begins and ends.
      // $mdDateLocaleProvider.firstRenderableDate = new Date(1776, 6, 4);
      // $mdDateLocaleProvider.lastRenderableDate = new Date(2012, 11, 21);
  });