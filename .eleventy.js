// render markdown (an other formats) inside Nanjucks:
const { defineConfig } = require("11ty.ts");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

// Allow CSS class designations inside .md files:
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = defineConfig((eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/icons');
    eleventyConfig.addPassthroughCopy('./src/assets');
    
    // render markdown (an other formats) inside Nanjucks --> renderFile:
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.setLibrary('md', markdownLib)

    
    return { 
        dir: {
            input: "src",
            output: "public"
        }
    };
});
