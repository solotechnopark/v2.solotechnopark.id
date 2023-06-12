import React from "react";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <React.Suspense>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </React.Suspense>
  );
}
