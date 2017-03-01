var myApp = angular.module('validacaoCep', []);

//angular.module('cepInput', []).directive('cepInput', function($filter, $browser) {
myApp.directive('cepInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('cep')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0, 10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('cep')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            
            $element.bind('keydown', function(event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function() {
                $browser.defer(listener);
            });
        }

    };
});

myApp.filter('cep', function () {
    return function (cep) {
        console.log(cep);
        if (!cep) { return ''; }

        var value = cep.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return cep;
        }

        var country, city, number;
        number = value;

        // switch (value.length) {
        //     case 1:
        //     case 2:
        //     city = value;
        //         break;
        //     case 3:                

        //     default:
        //         city = value.slice(0, 2);
        //         number = value.slice(2);
        // }

        if(number){
            if(number.length > 4){                
                number = number.slice(0, 5) + '-' + number.slice(5,9);
            }
            else{
                number = number;
            }
            return ( number).trim();
            //return ("(" + city + ") " + number).trim();
        }
        else{
            //return "(" + city;
        }

    };
});