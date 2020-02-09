import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GameCanvas from "../stsbg/GameCanvas"

const SpaceTravelBg = () => (
  <Layout>
    <SEO title="shader: tunnel wrap" />
    <GameCanvas />
  </Layout>
)

export default SpaceTravelBg
