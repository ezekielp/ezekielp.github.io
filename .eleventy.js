module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('CNAME');

  return {
    useGitIgnore: false,
  }
}