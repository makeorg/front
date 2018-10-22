import { createGlobalStyle } from 'styled-components';

const AnimationsStylesheet = createGlobalStyle`
  .closed-pannel {
    transform: translate(50%,0);
  }
  .opened-pannel {
    transform: translate(50%,-100%);
  }
  .collapsed-sequence {
    transform: translateY(80%);
  }
  .expanded-sequence {
    transform: translateY(0);
  }
`;

export default AnimationsStylesheet;
