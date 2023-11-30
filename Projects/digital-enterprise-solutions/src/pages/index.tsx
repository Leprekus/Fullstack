import { getCookie, getCookies, setCookie } from "cookies-next";
import { useScroll, useTransform, motion } from "framer-motion";
import { type NextPage } from "next";
import dynamic from "next/dynamic";
import LandingSection from "~/components/sections/LandingSection";
import { ArrowLeft, ArrowRight } from "~/components/icons";
import MainLayout from "~/components/layouts/main-layout";
import SectionLayout from "~/components/layouts/section-layout";
import Button from "~/components/ui/Button";
import Player from "~/components/ui/Player";
import Reviews from "~/components/ui/Reviews";
import useSpotify from "~/hooks/useSpotify";
import DesignSection from "~/components/sections/design-section";
import DigitalTransformation from "~/components/sections/digital-transformation";
import CapabilitiesSection from "~/components/sections/capabilities-section";
import BusinessSolutionsSection from "~/components/sections/business-solutions-section";
import Link from "next/link";
import { useRef } from "react";

//import { api } from "~/utils/api";
const Home: NextPage = () => {

  const Card = dynamic(() => import("~/components/ui/Card"))

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const constraintsRef = useRef(null)
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col md:flex-row overflow-hidden p-10">

        {/* left side container */}
        <motion.div className="inline-flex flex-col gap-4 md:w-1/2 md:h-3/4 max-h-full overflow-y-hidden">

          <LandingSection/>

          {/* <DesignSection/>
          <CapabilitiesSection/>
          <DigitalTransformation/>
          <BusinessSolutionsSection/> */}

        </motion.div>

        {/* right side container */}
        <div className="inline-flex md:w-1/2 items-end justify-center">
          <div className="text-white  bg-slate-950 rounded-bl-md p-2 w-96 h-96">
            <div className="h-3/4 w-full flex justify-center md:justify-start flex-wrap gap-2">
            <a href='#design-section'><Card/></a>
            <Player/>
            <Reviews/>
              <motion.div
              ref={constraintsRef}
              className="w-32 h-32 border border-slate-800 rouned-md overflow-hidden">
                <motion.div
                    drag
                    className="w-10 h-10 bg-white rounded-lg"
                    dragConstraints={constraintsRef}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%"
                    }}
                  />
              </motion.div>
            </div>
                    </div>
          </div>

      </div>

    </MainLayout>
  );
};

// insert lots of visual elements to showcase:
//           * api integration
//           <Card/>
//           <Player/>
//           <Reviews/>
//           * custom app development
//           * web development
//           * reviews
export default Home;
