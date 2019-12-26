import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import { PureIndexPage } from "../index"

describe("IndexPage", () => {
  it("renders correctly", () => {
    const data = {
      image: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABrSdOWaicjH0NcCf/xAAbEAACAwADAAAAAAAAAAAAAAABAgADERIiMf/aAAgBAQABBQLIbbLHqbUW57BywlFMHWVegnP/xAAWEQADAAAAAAAAAAAAAAAAAAABAiD/2gAIAQMBAT8BUR//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/AVuzn//EAB4QAAICAQUBAAAAAAAAAAAAAAABAhEhEhMiQWGx/9oACAEBAAY/Ah6ZbcUZavs4JWU3Et/TGBryxH//xAAbEAEAAwEBAQEAAAAAAAAAAAABABExIUFRYf/aAAgBAQABPyErC8sC6yj5PP1GRV/ciHJczZx1F8KTgjbbTs1gQQvyIuXJ/9oADAMBAAIAAwAAABCQF7//xAAZEQEAAgMAAAAAAAAAAAAAAAABACEQETH/2gAIAQMBAT8QHdxLh3H/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExQf/aAAgBAgEBPxB/BNDBD//EAB4QAQACAwACAwAAAAAAAAAAAAEAESExUUGRcYHw/9oACAEBAAE/EOiriMT4Ud/sRW3FYwI8nzHIC20Ot+4ecKxt7eSKhOFWD6uWJgVYMOx4QvC7HJrZAM6J/9k=",
            width: 100,
            height: 100,
            src:
              "/static/c0622cdd75216a49c855e9aaa099011e/f1b5a/eddybrando.jpg",
            srcSet:
              "/static/c0622cdd75216a49c855e9aaa099011e/f1b5a/eddybrando.jpg 1x,\n/static/c0622cdd75216a49c855e9aaa099011e/44086/eddybrando.jpg 1.5x,\n/static/c0622cdd75216a49c855e9aaa099011e/9067c/eddybrando.jpg 2x",
          },
        },
      },
    }

    const renderer = new ShallowRenderer()
    const result = renderer.render(<PureIndexPage data={data} />)
    expect(result).toMatchSnapshot()
  })
})
