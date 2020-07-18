import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import App from "next/app"
import Head from "next/head"
import { myTheme } from "../themes/myThemes"

export default class app extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={myTheme}>
        <Head>
          <title>Muhammad Wafa</title>
        </Head>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}
