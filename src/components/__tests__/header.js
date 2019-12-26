import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header
          nav={[
            { label: "First link", link: "/" },
            { label: "Second link", link: "/second-link" },
          ]}
          titleAppend="dolor"
          titleHighlight="highlighted text"
          titlePrepend="Lorem ipsum"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
