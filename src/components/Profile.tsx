import ScheduleGrid from "./ScheduleGrid";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined'){
      setIsMobile(window.innerHeight >= window.innerWidth);
    }
  }, [])

  return (
    <div className="flex-col md:flex-row flex items-center justify-center w-full h-screen md:gap-70 md:px-16">
      <CardContainer className="inter-var h-fit" containerClassName="h-screen">
        <CardBody
          className={clsx(
            "h-fit [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] hover:border-2 hover:border-primary rounded-2xl py-2",
            isMobile && "w-screen"
          )}
        >
          <div className="flex h-fit w-full gap-2 uppercase">
            <CardItem
              translateZ={25}
              className="ml-4 w-1/2 flex flex-col gap-2"
            >
              <div className="p-4 bg-primary text-black flex flex-col w-full flex-1 rounded-xl justify-center">
                <div className="text-3xl">AAYUSH SHUKLA</div>
                <div>23BEE6969</div>
                <div>SEM 5</div>
              </div>
              <div className="p-4 bg-white text-black flex flex-col w-full flex-2 rounded-xl justify-center">
                <div className="text-3xl">Free Places</div>
                <ul className="list-disc pl-5">
                  <li>Library</li>
                  <li>Hostel</li>
                  <li>Canteen</li>
                  <li>Classroom</li>
                </ul>
              </div>
            </CardItem>
            <div className="mr-4 w-1/2 flex flex-col gap-2">
              <CardItem
                translateZ={20}
                className="p-4 bg-white text-black flex flex-col w-full flex-2 rounded-xl justify-center"
              >
                <div>Lingan guli guli guli</div>
              </CardItem>
              <CardItem
                translateZ={30}
                className="p-4 bg-primary text-black flex flex-col w-full flex-1 rounded-xl justify-center"
              >
                <div className="text-xl">NEXT FREE</div>
                <div className="text-3xl">1:25 PM</div>
              </CardItem>
            </div>
          </div>
          <CardItem translateZ={60} className="mx-4 mt-2">
            <div className="text-4xl">TIME TABLE</div>
            <div className="rounded-xl text-center">
              <ScheduleGrid />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="flex flex-col -translate-y-20 md:translate-y-0">
        <h4 className="text-5xl lg:text-8xl md:px-6 pt-10 md:pt-0">
          INTUITIVE{" "}
          <span className="px-2 bg-primary text-black rounded-2xl">UI</span>
        </h4>
        <p className="text-4xl mt-4 md:mt-6 md:px-6">Just look at that!</p>
      </div>
    </div>
  );
};

export default Profile;
