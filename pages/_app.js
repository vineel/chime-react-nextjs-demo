import { ThemeProvider } from "styled-components";
import {
  MeetingProvider,
  lightTheme
} from "amazon-chime-sdk-component-library-react";
import React from "react";
import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <MeetingProvider>
        <Component {...pageProps} />
      </MeetingProvider>
    </ThemeProvider>
  );
}
