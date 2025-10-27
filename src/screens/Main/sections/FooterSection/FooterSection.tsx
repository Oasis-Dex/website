import { MessageCircleIcon, SendIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

const footerColumns = [
  {
    title: "Platform",
    links: ["Trade", "Assets", "Earn", "Staking", "Pools", "Apps"],
  },
  {
    title: "Token",
    links: ["OSMO", "CoinMarketCap", "CoinGecko", "Governance", "Vote"],
  },
  {
    title: "Community",
    links: ["X (TwitterIcon)", "Telegram", "Discord", "Forum"],
  },
  {
    title: "Developers",
    links: ["Docs", "GitHub", "Grants"],
  },
  {
    title: "Team",
    links: ["Contact", "Blog", "Careers"],
  },
];

const socialIcons = [
  { icon: TwitterIcon, label: "Twitter" },
  { icon: MessageCircleIcon, label: "Discord" },
  { icon: SendIcon, label: "Telegram" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent">
      <div className="flex w-full items-center gap-2.5 px-0 py-6">
        <Separator className="flex-1 bg-white" />
        <div className="flex flex-col w-[21px] items-center justify-center">
          <img
            className="w-[21px] h-[21px]"
            alt="Component"
            src="/assets/component-1-4.svg"
          />
        </div>
        <Separator className="flex-1 bg-white" />
      </div>

      <div className="flex w-full items-center justify-center gap-8 lg:gap-20 py-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1020px] w-full gap-8 lg:gap-20">
          {footerColumns.map((column, index) => (
            <nav
              key={index}
              className="flex flex-col w-full items-start gap-2.5"
            >
              <h3 className="font-description font-[number:var(--description-font-weight)] text-[#ffffff80] text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                {column.title}
              </h3>
              <ul className="flex flex-col items-start gap-2 w-full">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)] hover:text-white/80 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <img
        className="absolute top-[100px] right-0 w-[190px] h-[173px] object-cover"
        alt="Ion"
        src="/assets/ion-1.png"
      />

      <div className="flex w-full items-center gap-2.5 px-0 py-6">
        <Separator className="flex-1 bg-white" />
        <div className="flex flex-col w-[21px] items-center justify-center">
          <img
            className="w-[21px] h-[21px]"
            alt="Component"
            src="/assets/component-1-4.svg"
          />
        </div>
        <Separator className="flex-1 bg-white" />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between px-4 py-6 gap-4">
        <div className="inline-flex items-center gap-8">
          <div className="inline-flex items-center gap-1">
            <div className="relative w-[115px] h-[36.92px]">
              <div className="inline-flex flex-col items-start absolute w-[58.26%] h-[92.10%] top-0 left-[40.04%]">
                <div className="inline-flex items-center">
                  <span className="flex items-center justify-center w-fit mt-[-1.51px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[28.7px] tracking-[-1.15px] leading-[33.9px] whitespace-nowrap">
                    Oasis
                  </span>
                </div>
              </div>

              <div className="absolute h-full top-0 left-0 w-[37px] bg-[url(/assets/frame-2117937247-1.svg)] bg-[100%_100%]" />

              <div className="absolute top-[5px] left-[38px] w-1.5 h-1.5 rounded-[3px] border-[0.7px] border-solid border-[#dd0f4b]" />

              <img
                className="absolute top-[5px] left-10 w-1 h-[5px]"
                alt="Star"
                src="/assets/star-2.svg"
              />
            </div>

            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex flex-col items-center justify-center p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="inline-flex flex-col items-start">
          <p className="flex items-center justify-center w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-[#ffffff80] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
            © Oasis 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
