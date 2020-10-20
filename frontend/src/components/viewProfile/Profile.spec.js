import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Profile", () => {
  let wrapper;
  let profile = {
    profile_id: 1,
    user_id: 1,
    firstName: "Jimmy",
    lastName: "Doe",
    position: "Developer",
    aboutMe: "Good",
    education: [
      {
        school: "A School",
        degree: "BS",
        major: "CS",
        eduStartDate: "2020-04",
        eduEndDate: "2020-05",
        gpa: "3",
      },
      {
        school: "B University",
        degree: "MS",
        major: "SE",
        eduStartDate: "2020-08",
        eduEndDate: "2020-12",
        gpa: "3",
      },
    ],
    experience: [
      {
        title: "Intern",
        company: "Y Company",
        location: "PH",
        expStartDate: "2020-03",
        expEndDate: "2020-05",
      },
      {
        title: "Developer",
        company: "Z Company",
        location: "NY",
        expStartDate: "2020-06",
        expEndDate: "2020-12",
      },
    ],
  };

  beforeEach(() => (wrapper = shallow(<Profile profile={profile} />)));

  it("Profile should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Profile should include container", () => {
    const container = wrapper.find("Container");
    expect(container.length).toEqual(1);
  });

  it("Profile should include image", () => {
    const container = wrapper.find("Image");
    expect(container.length).toEqual(1);
  });

  it("Profile should include labels", () => {
    expect(wrapper.find("label").length).toEqual(
      7 + profile.education.length * 12 + profile.experience.length * 10
    );
  });

  it("Profile should include h5 tags", () => {
    expect(wrapper.find("h5").length).toEqual(3);
  });

  it("Profile should include  h6 tags", () => {
    expect(wrapper.find("h6").length).toEqual(
      profile.education.length * 6 + profile.experience.length * 5
    );
  });

  it("Profile should include 5 Row tags", () => {
    expect(wrapper.find("Row").length).toEqual(5);
  });

  it("Profile should include 6 Col tags", () => {
    expect(wrapper.find("Col").length).toEqual(6);
  });

  it("should include labels for personal details, education, and experience", () => {
    expect(wrapper.find("label#firstname").length).toEqual(1);
    expect(wrapper.find("label#lastname").length).toEqual(1);
    expect(wrapper.find("label#position").length).toEqual(1);
    expect(wrapper.find("label#aboutMe").length).toEqual(1);
    expect(wrapper.find("label#school").length).toEqual(
      profile.education.length
    );
    expect(wrapper.find("label#degree").length).toEqual(
      profile.education.length
    );
    expect(wrapper.find("label#major").length).toEqual(
      profile.education.length
    );
    expect(wrapper.find("label#eduStartDate").length).toEqual(
      profile.education.length
    );
    expect(wrapper.find("label#eduEndDate").length).toEqual(
      profile.education.length
    );
    expect(wrapper.find("label#gpa").length).toEqual(profile.education.length);
    expect(wrapper.find("label#title").length).toEqual(
      profile.experience.length
    );
    expect(wrapper.find("label#company").length).toEqual(
      profile.experience.length
    );
    expect(wrapper.find("label#location").length).toEqual(
      profile.experience.length
    );
    expect(wrapper.find("label#expStartDate").length).toEqual(
      profile.experience.length
    );
    expect(wrapper.find("label#expEndDate").length).toEqual(
      profile.experience.length
    );
  });

  it("should include buttons for send and edit profile", () => {
    expect(wrapper.find("Button#Send").length).toEqual(1);
    expect(wrapper.find("Button#Edit").length).toEqual(1);
  });

  it("render Send button with custom text", () => {
    const button = wrapper.find("Button#Send");
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual("Send");
  });

  it("render Edit button with custom text", () => {
    const button = wrapper.find("Button#Edit");
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual("Edit");
  });
});