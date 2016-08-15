import alexaSchemas from '../../src/alexa-schemas';

describe('alexaSchemas', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(alexaSchemas, 'greet');
      alexaSchemas.greet();
    });

    it('should have been run once', () => {
      expect(alexaSchemas.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(alexaSchemas.greet).to.have.always.returned('hello');
    });
  });
});
