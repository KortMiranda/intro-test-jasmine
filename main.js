
/**
 * Test Suite
 */
describe(`${Person.name} Class`, () => {
    it('exists', () => {
       // assert
       expect(Person).toBeDefined() 
    })
    let model;

   beforeEach(() => {
       model = new Person();
   })

   describe('additional matchers testing area', () => {
       it ('full name has my first name', () => {
        // arrange
        const firstName = 'Dylan';
        const lastName = 'Isral';

        // act
        model = new Person({firstName, lastName})

        // assert
        expect(model.fullName).toMatch(/Dylan/);
       })

   })
})