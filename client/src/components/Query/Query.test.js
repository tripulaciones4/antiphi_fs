import React from "react";
import { shallow } from "enzyme";
import Query from "./Query";

describe("Query", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Query />);
    expect(wrapper).toMatchSnapshot();
  });
});
