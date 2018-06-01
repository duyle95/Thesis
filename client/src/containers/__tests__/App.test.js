import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import "services/localStorage";
import Root from "Root";
import App from "containers/App";
import Header from "containers/Header";
import Signin from "containers/Auth/Signin";
import Signup from "containers/Auth/Signup";
import Landing from "components/Landing";

let wrapper;

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]} initialIndex={0}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );

afterEach(() => {
  wrapper.unmount();
});

describe("<App />", () => {
  xit("should render Landing and Header components when navigating to '/' route", () => {
    wrapper = renderRoutes("/");
    expect(wrapper.find(Landing).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  xit("should navigate to '/' route when click to the logo", () => {
    wrapper = renderRoutes("/");
    wrapper
      .find("Link")
      .findWhere(n => n.prop("to") === "/")
      .simulate("click", {
        button: 0
      });
    expect(wrapper.find(Landing).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  xit("should render Header and Signin components when navigating to '/signin' route", () => {
    wrapper = mount(
      <Root>
        <App />
      </Root>
    );
    wrapper
      .find("Link")
      .findWhere(n => n.prop("to") === "/signin")
      .simulate("click", {
        button: 0
      });
    expect(wrapper.find(Signin).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  xit("should render Header and Signup components when navigating to '/signup' route", () => {
    wrapper = renderRoutes("/signup");
    wrapper
      .find("Link")
      .findWhere(n => n.prop("to") === "/signup")
      .simulate("click", {
        button: 0
      });
    expect(wrapper.find(Signup).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
  });
});
