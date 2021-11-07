import { storiesOf } from '@storybook/html';
import notes from '@storybook/addon-notes';

storiesOf('First-Component', module).add(
  'default',
  () => {
    return `<first-component name="nombre del componente"></first-component>`;
  },
  { notes },
);
