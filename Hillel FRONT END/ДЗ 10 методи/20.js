function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
  this.getEnergy = getEnergy;
  this.setEnergy = setEnergy;

  const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
  let energy = null; // приватное свойство, недоступно за пределами

  this.setEnergy(initialEnergy);

  function getEnergy() {
    return energy;
  }

  function setEnergy(param) {
    // устанавливаю новый заряд батареи
    if (param < 0) {
      throw new Error("Energy level can't be less than 0");
    }
    if (param > MAX_ENERGY_CAPACITY) {
      throw new Error("Energy level can't be more than 100");
    }
    energy = param;
  }
}

const cleanerRobot = new CleanerRobot(22);

console.log(
  `Текущий заряд батареи: ${cleanerRobot.getEnergy()}`
); /* Текущий заряд батареи: 22 */

cleanerRobot.setEnergy(55); // передаю новый заряд
console.log(
  `Текущий заряд батареи: ${cleanerRobot.getEnergy()}`
); /* Текущий заряд батареи: 55 */

new CleanerRobot(-1); // typeError
