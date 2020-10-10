module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets');

  return {
    useGitIgnore: false,
  }
}