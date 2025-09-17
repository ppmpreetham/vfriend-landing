import Image from "next/image";
import PixelChanger from "../PixelChanger";

const Chat = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-4 md:gap-10">
      <img
        src="/public/svg/clickme.svg"
        alt="Click me to chat right now!"
        className="absolute z-10 scale-50 rotate-6 -translate-y-[150%] translate-x-1/3 md:translate-x-0"
      />
      <PixelChanger
        firstContent={
          <Image
            width={400}
            height={400}
            src="/whatsapp_chat.png"
            alt="Aayush Shukla's Chat demonstrating the use of VFriend App. Someone asking him about the VFriend app"
          />
        }
        secondContent={
          <img src="/whatsapp_after.jpg" alt="Aayush Shukla's Vfriend Timetable." />
        }
        aspectRatio="206%"
        className="cursor-pointer"
        pixelColor="#ebff57"
        gridSize={24}
        animationStepDuration={0.4}
      />
      <div className="text-4xl lg:text-7xl text-center">
        No more busy texting
      </div>
    </div>
  );
};

export default Chat;
