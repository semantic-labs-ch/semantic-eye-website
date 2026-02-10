 module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/icons');
    eleventyConfig.addPassthroughCopy('./src/assets');
    return { 
        dir: {
            input: "src",
            output: "public"
        }
    }
 }

