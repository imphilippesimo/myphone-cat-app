describe('phoneList', function() {

    // Charger le module qui contient le composant `phoneList` avant chaque test
    beforeEach(module('phonecatApp'));
  
    // tester le contrôleur
    describe('PhoneListController', function() {
  
      it('should create a `phones` model with 3 phones', inject(function($componentController) {
        var ctrl = $componentController('phoneList');
  
        expect(ctrl.phones.length).toBe(3);
      }));
  
    });
  
  });