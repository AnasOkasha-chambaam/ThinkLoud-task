export default class Phone {
  constructor(
    model,
    manufacture_year,
    brand,
    memory,
    other_specs = [true, false, false],
    screen,
    color
  ) {
    this.id = 1;
    this.model = model;
    this.manufacture_year = manufacture_year;
    this.brand = brand;
    this.memory = memory;
    this.other_specs = other_specs;
    this.screen_size = screen;
    this.color = color;
  }
}
