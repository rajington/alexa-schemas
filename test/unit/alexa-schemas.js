import fs from 'fs';
import path from 'path';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import yaml from 'js-yaml';

chai.use(chaiJsonSchema);
chai.tv4.banUnknown = true;

const loadSchema = (folder, name) => {
  const file = path.join(__dirname, '..', '..', 'src', folder, `${name}.yaml`);
  const schema = yaml.safeLoad(fs.readFileSync(file));
  chai.tv4.addSchema(schema);
  return schema;
};

const loadSample = (...paths) =>
  JSON.parse(fs.readFileSync(path.join(__dirname, 'samples', ...paths)));

describe('request', () => {
  let schema;

  before(() => {
    schema = loadSchema('skills-kit', 'request');
  });

  describe('launch', () => {
    it('should validate', () => {
      chai.expect(loadSample('request', 'launch', 'base.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate with intent', () => {
      chai.expect(loadSample('request', 'launch', 'withIntent.json'))
        .to.not.be.jsonSchema(schema);
    });
  });

  describe('intent', () => {
    it('should validate', () => {
      chai.expect(loadSample('request', 'intent', 'base.json'))
        .to.be.jsonSchema(schema);
    });

    it('should validate with session attributes', () => {
      chai.expect(loadSample('request', 'intent', 'withSessionAttributes.json'))
        .to.be.jsonSchema(schema);
    });

    it('should validate with slots', () => {
      chai.expect(loadSample('request', 'intent', 'withSlots.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate without name', () => {
      chai.expect(loadSample('request', 'intent', 'withoutName.json'))
        .to.not.be.jsonSchema(schema);
    });
  });

  describe('session ended', () => {
    it('should validate', () => {
      chai.expect(loadSample('request', 'sessionEnded', 'base.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate without reason', () => {
      chai.expect(loadSample('request', 'sessionEnded', 'withoutReason.json'))
        .to.not.be.jsonSchema(schema);
    });
  });
});

describe('response', () => {
  let schema;

  before(() => {
    schema = loadSchema('skills-kit', 'response');
  });

  describe('speech', () => {
    it('should validate text', () => {
      chai.expect(loadSample('response', 'speech', 'text.json'))
        .to.be.jsonSchema(schema);
    });

    it('should validate ssml', () => {
      chai.expect(loadSample('response', 'speech', 'ssml.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate ssml and text', () => {
      chai.expect(loadSample('response', 'speech', 'ssmlAndText.json'))
        .to.not.be.jsonSchema(schema);
    });
  });

  describe('card', () => {
    it('should validate simple with content', () => {
      chai.expect(loadSample('response', 'card', 'simple.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate simple with text/image', () => {
      chai.expect(loadSample('response', 'card', 'simpleWithTextImage.json'))
        .to.not.be.jsonSchema(schema);
    });

    it('should validate standard with text/image', () => {
      chai.expect(loadSample('response', 'card', 'standard.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate standard with content', () => {
      chai.expect(loadSample('response', 'card', 'standardWithContent.json'))
        .to.not.be.jsonSchema(schema);
    });

    it('should validate link account', () => {
      chai.expect(loadSample('response', 'card', 'linkAccount.json'))
        .to.be.jsonSchema(schema);
    });

    it('should not validate link with extra title/content/text/image', () => {
      chai.expect(loadSample('response', 'card', 'linkAccountWithExtra.json'))
        .to.not.be.jsonSchema(schema);
    });
  });
});
