import {keyframes} from "@emotion/core";

const innerGlitchAnimation = keyframes`
    0% {
        clip-path: var(--clip-one);
    }
    2%, 8% {
         clip-path: var(--clip-one);
         transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    6% {
        clip-path: var(--clip-one);
        transform: translate(calc(1%), 0);
    }
    9% {
      clip-path: var(--clip-two);
      transform: translate(0, 0);
    }
    10% {
        clip-path: var(--clip-three);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      13% {
        clip-path: var(--clip-three);
        transform: translate(0, 0);
      }
      14%, 21% {
        clip-path: var(--clip-four);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      25% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      30% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
      }
      35%, 45% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * -1%));
      }
      40% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * 1%));
      }
      50% {
        clip-path: var(--clip-six);
        transform: translate(0, 0);
      }
      55% {
        clip-path: var(--clip-seven);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      60% {
        clip-path: var(--clip-seven);
        transform: translate(0, 0);
      }
      31%, 61%, 100% {
        clip-path: var(--clip-four);
      }
`;

export default innerGlitchAnimation;