describe('siteye ulaşılabiliyor mu?', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://fs-web-frontend-challenge-navy-five.vercel.app/')
  });
  it('site yayında ve siteye ulaşılabiliyor', () => {
      cy.contains('Hamza').should('exist');
  })
  it('Header kısmı mevcut', () => {
      cy.contains('Hamza').should('exist');
      cy.contains('Frontend Developer').should('exist');
  })
  it('Header kısmındaki img görünür', () => {
      cy.get('#header img').should('be.visible');
  })
  it('Header kısmındaki dark mode butonu çalışıyor', () => {
      cy.contains('Dark Mode').click();
  })
  it('Header kısmındaki language butonu çalışıyor', () => {
      cy.contains("TÜRKÇE'YE GEÇ").click();
      cy.contains('Yetenekler').should('exist');
  })

  it("Skills başlıklı bölüm mevcut", () => {
      cy.contains('Skills').should('exist');
  })
  it("Profile başlıklı bölüm mevcut", () => {
      cy.contains('Profile').should('exist');
  })
  it("Profile kısmında alt başlıklar mevcut", () => {
      cy.contains('Basic Information').should('exist');
      cy.contains('About Me').should('exist');
      cy.contains('Birth Date').should('exist');
      cy.contains('Location').should('exist');
      cy.contains('Education Status').should('exist');
      cy.contains('Preferred Role').should('exist');
  })
  it("Projects başlıklı bölüm mevcut", () => {
      cy.contains('Projects').should('exist');
  })
  it("view site a tıklayınca site açılıyor, githuba tıklayınca github sayfası açılıyor", () => {
      cy.contains('View Site').click();
      cy.url().should('include', 'https://fsweb-s8-challenge-pizza-silk.vercel.app/');
      cy.go('back');
      cy.contains('GitHub').click();      
      cy.url().should('include', 'https://github.com/hmzdnzl/fsweb-s8-challenge-pizza');      
  })
  it("Footer bölümü mevcut", () => {
      cy.contains('Send me a message!').should('exist');
      cy.contains('@gmail.com').should('exist');    
  })
})