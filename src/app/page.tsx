'use client'
import MagneticButton from "../components/MagneticButton";
import Navbar from "../components/Navbar";
import HeroElements from "../components/HeroElements";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScheduleList from "../components/mainpage/ScheduleList";
import FlowingMenu from "../components/FlowMenu";
import ScrollDown from "../components/ScrollDown";
import RotatingSquares from "../components/mainpage/RotatingSquares";
import Chat from "../components/mainpage/Chat";
import Footer from "../components/mainpage/DownloadApp";
import CustomCursor from "../components/CustomCursor";
import Profile from "../components/Profile";
import CubePage from "../components/mainpage/CubePage";
import ReadMore from "@/components/ReadMore";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function App() {
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerHeight <= window.innerWidth);
    
    const handleResize = () => {
      setIsDesktop(window.innerHeight <= window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (!isDesktop) {
      ScrollTrigger.normalizeScroll(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);
  useGSAP(
    () => {
      if (!main.current) return;
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        ignoreMobileResize: true,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      setTimeline(timeline);
    },
    { scope: main }
  );

  return (
    <div
      id="smooth-wrapper"
      className="cursor-auto md:cursor-none overflow-x-hidden scrollbar-hide"
      ref={main}
    >
      {isDesktop && <CustomCursor />}
      <Navbar />
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white scrollbar-hide"
        data-speed={1}
        data-lag={0.4}
      >
        <ScrollDown />
      </div>
      <div id="smooth-content">
        <div className="min-h-screen w-full font-space text-white flex flex-col items-center justify-center p-4 overflow-x-hidden">
          <HeroElements />
          <div className="flex flex-col md:flex-row items-center max-w-5xl gap-8 md:gap-12 w-full justify-center">
            <div className="flex flex-col items-center text-center gap-4 md:gap-6 md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
                <span className="font-against">VF</span>
                riend
              </h2>
              <p className="text-lg md:text-xl">
                A Fully Offline app that helps you find which of your{" "}
                <span className="bg-primary rounded-xl text-black px-2">
                  friends
                </span>{" "}
                are free at any given point of time
              </p>
              <a
                href="https://github.com/ppmpreetham/vfriend/releases/download/v0.5.3/app-universal-release.apk"
                className="cursor-pointer z-10"
              >
                <MagneticButton className="text-black bg-primary py-2.5 md:py-3 px-5 md:px-6 rounded-xl text-base md:text-lg font-medium mt-2">
                  Download VFriend
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
        {timeline && <ScheduleList timeline={timeline} />}
        <RotatingSquares />
        <Profile />
        <Chat />
        <div className="text-black text-sm">
          VFriend is a fully offline app designed specifically for students who are tired of the constant back-and-forth of asking, "Where are you?" or "When are you free?" With VFriend, you no longer need to rely on endless group chats, phone calls, or waiting for replies to coordinate plans with your friends. Instead, the app leverages your class timetable and your friend's schedules to show real-time availability, so you can instantly see who is free at any given moment.
          What sets VFriend apart is its commitment to privacy and offline functionality. All your data stays on your device, there's no cloud storage, no external servers, and no need for an internet connection. This means your schedule and your friend's information remain private and secure, accessible only to you and those you choose to share with.
          VFriend is lightweight, fast, and easy to use. Simply add your timetable, connect with friends locally, and let the app handle the rest. Whether you want to organize a quick study session, grab lunch, or just hang out, VFriend makes it effortless to find the perfect time without the hassle.
          Experience a new way to stay connected and make the most of your campus life, without sacrificing your privacy or relying on constant connectivity. VFriend is your smart, simple, and secure companion for student life.
        </div>

        <CubePage isDesktop={isDesktop} />
        <FlowingMenu
          items={[
            {
              link: "/about",
              text: "About",
              image:
                "https://media.istockphoto.com/id/1201699594/vector/information-icon.jpg?s=612x612&w=0&k=20&c=0Nh1zH8uhuqp84FhC8RkJtopaq5Ni2zplAtq1q8o4zM=",
            },

            {
              link: "/privacy",
              text: "Privacy",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Ihx53jvI-Lgsa_RwlXpr7Ry-xR8e_Eb4RA&s",
            },

            {
              link: "/tutorial",
              text: "Tutorial",
              image:
                "https://www.freeiconspng.com/thumbs/question-mark-icon/black-question-mark-icon-clip-art-10.png",
            },

            {
              link: "/more",
              text: "More Apps",
              image: "https://cdn-icons-png.flaticon.com/512/3357/3357272.png",
            },
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}
