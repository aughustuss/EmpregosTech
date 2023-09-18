"use client";

import Image from "next/image";
import TechJobsLogo from "../../public/images/techjobs.png";

const Logo = () => {
  return <Image src={TechJobsLogo} alt="Logo" height={20} className="my-2" />;
};

export default Logo;
