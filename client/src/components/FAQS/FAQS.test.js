import React from "react";
import { shallow } from "enzyme";
import FAQS from "./FAQS";

describe("FAQS", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FAQS />);
    expect(wrapper).toMatchSnapshot();
  });
});
