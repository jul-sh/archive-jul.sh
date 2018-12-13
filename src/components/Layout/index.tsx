import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '~/components/GlobalStyles'
import Navbar from '~/components/Navbar'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-top: calc(var(--responsive-padding) + var(--safe-area-inset-top));
  padding-right: calc(var(--responsive-padding) + var(--safe-area-inset-right));
  padding-bottom: calc(
    var(--responsive-padding) + var(--safe-area-inset-bottom)
  );
  padding-left: calc(
    var(--responsive-padding) + 3.75rem + var(--safe-area-inset-left)
  );

  @media only screen and (max-width: 1100px) {
    padding-left: calc(var(--responsive-padding) + var(--safe-area-inset-left));
    padding-bottom: calc(
      4rem + var(--responsive-padding) + var(--safe-area-inset-bottom)
    );
  }

  @media only screen and (max-width: 700px) {
    padding: calc(
      0.5rem + var(--responsive-padding) + var(--safe-area-inset-top)
    );
    padding-right: calc(
      var(--responsive-padding) + var(--safe-area-inset-right)
    );
    padding-bottom: calc(
      0.5rem + var(--responsive-padding) + var(--safe-area-inset-bottom)
    );
    padding-left: calc(var(--responsive-padding) + var(--safe-area-inset-left));
    font-size: 21px;
    margin-bottom: 3.5rem;
  }

  @media print {
    max-width: 100%;
  }
`

class Layout extends React.Component<
  {
    pathname: string
  },
  {
    isApp: Boolean
  }
> {
  constructor(props: any) {
    super(props)
    this.state = { isApp: false }
  }

  componentDidMount() {
    if ('standalone' in window.navigator && window.navigator['standalone']) {
      this.setState({ isApp: true })
    }
  }

  render() {
    return (
      <>
        <GlobalStyles isApp={this.state.isApp} />
        <Navbar pathname={this.props.pathname} />
        <Main className="main">{this.props.children}</Main>
      </>
    )
  }
}

export default Layout
