module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const experiences = require("./src/data/experience.json");

    const experienceCollection = addCollection({
      typeName: "Experience",
    });

    for (const experience of experiences) {
      experienceCollection.addNode(experience);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
