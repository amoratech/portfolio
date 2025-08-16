import { AppShell, AppShellHeader, Text } from "@mantine/core";
import Image from "next/image";
import HeaderMain from "./components/header/HeaderMain";

export default function Home() {
  return (
    <>
      <div className="grid w-[80vw] h-[40vh] ml-auto mr-auto grid-cols-12  mt-[96px] grid-rows-8 auto-rows-auto">
        <div className="col-start-2 row-start-1 col-span-4 row-span-2">
          <Text size="48px" className="tracking-[4px]">
            Building
          </Text>
        </div>
        <div className="col-start-2 row-start-3 col-span-4 row-span-2">
          <Text size="48px" className="tracking-[4px]">
            Beautiful
          </Text>
        </div>
        <div className="col-start-2 row-start-5 col-span-4 row-span-2">
          <Text size="48px" className="tracking-[4px]">
            Scalable
          </Text>
        </div>
        <div className="col-start-2 row-start-7 col-span-4 row-span-2">
          <Text size="48px" className="tracking-[4px]">
            Solutions
          </Text>
        </div>
        <div className="col-start- col-span-6 row-span-8">
          <p className="text-[32px] leading-[40px]">
            Hey, I’m Anthony—a system administrator with a passion for
            scripting, web development, IoT, and cloud technologies. When I’m
            not managing systems, I’m busy creating engaging, memorable
            experiences through innovative coding projects and intuitive digital
            solutions!
          </p>
        </div>
      </div>
    </>
  );
}
