import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children, title, subtitle }) => (
  <>
    <header style={{ marginBottom: '1em' }}>
      <h1>{title}</h1>
      {subtitle()}
    </header>

    <main>{children}</main>

    <footer style={{ marginTop: '1em', textAlign: 'center' }}>
      <small>&copy; 2019; Joseph Morse; MIT</small>
    </footer>
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.func,
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  subtitle: () => null
}

export default Layout
