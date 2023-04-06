/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
 
module.exports = withContentlayer({
  experimental: { appDir: true },
})