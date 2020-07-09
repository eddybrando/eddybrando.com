import { shallowMount } from "@vue/test-utils";
import Component from "./../TextLink";

describe("TextLink", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(Component, {
      stubs: ["font-awesome-icon", "g-link"],
      propsData: { label: "Home", to: "/home" },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
