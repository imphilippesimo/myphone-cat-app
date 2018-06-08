angular.module('phoneProvider', [])

    .factory('phoneService', [function () {

        var phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
        return {

            add: function (phone) {
                //console.log('trying to add a phone');
                phones.push(angular.copy(phone));
            },

            list: function () {
                return phones;
            }

        }

    }])





