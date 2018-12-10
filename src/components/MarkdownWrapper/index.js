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
`

export default MarkdownWrapper
