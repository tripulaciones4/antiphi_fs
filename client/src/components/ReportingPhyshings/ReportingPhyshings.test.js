import React from "react";
import { shallow } from "enzyme";
import ReportingPhyshings from "./ReportingPhyshings";

describe("ReportingPhyshings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReportingPhyshings />);
    expect(wrapper).toMatchSnapshot();
  });
});
