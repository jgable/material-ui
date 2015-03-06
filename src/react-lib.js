
if (typeof window !== undefined) {
  module.exports = window.React;
} else {
  module.exports = require('react');
}