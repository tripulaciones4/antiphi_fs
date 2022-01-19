import React from "react";
import { shallow } from "enzyme";
import Searches from "./Searches";

describe("Searches", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Searches />);
    expect(wrapper).toMatchSnapshot();
  });
});
