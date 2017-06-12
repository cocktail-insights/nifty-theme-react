import Color from '../dist/index';
import test from 'tape';

test('Base primary color exists', (t) => {
  const primaryColor = Color.BASE.PRIMARY;

  t.equal(primaryColor, '#579ddb');
  t.end();
});
