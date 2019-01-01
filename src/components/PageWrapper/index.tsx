import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 32.5em;

  > h1:first-child,
  > h2:first-child,
  > h3:first-child,
  > h4:first-child {
    margin-top: 0;
  }

  @media print {
    max-width: 100%;
  }
`

export default PageWrapper
