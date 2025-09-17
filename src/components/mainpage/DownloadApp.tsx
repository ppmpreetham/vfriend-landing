import v from "/public/svg/letter v.svg";
import f from "/public/svg/letter f.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <Image src={v} alt="Letter V of VFriend logo" className="w-full h-auto object-contain" />
      <Image src={f} alt="Letter F of VFriend logo" className="w-full h-auto object-contain" />
    </div>
  );
};

export default Footer;
