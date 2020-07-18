import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import App from "next/app"
import { myTheme } from "../themes/myThemes"

export default class app extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={myTheme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}
