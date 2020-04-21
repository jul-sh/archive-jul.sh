import React from 'react'
import styled from 'styled-components'
import Layout from '~/components/Layout'
import PageWrapper from '~/components/PageWrapper'

const ButtonWrapper = styled.div`
  display: flex;
  margin: 1.5rem 0;
`

const ButtonLink = styled.a`
  padding: 0.8em 1em;
  color: rgb(0, 0, 0);
  background-color: rgb(250, 250, 250);
  border-radius: 0.18rem;
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
`

const NotFoundPage: React.FunctionComponent<{
  location: {
    pathname: string
  }
}> = ({ location: { pathname } }) => (
  <Layout pathname={pathname}>
    <PageWrapper>
      <h1>NOT FOUND</h1>
      <p>Something bad happened. But I still love you.</p>
      <ButtonWrapper>
        <ButtonLink href="/">Return to the homepage</ButtonLink>
      </ButtonWrapper>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
