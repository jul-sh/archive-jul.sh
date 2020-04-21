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
    margin: 1.7rem 0;
  }

  .button {
    padding: 0.8em 1em;
    color: rgb(0, 0, 0);
    background-color: rgb(250, 250, 250);
    border-radius: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 90%;
    transition: all 400ms;
    border-bottom: none;

    :hover {
      background-color: rgb(255, 255, 255);
      box-shadow: 0 0.2rem 0.5rem -0.08rem var(--green);
      transform: translateY(-0.08rem) scale(1.005);
      text-decoration: none;
      border-bottom: none;
    }

    @media only screen and (max-width: 700px) {
      box-shadow: 0 0.2rem 0.5rem -0.08rem var(--green);
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
    margin-bottom: 0.17rem;
    margin-top: 0.6rem;
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
    border-bottom: var(--translucentGreen) 0.08rem solid;
  }

  a:hover {
    border-bottom: var(--green) 0.08rem solid;
  }

  p a,
  li a {
    color: var(--green);
    border-bottom: var(--translucentGreen) 0.08rem solid;
  }
`

export default MarkdownWrapper
