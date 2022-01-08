import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

const Home: NextPage = function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          TopUP Game - Get a New Experience in Gaming
        </title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        {/* facebook */}
        <meta property="og:title" content="TopUP Game - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="https://image" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
