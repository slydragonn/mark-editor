describe('editor page', () => {
  const text = `
## Sub title
Lorem Ipsum is simply dummy text of the printing and typesetting industry.

~~~js
function add(a, b) {
  return a + b
}
~~~
  `

  beforeEach(() => {
    cy.visit('/editor')
  })

  it('default editor value', () => {
    localStorage.clear()
    cy.get('[data-cy="markdown-editor"]').contains('# Hello World!')
    cy.get('[data-cy="html-view"]').contains('h1', 'Hello World!')
  })

  describe('navbar works', () => {

    it('home button redirects correctly', () => {
      cy.get('nav div a').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })

    it('menu is displayed', () => {
      cy.get('nav ul').should('not.be.visible')
      cy.get('nav button').click()
      cy.get('nav ul').should('be.visible')
    })

    it('copy code correctly', () => {
      cy.get('nav button').click()
      cy.get('nav ul').contains('Copy Markdown').click()
      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq('# Hello World!')
        })
      })
      cy.get('nav ul').contains('Copy HTML').click()
      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          const value = text.replace(/[\r\n]*/g, "")
          expect(value).to.eq('<h1 id="hello-world">Hello World!</h1>')
        })
      })
    })
  })
  describe('editor works', () => {
    it('code converts correctly', () => {
      cy.get('[data-cy="markdown-editor"]').type(text)
      cy.get('[data-cy="html-view"]').contains('h1', 'Hello World!')
      cy.get('[data-cy="html-view"]').contains('h2', 'Sub title')
      cy.get('[data-cy="html-view"]').contains('p', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
      cy.get('[data-cy="html-view"]').contains('pre', 'function add(a, b) {')
    })

    it('last value is correct', () => {
      cy.get('[data-cy="markdown-editor"]').type(text)
      cy.reload()
      cy.get('[data-cy="markdown-editor"]').contains('Hello World!')
      cy.get('[data-cy="markdown-editor"]').contains('Sub title')
      cy.get('[data-cy="markdown-editor"]').contains('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
    })
  })
})