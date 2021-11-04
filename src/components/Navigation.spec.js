import Navigation from './Navigation.vue';
import { mount } from '@cypress/vue';

describe('Navigation', () => {
  it('should have home link', () => {
    mount(Navigation);
    //doesn't work because `<router-link>` is rendered instead of `<a>`
    cy.get('a').contains('Home').should('exist');
  });
  it('should have login link', () => {
    mount(Navigation);
    //doesn't work because `<router-link>` is rendered instead of `<a>`
    cy.get('a').contains('Home').should('exist');
  });
  it('should have logout link', () => {
    mount(Navigation);
    //works because logout is just an `<a>`
    cy.get('a').contains('Logout').should('exist');
  });
});
