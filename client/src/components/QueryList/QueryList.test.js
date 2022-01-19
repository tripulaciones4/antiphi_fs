import React from "react";
import { shallow } from "enzyme";
import QueryList from "./QueryList";

describe("QueryList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<QueryList />);
    expect(wrapper).toMatchSnapshot();
  });
});
