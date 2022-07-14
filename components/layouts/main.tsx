import Head from "next/head";
import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const MainLayout = ({children}:Props) => {
  return (
    <>
    <Head>
        <title>Simple Markdown Editor</title>
        <meta name="description" content="Mark Writer es a simple and easy to use markdown editor" />
        <link rel="icon" href="/markico.jpg" />
      </Head>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      { children  }
    </div>
    </>
  )
}

export default MainLayout