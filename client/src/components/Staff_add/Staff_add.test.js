import React from "react";
import { shallow } from "enzyme";
import Staff_add from "./Staff_add";

describe("Staff_add", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Staff_add />);
    expect(wrapper).toMatchSnapshot();
  });
});
