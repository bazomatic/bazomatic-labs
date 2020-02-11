import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="&nbsp;" />
    <h1>so uh...</h1>
    <p>
      the site is an extreme work in progress. it's a place for me to tinker
      with various technologies and rapidly prototype. eventually, it'll look better; that time is not now.
    </p>
    <ProjectDisplayCase>
      <Link to="/tunnelwrap/">
        shader test: wrap texture into tunnel and "move" through it
      </Link>
    </ProjectDisplayCase>
    <br />
    <br />
  </Layout>
)

const ProjectDisplayCase = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectDisplay = styled.div``

export default IndexPage
