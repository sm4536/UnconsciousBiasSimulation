import Header from "./Header";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Component", () => {
  test("renders", () => {
    const links = [
      { link: "http://localhost:3000/home", text: "Home" },
      { link: "", text: "Create Profile" },
      { link: "", text: "View Profile" },
    ];
    const wrapper = shallow(<Header links={links} />);
    expect(wrapper.exists()).toBe(true);
  });
});
