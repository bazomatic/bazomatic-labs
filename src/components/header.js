import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  GiGearHammer,
  GiBigGear,
  GiGears,
  GiBubblingFlask,
  GiFizzingFlask,
  GiRoundBottomFlask,
} from "react-icons/gi"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#11DD11`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <GiGears />
          {siteTitle}
        </Link>
      </h1>
      <Subtext>
        a veritable frankenstein's monster of frameworks and libraries
      </Subtext>
    </div>
  </header>
)

const Subtext = styled.h6`
  margin-bottom: 0;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
