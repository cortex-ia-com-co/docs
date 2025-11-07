'use strict';

const kroki = require('asciidoctor-kroki');

module.exports.register = function (registry) {
  if (typeof registry !== 'undefined' && registry.constructor && registry.constructor.name === 'Registry') {
    kroki.register(registry);
    return registry;
  } else {
    return kroki.register(registry);
  }
};

