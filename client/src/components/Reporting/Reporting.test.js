import React from "react";
import { shallow } from "enzyme";
import Reporting from "./Reporting";

describe("Reporting", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Reporting />);
    expect(wrapper).toMatchSnapshot();
  });
});
