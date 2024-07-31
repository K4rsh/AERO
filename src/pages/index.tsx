import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import { MembersList } from '../components/MemberCard';
import RolesAndResponsibilties from '../components/RolesAndResponsibilities';
import Vision from '../components/Vision';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`} id="main-hero">
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <LazyShow>
        <section id="canvas">
          <Canvas />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="vision">
          <Vision />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="canvas">
          <Canvas />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="roles-and-responsibilities">
          <RolesAndResponsibilties />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="canvas">
          <Canvas />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="members-list">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-red-600">
              Our Members
            </h2>
            <MembersList />
          </div>
        </section>
      </LazyShow>

      <LazyShow>
        <section id="canvas">
          <Canvas />
        </section>
      </LazyShow>

      <LazyShow>
        <section id="about">
          <About />
        </section>
      </LazyShow>
    </div>
  );
};

export default App;
