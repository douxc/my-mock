import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next App with unocss</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className='py-20 px-12 text-center flex flex-col items-center gap-20px font-sans'>
        <h1>Hello world!</h1>
      </main>
    </>
  );
};

export default Home;
