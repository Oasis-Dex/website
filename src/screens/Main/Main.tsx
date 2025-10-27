import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { getAssetPath } from "../../lib/assets";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

const navItems = [
  { label: "Trade" },
  { label: "Assets" },
  { label: "Learn" },
  { label: "More", hasChevron: true },
];

export const Main = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-[linear-gradient(135deg,rgba(11,0,18,1)_0%,rgba(178,1,54,1)_12%,rgba(11,0,18,1)_33%,rgba(178,1,54,1)_47%,rgba(11,0,18,1)_63%,rgba(178,1,54,1)_88%,rgba(11,0,18,1)_100%)] w-full relative"
      data-model-id="47:23316"
    >
      <header className="sticky top-0 z-50 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] backdrop-blur-sm">
        <nav className="flex w-full max-w-[1440px] mx-auto items-center justify-between px-4 md:px-8 lg:px-[45px] py-4">
          <div className="relative w-[115px] h-[36.92px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="inline-flex flex-col items-start absolute w-[58.26%] h-[92.10%] top-0 left-[40.04%]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.51px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[28.7px] tracking-[-1.15px] leading-[33.9px] whitespace-nowrap">
                  Oasis
                </div>
              </div>
            </div>

            <div 
              className="absolute h-full top-0 left-0 w-[37px]" 
              style={{ 
                backgroundImage: `url(${getAssetPath("/assets/frame-2117937247-2.svg")})`,
                backgroundSize: '100% 100%'
              }} 
            />

            <div className="absolute top-[5px] left-[38px] w-1.5 h-1.5 rounded-[3px] border-[0.7px] border-solid border-[#dd0f4b]" />

            <img
              className="absolute top-[5px] left-10 w-1 h-[5px]"
              alt="Star"
              src={getAssetPath("/assets/star-2.svg")}
            />
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 px-[17px] py-[9px] relative flex-[0_0_auto] bg-white rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="flex flex-col max-w-[290.73px] w-1 items-start relative opacity-25">
                    <div className="flex flex-col w-1 h-1 items-center justify-center relative">
                      <img
                        className="relative w-1 h-1"
                        alt="Component"
                        src={getAssetPath("/assets/component-1.svg")}
                      />
                    </div>
                  </div>
                )}
                <button className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] rounded-xl transition-opacity hover:opacity-70">
                  <div className="flex w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap relative items-center justify-center [font-style:var(--text-font-style)]">
                    {item.label}
                  </div>
                  {item.hasChevron && <ChevronDownIcon className="w-5 h-5" />}
                </button>
              </React.Fragment>
            ))}
          </div>

          <Button className="h-[42px] gap-1 px-4 py-0 bg-[#0a0012] rounded-xl text-white hover:bg-[#0a0012]/90 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
              Get started
            </span>
          </Button>
        </nav>
      </header>

      <main className="relative w-full">
        <MainContentSection />
        <FooterSection />
      </main>

      <img
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        alt="Noise"
        src={getAssetPath("/assets/noise.svg")}
      />
    </div>
  );
};
