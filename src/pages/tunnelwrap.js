import React from "react"
import Loadable from "react-loadable"

const LoadableBar = Loadable({
  loader: () => import("../tunnelwrap/TunnelWrap"),
  loading() {
    return <div>Loading...</div>
  },
})

export default () => <LoadableBar />
