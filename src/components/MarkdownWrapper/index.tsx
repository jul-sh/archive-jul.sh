import styled from 'styled-components'

const MarkdownWrapper = styled.div`
  h2 {
    margin: 1.75em 0 0.75em 0;
  }

  h3 {
    margin: 2.5em 0 1em 0;
  }

  > h1:first-child,
  > h2:first-child,
  > h3:first-child,
  > h4:first-child,
  h2 + h3 {
    margin-top: 0;
  }

  .button-parent {
    display: flex;
    margin: 2.5rem 0;
  }

  .button {
    padding: 0.8em 1em;
    color: rgb(0, 0, 0);
    background-color: rgb(250, 250, 250);
    border-radius: 0.3rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 90%;
    transition: all 400ms;
    border-bottom: none;

    :hover {
      background-color: rgb(255, 255, 255);
      box-shadow: 0 5px 12px -2px var(--green);
      transform: translateY(-2px) scale(1.005);
      text-decoration: none;
      border-bottom: none;
    }

    @media only screen and (max-width: 700px) {
      box-shadow: 0 5px 12px -2px var(--green);
      :hover {
        transform: none;
      }
    }
  }

  ul,
  ol {
    line-height: 1.5;
  }

  li p {
    margin: 0;
  }

  ul li ul {
    margin-bottom: 0.25rem;
    margin-top: 0.15rem;
  }

  i,
  em {
    color: var(--lightBlue);
    font-style: normal;
  }

  b,
  strong {
    color: var(--blue);
    font-weight: normal;
  }

  strong em,
  em strong,
  b i,
  i b {
    color: var(--orange);
    font-style: normal;
    font-weight: normal;
  }

  code {
    font-family: var(--primaryFont);
    white-space: normal;
  }

  a {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    color: var(--green);
    transition-duration: 300ms;
    border-bottom: var(--translucentGreen) 2px solid;
  }

  a:hover {
    border-bottom: var(--green) 2px solid;
  }

  p a,
  li a {
    color: var(--green);
    border-bottom: var(--translucentGreen) 2px solid;
  }

  .secondary-text a {
    border-bottom: var(--translucentGray) 2px solid;
  }

  .secondary-text a:hover {
    border-bottom: var(--gray) 2px solid;
  }

  .secondary-text p {
    margin: 13px 0;
  }

  .secondary-text,
  .secondary-text a {
    color: var(--gray);
  }

  .secondary-text a {
    border-bottom: 2px solid var(--translucentGray);
  }
`

export default MarkdownWrapper
