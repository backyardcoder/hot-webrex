import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});
const { document } = window;

global.document = document;
global.window = window;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// Temp polyfill for React16
global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};
