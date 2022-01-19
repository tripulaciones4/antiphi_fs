import React from "react";
import { shallow } from "enzyme";
import ReportingLegitimates from "./ReportingLegitimates";

describe("ReportingLegitimates", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReportingLegitimates />);
    expect(wrapper).toMatchSnapshot();
  });
});
