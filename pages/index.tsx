/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Boost from '../components/Boost';
import Fotter from '../components/Fotter';
import Header from '../components/Header';
// import NavComponent from '../components/NavComponent'
import NewsLetter from '../components/Contact';
import Testemonials from '../components/Testemonials';

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <div className="bg-[#EEF4FF] min-h-screen relative">
        {/* <NavComponent /> */}
        <Header />
      </div>

      <div className="grid sm:grid-cols-2 items-center">
        <div>
          <img src="Answer.png" />
        </div>
        <div className="max-w-3xl px-4">
        <h1 className="font-jostBold text-[58px] leading-[50px] sm:text-7xl  mb-8">
          <span>Scale Your Business</span>
          <br />
          <span>with Tech Services</span>
        </h1>


          <div className="flex">
            <div>
              <img src="Group14.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Streamlined Operations</h1>
              <p className="font-jostRegular text-[#61646B]">
                Leverage cutting-edge tools to automate processes and boost productivity.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group15.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Timely Notifications</h1>
              <p className="font-jostRegular text-[#61646B]">
                Stay on top of critical updates with intelligent reminder systems.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group16.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Tailored E-Commerce</h1>
              <p className="font-jostRegular text-[#61646B]">
                Build custom solutions to enhance your online presence and sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Boost />

      <div className="flex flex-wrap px-4 justify-center items-center container mx-auto">
  <div className="max-w-xl">
    <h1 className="font-jostBold text-[#2E323B] text-5xl sm:text-6xl">
      Transformative Solutions for Your Business
    </h1>
    <p className="font-jostRegular text-xl py-10 text-[#61646B]">
      Our team specializes in delivering bespoke tech solutions, helping
      businesses unlock their true potential with streamlined operations
      and innovative strategies.
    </p>
    <div className="flex justify-around">
      <div className="bg-[#FCDDEC] mx-3 flex items-center text-left justify-center flex-col rounded-xl w-[170px] h-[100px]">
        <h1 className="text-[#FF3D68] font-jostBold text-6xl">50+</h1>
        <p className="text-lg font-jostRegular">Global Clients</p>
      </div>
      <div className="bg-[#FCDDEC] flex items-center text-left justify-center flex-col rounded-xl w-[170px] h-[100px]">
        <h1 className="text-[#3E3FD8] font-jostBold text-6xl">100+</h1>
        <p className="text-lg font-jostRegular">Completed Projects</p>
      </div>
    </div>
  </div>
  <div>
    <img src="Recruiter.png" loading="lazy" width="650" height="650" alt="Recruiter" />
  </div>
</div>

      <Testemonials />
      <NewsLetter />
      <Fotter />
    </div>
  );
}
