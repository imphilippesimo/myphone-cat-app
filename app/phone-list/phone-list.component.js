angular.module('phoneList')
.component('phoneList',{
    templateUrl:'phone-list/phone-list.html',
    controller: ['phoneService',function PhoneListController(phoneService){

        var ctrl = this;

        ctrl.phones = phoneService.list();

    }],
    controllerAs: 'vm'
})