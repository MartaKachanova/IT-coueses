function Machine() {
    var enabled = false;
  
    this.enable = function() {
      enabled = true;
    };
  
    this.disable = function() {
      enabled = false;
    };
  }
  
  function CoffeeMachine(power) {
    Machine.call(this); // отнаследовать
  
    var waterAmount = 0;
  
    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  
  }
  
  var coffeeMachine = new CoffeeMachine(10000);
  
  console.log(coffeeMachine.enable());
  console.log(coffeeMachine.setWaterAmount(100));