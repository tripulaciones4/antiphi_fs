import React from "react";
import { shallow } from "enzyme";
import TableCsv from "./TableCsv";

describe("TableCsv", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableCsv />);
    expect(wrapper).toMatchSnapshot();
  });
});
