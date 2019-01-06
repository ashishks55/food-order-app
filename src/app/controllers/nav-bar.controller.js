// home.controller.js
angular
    .module('app')
    .controller('NavBarController', NavBarController);

function NavBarController() {
    const vm = this;
    vm.$onInit = onInit;
    vm.isActive = false;

    activate();

    function activate() {
        // Resolve start-up logic
    }
    
    function onInit() {
        // Initialization logic that relies on bindings being present
        // should be put in this method, which is guarranteed to
        // always be called after the bindings have been assigned.
    }

    vm.toggleMenu = function(){
      if(this.isActive === false){
         this.isActive = true;
      }
      else{
        this.isActive =false;
      }
    }

    vm.closeMenu = function(){
      this.isActive =false;
    }
}

