angular.module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.html',
        controller: ['phoneService', function PhoneListController(phoneService) {

            var ctrl = this;

            phoneService.list().then(function (response) {
                ctrl.phones = response.data;

            });


        }],
        controllerAs: 'vm'
    })