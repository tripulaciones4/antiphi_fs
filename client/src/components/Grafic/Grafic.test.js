import React from "react";
import { shallow } from "enzyme";
import Grafic from "./Grafic";

describe("Grafic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Grafic />);
    expect(wrapper).toMatchSnapshot();
  });
});
