describe('home page renders correctly', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('home page contain title and info', () => {
    cy.contains('Mark Writer')
    cy.contains('Simple')
    cy.contains('Markdown')
    cy.contains('Editor')
    cy.scrollTo('0', '100%')
    cy.contains('A simple and straightforward Markdown Web Editor.')
    cy.contains('Export your code to HTML or to markdown itself, all very simple.')
  })
  it('button works', () => {
    cy.scrollTo('0', '100%')
    cy.contains("let's go").click()
    cy.wait(5000)
    cy.url().should('include', '/editor')
  })
})