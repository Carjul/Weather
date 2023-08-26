import { SignIn } from "@clerk/nextjs";
import IMG from "../../../../public/log.jpg";
import Image from "next/image";

export default function Page() {
  return (<div className="flex flex-col items-center justify-center mt-20">
  <Image src={IMG} alt="logo"  priority={true} fill placeholder={"blur"}/>
  <SignIn />;
  
</div>)
}