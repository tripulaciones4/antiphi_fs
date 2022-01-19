import React from "react";
import { shallow } from "enzyme";
import CSVreader from "./CSVreader";

describe("CSVreader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CSVreader />);
    expect(wrapper).toMatchSnapshot();
  });
});
