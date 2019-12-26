import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import NotFoundPage from "../404"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer()
    const result = renderer.render(<NotFoundPage />)
    expect(result).toMatchSnapshot()
  })
})
