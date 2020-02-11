import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GameCanvas from "./GameCanvas"

const TunnelWrap = () => (
  <Layout>
    <SEO title="shader: tunnel wrap" />
    <GameCanvas />
  </Layout>
)

export default TunnelWrap
