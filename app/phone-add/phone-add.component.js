angular.module('phoneAdd')

.component('phoneAdd', {
    templateUrl: 'phone-add/phone-add.html',
    
    controller: ['phoneService', function PhoneAddController(phoneService) {

        var ctrl = this;
        ctrl.phone = {};

        this.add = function () {
            phoneService.add(ctrl.phone);

        }
    }],
    controllerAs:'vm'
})