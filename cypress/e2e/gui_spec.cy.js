// cypress/e2e/gui_spec.cy.js
describe('Disko App Navigation Tests', () => {
    // Test the Home page buttons and navigation
    it('Should display the Home page and navigate using Home, About, and Start Disko buttons', () => {
      cy.visit('http://localhost:3000/')
      
      // Verify presence of all buttons
      cy.get('button').contains('Home').should('exist')
      cy.get('button').contains('About').should('exist')
      cy.get('button').contains('Start Disko').should('exist')
  
      // Test the Start Disko button
      cy.get('button').contains('Start Disko').click()
      cy.url().should('include', '/statistics')
      cy.contains('cluster') // Validate Statistics content
  
      // Navigate back to Home to continue testing
      cy.get('button').contains('Home').click()
      cy.url().should('eq', 'http://localhost:3000/') // Validate return to Home
  
      // Test the About button navigation from Home
      cy.get('button').contains('About').click()
      cy.url().should('include', '/about')
      cy.contains('About Disko') // Validate About content
  
      // Test Home button navigation from About
      cy.get('button').contains('Home').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
  
    // Test the About page and navigation back to Home and Statistics
    it('Should navigate from About page to Home and Statistics', () => {
      cy.visit('http://localhost:3000/about')
      cy.contains('About') 
  
      // Verify presence of navigation buttons
      cy.get('button').contains('Home').should('exist')
      cy.get('button').contains('About').should('exist')
  
      // Navigate to Statistics using Start Disko button (Note: this button only on Home)
      cy.get('button').contains('Home').click()
      cy.get('button').contains('Start Disko').click()
      cy.url().should('include', '/statistics')
      cy.contains('Statistics of Images per Registry')
  
      // Navigate back to About page
      cy.get('button').contains('About').click()
      cy.url().should('include', '/about')
    })
  
    // Test the Statistics page and navigation back to Home and About
    it('Should navigate from Statistics page to Home and About', () => {
      cy.visit('http://localhost:3000/statistics')
      cy.contains('Statistics of Images per Registry') // Validate Statistics content
  
      // Verify presence of navigation buttons
      cy.get('button').contains('Home').should('exist')
      cy.get('button').contains('About').should('exist')
  
      // Navigate back to Home
      cy.get('button').contains('Home').click()
      cy.url().should('eq', 'http://localhost:3000/')
  
      // Navigate to About
      cy.get('button').contains('About').click()
      cy.url().should('include', '/about')
    })
  })
  