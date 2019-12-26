import React from "react"
import renderer from "react-test-renderer"

import Layout from "../layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout
          children={<div />}
          headerTitle={{
            append: "ipsum",
            highlight: "highlighted text",
            prepend: "Lorem",
          }}
          mainContainerClass="foo-class"
          nav={[
            { label: "First link", link: "/" },
            { label: "Second link", link: "/second-link" },
          ]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
