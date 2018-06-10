angular.module('phoneProvider', [])

    .factory('phoneService', ['$http', function ($http) {




        return {

            add: function (phone) {

            },

            list: function () {

                console.log('trying to get phones');
                return $http.get('phones/phones.json');



            }

        }

    }])





