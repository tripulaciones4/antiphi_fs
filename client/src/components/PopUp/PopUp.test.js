import React from "react";
import { shallow } from "enzyme";
import PopUp from "./PopUp";

describe("PopUp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PopUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
