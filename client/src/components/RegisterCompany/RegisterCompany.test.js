import React from "react";
import { shallow } from "enzyme";
import RegisterCompany from "./RegisterCompany";

describe("RegisterCompany", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RegisterCompany />);
    expect(wrapper).toMatchSnapshot();
  });
});
