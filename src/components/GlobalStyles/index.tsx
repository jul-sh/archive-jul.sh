import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 24px;

    /* fonts */
    --primaryFont: Juliette, monospace;
    --sansFont: 'Juliette Sans', sans-serif;

    /* colors */
    --background-color: hsl(217, 36%, 10%);
    --pink: hsl(0, 82%, 85%);
    --lightGray: hsl(0, 31%, 85%);
    --gray: hsl(0, 6%, 63%);
    --translucentGray: hsla(0, 6%, 63%, 0.6);
    --yellow: hsl(37, 80%, 75%);
    --orange: hsl(26, 80%, 71%);
    --translucentOrange: hsla(24, 86%, 73%, 0.6);
    --lowTranslucentOrange: hsla(24, 86%, 73%, 0.2);
    --blue: hsl(209, 36%, 70%);
    --lightBlue: hsl(179, 40%, 70%);
    --green: hsl(152, 25%, 53%);
    --translucentGreen: hsla(153, 36%, 59%, 0.6);

    /* sizing */
    --responsive-padding: 2.3rem;

    --safe-area-inset-top: 0px;
    --safe-area-inset-right: 0px;
    --safe-area-inset-bottom: 0px;
    --safe-area-inset-left: 0px;
  }

  @supports (padding: env(safe-area-inset-top)) and
    (padding: env(safe-area-inset-right)) and
    (padding: env(safe-area-inset-bottom)) and
    (padding: env(safe-area-inset-left)) {
    :root {
      --safe-area-inset-top: env(safe-area-inset-top);
      --safe-area-inset-right: env(safe-area-inset-right);
      --safe-area-inset-bottom: env(safe-area-inset-bottom);
      --safe-area-inset-left: env(safe-area-inset-left);
    }
  }

  @media (max-width: 700px) {
    :root {
      --responsive-padding: 1.1rem;
    }
  }

  @media (max-width: 370px) {
    --responsive-padding: 0.625rem;
  }

  @media print {
    :root {
      --primaryFont: Garamond, serif;
    }
  }

  ::selection {
        background: rgba(255, 210, 57, 0.2);
        text-shadow: black 0.05rem 0.05rem 0rem;
    }

  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  body {
    background: var(--background-color);
    color: var(--green);
    font-family: var(--primaryFont);
    font-feature-settings: 'calt' 1;
    font-variant-ligatures: contextual;
    word-spacing: -0.25ch;
    line-height: 1.4;

    ${({ isApp }: { isApp: Boolean }) =>
    isApp &&
    css`
        /* force full height on iOS */
        min-height: 100vh;
      `}
  }

  blockquote {
    font-size: 1.5em;
    line-height: 1.5;
    color: var(--orange);
  }

  h1 {
    font-size: 2em; /* normalize across browsers */
    margin: 0.2em 0 0.67em 0;
  }

  h1,
  h1 a {
    color: var(--pink);
  }

  h2 {
    margin: 0.2em 0 0.67em 0;
  }

  h2,
  h2 a {
    color: var(--yellow);
  }

  h3 {
    font-size: 0.95rem;
    margin: 0.2em 0 0.67em 0;
  }

  h3,
  h3 a {
    color: var(--orange);
  }

  h1,
  h2,
  h3 {
    word-spacing: -0.3ch;
  }

  h4,
  h4 a {
    font-size: 0.9rem;
    color: var(--blue);
  }

  h4 a {
    color: var(--orange);
    border-bottom: var(--translucentOrange) 0.08rem solid;
  }

  h4:hover a {
    border-bottom: var(--orange) 0.08rem solid;
  }

  @media only screen and (min-width: 1500px) {
    :root {
      font-size: 26px;
    }
  }

  @media only screen and (min-width: 1700px) {
    :root {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 700px) {
    :root {
      font-size: 20px;
    }

    body {
      line-height: 1.3;
    }

    h1,
    h1 a {
      font-size: 1.75em;
    }
  }

  @media print {
    :root {
      font-size: 11pt;
    }

    body {
      background: none;
      color: rgb(0, 0, 0);
      line-height: 1.1;
      word-spacing: initial;
    }

    span,
    p,
    i,
    b,
    em,
    strong,
    li,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      filter: brightness(0.5) saturate(3);
      page-break-inside: avoid;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      page-break-after: avoid;
    }

    h1,
    h1 a {
      font-size: 32pt;
    }

    h1,
    h2,
    h3 {
      word-spacing: -0.3ch;
      word-spacing: initial;
    }
  }
`

export default GlobalStyles
