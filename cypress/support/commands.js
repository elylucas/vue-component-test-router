import { h } from 'vue';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { mount } from '@cypress/vue';

Cypress.Commands.add('mount', (comp, options = {}) => {
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs.transition = false;
  options.global.components = options.global.components || {};
  options.global.components['router-link'] = (props, context) => {
    return h(`a`, { 
      'href': typeof props.to === 'string' ? props.to : JSON.stringify(props.to)
      }, 
      context.slots.default()
    )
  }

  return mount(comp, options);
});
