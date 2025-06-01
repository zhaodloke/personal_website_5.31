import { LinkedinIcon, MailIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-[#001c1a] flex justify-center w-full min-h-screen">
      <div className="bg-[#001c1a] w-full max-w-[1440px] relative px-4 sm:px-7 flex flex-col justify-center min-h-screen">
        {/* Bio section */}
        <section className="max-w-[940px] mt-10 sm:mt-20">
          <Card className="border-none bg-transparent">
            <CardContent className="p-0">
              <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white text-[20px] sm:text-[28px] leading-normal">
                I build technically complex products and scale them globally.
                <br />
                <br />
                Raised in Singapore and educated in the UK, I&apos;ve spent the
                past decade launching and expanding new technologies across
                Southeast Asia — from re-architecting the region&apos;s air
                traffic management systems to building Sea Group&apos;s fintech
                business in the Philippines. I am currently based in San
                Francisco where I help Tesla bring next-generation energy
                products to market.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer section */}
        <footer className="mt-[40px] sm:mt-[60px] w-full">
          <Separator className="w-full h-px bg-white" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3.5">
            <h1 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-white text-[64px] sm:text-[138px] leading-tight sm:leading-normal pl-0">
              ZHAODONG
            </h1>

            <div className="flex items-center gap-[20px] sm:gap-[34px] p-2.5 mt-4 sm:mt-0">
              <div className="relative w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-full bg-transparent border-[3px] border-white">
                <MailIcon className="w-[28px] h-[28px] sm:w-[37px] sm:h-[37px] text-white" />
              </div>

              <div className="relative w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-full bg-transparent border-[3px] border-white">
                <LinkedinIcon className="w-[28px] h-[28px] sm:w-[37px] sm:h-[37px] text-white" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};