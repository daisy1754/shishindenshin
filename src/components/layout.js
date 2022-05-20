import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="main-footer">
        N人のソフトウェアエンジニア (hiroqn, enka, <a href="https://twitter.com/daisy1754">daisy1754</a>) がプログラミングやソフトウェアエンジニアリングの話をするサイトです。inspired by https://messagepassing.github.io/
      </footer>
    </div>
  )
}

export default Layout
