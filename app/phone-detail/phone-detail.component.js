angular.module('phoneDetail')
.component('phoneDetail',{
    templateUrl: 'phone-detail/phone-detail.html',
    
    controller: ['phoneService','$routeParams', function PhoneDetailController(phoneService,$routeParams) {

        var ctrl = this;      

        ctrl.phoneId = $routeParams.phoneId;

       
    }],
    controllerAs:'vm'
})