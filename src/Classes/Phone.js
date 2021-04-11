import react from "react";
export default class Phone extends react.Component {
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
    super();
    this.id = id;
    this.model = model;
    this.year = manufacture_year;
    this.brand = brand;
    this.memory = memory;
    this.other_specs = other_specs;
    this.screen_size = screen;
    this.color = color;
  }
  componentDidMount() {
    // for charts
    let rotationValue = 0;
    document.querySelectorAll(".a-strib").forEach((one) => {
      let ttlL = one.getTotalLength();
      one.style.strokeDasharray = ttlL;
      one.style.strokeDashoffset =
        (1 -
          +one.getAttribute("dataamount") /
            one.parentElement.getAttribute("datattl")) *
        ttlL;
      one.style.transformOrigin = "center";
      one.style.transform = `rotate(${rotationValue}deg)`;
      rotationValue +=
        (+one.getAttribute("dataamount") /
          one.parentElement.getAttribute("datattl")) *
        360;
    });
  }
  render() {
    return <react.Fragment></react.Fragment>;
  }
}
