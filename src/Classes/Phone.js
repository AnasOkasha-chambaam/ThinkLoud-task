export default class Phone {
  constructor(
    id,
    brand,
    model,
    manufacture_year,
    memory,
    other_specs = [true, false, false],
    screen,
    color
  ) {
    this.id = id;
    this.model = model;
    this.year = manufacture_year;
    this.brand = brand;
    this.memory = memory;
    this.other_specs = other_specs;
    this.screen_size = screen;
    this.color = color;
  }
}
