describe('All Done', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Todo', () => {
  it('becomes checked when clicked', () => {
    cy.get('.bi-square').first().click();
    expect(cy.get('.bi-check-square-fill'));
  });

  it('should be editable', () => {
    cy.contains('Walk the dog').click();
    cy.get('input').type(' and the cat{enter}');
    expect(cy.contains('Walk the dog and the cat'));
  });

  it('should be able to be created', () => {
    cy.contains('New Todo').click();
    cy.get('input').type('Go to the movies{enter}');
    expect(cy.contains('Go to the movies'));
  });
});
