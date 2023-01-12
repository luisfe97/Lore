// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "video.js/dist/video-js.min.css";
import {Video, Modal} from "../Components/main";
// Global Styles
import "../styles/Style.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    <>
      {require("bootstrap/dist/js/bootstrap.bundle.min.js")}
      {Video()}
      {Modal()}
      
    </>
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
