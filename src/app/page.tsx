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
        <div className="text-black text-sm fixed z-[-999]">
          <p>
            VFriend is a fully offline app designed specifically for students who are tired of the constant back-and-forth of asking, "Where are you?" or "When are you free?" Instead of juggling WhatsApp groups, random Discord messages, or missed calls, VFriend offers one simple answer: the ability to instantly know when your friends are free and where they are most likely to be. Whether they're at the library, in class, grabbing food at the canteen, or back at the hostel, you'll know with a single tap. No waiting for replies, no lost time, no chaos.
          </p>

          <p>
            What makes VFriend different from other scheduling or timetable apps is its focus on privacy and offline functionality. Many modern apps demand cloud accounts, internet connectivity, or third-party logins. VFriend does the opposite. It keeps everything local to your device. Your timetable, your name, your registration number, and your favorite campus hangout spots stay private. Nothing leaves your phone unless you deliberately share it with a friend. No internet, no servers, no unnecessary data collection. It's built for students who want convenience without compromise.
          </p>

          <p>
            Setting up VFriend is quick and painless. All you need is your official timetable from your university portal. Upload the HTML file, and the app instantly processes your schedule into a clean, intuitive interface. From there, you can link with friends locally. The app then cross-references your timetables to reveal who's free right now and who will be free next. Planning becomes effortless. Instead of wasting time coordinating across multiple chats, you and your friends can focus on actually meeting, studying, or hanging out.
          </p>

          <p>
            This simplicity is by design. VFriend was born out of real frustration. As a student, I often found myself digging through endless chat histories to find old timetable screenshots that friends had sent months ago. Every time I wanted to plan something, I'd repeat the cycle, scrolling, searching, messaging, waiting. It was inefficient and, honestly, kind of ridiculous. I knew there had to be a better way. So what started as a small script to organize timetables evolved into a fully-fledged app with an intuitive UI and a focus on what students really need.
          </p>

          <p>
            VFriend is lightweight and efficient. Because it doesn't depend on the internet or bulky background processes, it runs smoothly on almost any phone without draining your battery. The interface is deliberately clean and minimal, designed so that students can glance at their screen and get the information they need instantly. No unnecessary clutter, no confusing navigation. Just clarity and speed.
          </p>

          <p>
            Another key benefit of VFriend is how it helps students reclaim their time. Campus life can be hectic, classes, labs, projects, and exams often leave little room for coordination. With VFriend, instead of spending fifteen minutes figuring out when everyone is free, you can know in seconds. That extra time can go into something meaningful: focusing on assignments, meeting new people, or just relaxing. The app essentially eliminates the small but constant friction of campus coordination.
          </p>

          <p>
            Privacy is not just an add-on, it's the foundation of VFriend. In an age where almost every app wants to track you, collect your data, or connect to external servers, VFriend takes the opposite approach. It doesn't need internet access. It doesn't track your location. It doesn't sync with any external service. Your data is yours, and it stays on your device. This makes the app secure by default, but it also builds trust among friends. When you share your timetable through VFriend, you know exactly what you're sharing and nothing more.
          </p>

          <p>
            The app is also versatile. Students use it in different ways. Some use it primarily to find study partners before exams. Others rely on it for planning quick lunch breaks or evening hangouts. For those deeply involved in clubs or societies, it becomes a handy tool to quickly coordinate group meetings. No matter the use case, the principle remains the same: reduce unnecessary communication overhead and make coordination seamless.
          </p>

          <p>
            VFriend is not just a utility, it's a reflection of student life and the challenges of staying connected without losing time. It transforms the ordinary hassle of timetable management into an opportunity to connect more easily and more often. And because it's offline, it respects both your privacy and your independence. You control your schedule, and you decide how and when to share it.
          </p>

          <p>
            Ultimately, VFriend is about more than just timetables. It's about making student life smoother, less stressful, and more enjoyable. It's about helping you spend less time planning and more time living. Whether you're a freshman adjusting to the chaos of campus schedules or a senior trying to balance projects, internships, and social life, VFriend is a small but powerful tool to help you make the most of your time.
          </p>

          <p>
            Experience campus coordination like never before. With VFriend, you don't have to chase down friends, spam messages, or scroll endlessly through chat logs. You get instant clarity with a single tap, all while keeping your privacy intact. Fast, secure, offline, and designed with students in mind, that's the promise of VFriend.
          </p>
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
