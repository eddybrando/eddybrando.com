import React from "react"
import renderer from "react-test-renderer"

import { PureSEO } from "../seo"

describe("SEO", () => {
  it("renders correctly", () => {
    const site = {
      siteMetadata: {
        title: "Site title from metadata",
        description: "Lorem ipsum dolor sit amet! From metadata.",
        author: "John Doe",
      },
    }
    const tree = renderer
      .create(
        <PureSEO
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          lang="en"
          meta={[]}
          title="Site title"
          noTitleTemplate={false}
          site={site}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
