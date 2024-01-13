import "tailwindcss/tailwind.css";
import Head from "next/head";
import "@/styles/style.scss";
import { ThemeProvider } from "next-themes";

function App({ Component }) {
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="becho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
          <Component />
      </ThemeProvider>
    </>
  );
}

export default App;
