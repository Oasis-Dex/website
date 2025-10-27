import {
  ArrowUpRightIcon,
  BarChart3Icon,
  BookOpenIcon,
  ChevronDownIcon,
  FileTextIcon,
  GithubIcon,
  HelpCircleIcon,
  MessageSquareIcon,
  PiggyBankIcon,
  RocketIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { getAssetPath } from "../../../../lib/assets";

const topVolumeData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$106,476.801",
    change: "4.41%",
    icon: getAssetPath("/assets/image-btc.svg"),
    isNegative: true,
  },
  {
    name: "Cosmos Hub",
    symbol: "ATOM",
    price: "$3.104",
    change: "7.44%",
    icon: getAssetPath("/assets/image-atom.svg"),
    isNegative: true,
  },
  {
    name: "Oaisis",
    symbol: "OASIS",
    price: "$0.12",
    change: "6.7%",
    icon: getAssetPath("/assets/vector-1.svg"),
    isNegative: true,
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$2.261",
    change: "6.29%",
    icon: getAssetPath("/assets/image-xrp-.svg"),
    isNegative: true,
  },
];

const newTokensData = [
  {
    name: "Photon",
    symbol: "PHOTON",
    price: "$0.264",
    change: "11.18%",
    icon: getAssetPath("/assets/image-photon.svg"),
    isNegative: true,
  },
  {
    name: "Juris Protocol",
    symbol: "JURIS",
    price: "$3.104",
    change: "7.44%",
    icon: getAssetPath("/assets/image-juris.svg"),
    isNegative: true,
  },
  {
    name: "Paxos Gold (Eureka)",
    symbol: "PAXG.atom",
    price: null,
    change: null,
    icon: getAssetPath("/assets/image-paxg.svg"),
    isNegative: false,
  },
  {
    name: "Pryzm",
    symbol: "Pryzm",
    price: "$0.002",
    change: "44.59%",
    icon: getAssetPath("/assets/image-pryzm-.svg"),
    isNegative: true,
  },
];

const upcomingTokensData = [
  {
    year: "2025",
    name: "Manifest",
    symbol: "MFX",
    icon: getAssetPath("/assets/image-mfx-.svg"),
  },
  {
    year: "2025",
    name: "Sunrise RISE",
    symbol: "RISE",
    icon: getAssetPath("/assets/image-pryzm-.svg"),
  },
];

const tokenGridData = [
  {
    top: "top-96",
    left: "left-0",
    icon: getAssetPath("/assets/image-24.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[266px]",
    left: "left-[22px]",
    icon: getAssetPath("/assets/image-20.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[164px]",
    left: "left-[63px]",
    icon: getAssetPath("/assets/image-16.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[71px]",
    left: "left-[156px]",
    icon: getAssetPath("/assets/image-12.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-4",
    left: "left-[259px]",
    icon: getAssetPath("/assets/image-07.svg"),
    change: "0%",
    isPositive: true,
  },
  {
    top: "top-0",
    left: "left-[379px]",
    icon: getAssetPath("/assets/image-08.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-4",
    left: "left-[500px]",
    icon: getAssetPath("/assets/image-09.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[71px]",
    left: "left-[602px]",
    icon: getAssetPath("/assets/image-13.svg"),
    change: "0%",
    isPositive: true,
  },
  {
    top: "top-[164px]",
    left: "left-[686px]",
    icon: getAssetPath("/assets/image-18.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[266px]",
    left: "left-[740px]",
    icon: getAssetPath("/assets/image-22.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-96",
    left: "left-[760px]",
    icon: getAssetPath("/assets/image-26.svg"),
    change: "0%",
    isPositive: false,
  },
];

const tokenGridDataSecondary = [
  {
    top: "top-[580px]",
    left: "left-0",
    icon: getAssetPath("/assets/image-28.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[450px]",
    left: "left-2.5",
    icon: getAssetPath("/assets/image-23.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[335px]",
    left: "left-[49px]",
    icon: getAssetPath("/assets/image-15.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[222px]",
    left: "left-[108px]",
    icon: getAssetPath("/assets/image-11.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[131px]",
    left: "left-[187px]",
    icon: getAssetPath("/assets/image-06.svg"),
    change: "0%",
    isPositive: true,
  },
  {
    top: "top-[63px]",
    left: "left-[284px]",
    icon: getAssetPath("/assets/image-01.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[19px]",
    left: "left-[388px]",
    icon: getAssetPath("/assets/image-02.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-0",
    left: "left-[499px]",
    icon: getAssetPath("/assets/image-03.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[19px]",
    left: "left-[611px]",
    icon: getAssetPath("/assets/image-04.svg"),
    change: "0%",
    isPositive: false,
    opacity: "opacity-40",
  },
  {
    top: "top-[63px]",
    left: "left-[717px]",
    icon: getAssetPath("/assets/image-05.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[131px]",
    left: "left-[811px]",
    icon: getAssetPath("/assets/image-10.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[222px]",
    left: "left-[891px]",
    icon: getAssetPath("/assets/image-14.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[335px]",
    left: "left-[947px]",
    icon: getAssetPath("/assets/image-19.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[450px]",
    left: "left-[986px]",
    icon: getAssetPath("/assets/image-27.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[580px]",
    left: "left-[995px]",
    icon: getAssetPath("/assets/image-29.svg"),
    change: "0%",
    isPositive: false,
  },
];

const tokenGridDataCenter = [
  {
    top: "top-[218px]",
    left: "left-0",
    icon: getAssetPath("/assets/image-xrp-.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[108px]",
    left: "left-8",
    icon: getAssetPath("/assets/image-tia.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[30px]",
    left: "left-[124px]",
    icon: getAssetPath("/assets/image-17.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-0",
    left: "left-[249px]",
    icon: getAssetPath("/assets/image-btc.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[30px]",
    left: "left-[374px]",
    icon: getAssetPath("/assets/image-30.svg"),
    change: "0%",
    isPositive: true,
  },
  {
    top: "top-[108px]",
    left: "left-[466px]",
    icon: getAssetPath("/assets/image-21.svg"),
    change: "0%",
    isPositive: false,
  },
  {
    top: "top-[218px]",
    left: "left-[499px]",
    icon: getAssetPath("/assets/image-25.svg"),
    change: "0%",
    isPositive: false,
  },
];

const statsData = [
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "All Time Volume",
    value: "$42,712,947,434",
    image: getAssetPath("/assets/image-small-glass.svg"),
  },
  {
    icon: <TrendingUpIcon className="w-6 h-6" />,
    title: "Assets on the Platform",
    value: "$258,426,293",
    image: getAssetPath("/assets/group-1216373318.png"),
  },
  {
    icon: <BarChart3Icon className="w-6 h-6" />,
    title: "24h trading volume",
    value: "$13,242,623",
    image: getAssetPath("/assets/group-1216373319.png"),
  },
];

const defiFeatures = [
  {
    icon: getAssetPath("/assets/icons-24-drop.svg"),
    badge: "100+ Chains",
    title: "Liquidity Pools",
    description:
      "Capital efficient pools with granular control, low-\nslippage, and over $72M supply side revenue for\nliquidity providers.",
    image: getAssetPath("/assets/image.png"),
    imageClass: "absolute top-[42px] left-[169px] w-[261px] h-[261px]",
  },
  {
    icon: getAssetPath("/assets/icons-24-infinity.svg"),
    badge: "Powered by Levana",
    title: "Perpetuals",
    description: "Trade at up to 30x leverage or earn by providing\nliquidity.",
    image: getAssetPath("/assets/image-1.png"),
    imageClass: "relative top-[-53px] left-[133px] w-[266px] h-[244px]",
  },
  {
    icon: getAssetPath("/assets/icons-24-press.svg"),
    badge: "Powered by Mars",
    title: "Margin Trading",
    description:
      "Lend and borrow assets on the largest lending and\nmargin trading platform in Cosmos.",
    image: getAssetPath("/assets/image-2.png"),
    imageClass: "absolute -top-7 left-[202px] w-[197px] h-[197px]",
  },
];

const connectCards = [
  {
    icon: <HelpCircleIcon className="w-6 h-6" />,
    title: "Support",
    description:
      "New to it all? Need help? Our support team is\navailable 24/7.",
    image: getAssetPath("/assets/group-1216373307-4.png"),
  },
  {
    icon: <FileTextIcon className="w-6 h-6" />,
    title: "Blog",
    description:
      "Catch up on the latest developments and\nexplore our lively community.",
    image: getAssetPath("/assets/group-1216373307-3.png"),
  },
];

const socialCards = [
  {
    icon: getAssetPath("/assets/icons-24-x-twitter--icon.svg"),
    title: "X(Twitter)",
    handle: "@Oasiszone",
  },
  {
    icon: getAssetPath("/assets/icons-24-telegram-icon.svg"),
    title: "Telegram",
    handle: "Oasis_chat",
  },
  {
    icon: getAssetPath("/assets/icons-24-forum-icon.svg"),
    title: "Forum",
    handle: "forum.Oasis.zone",
  },
];

const developerCards = [
  {
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Developers Docs",
    description: "Roll up your sleeves and start building.",
    image: getAssetPath("/assets/group-33936-1.png"),
  },
  {
    icon: <PiggyBankIcon className="w-6 h-6" />,
    title: "Grants",
    description: "Get funding to build something.",
    image: getAssetPath("/assets/grants-illustration.png"),
  },
  {
    icon: <GithubIcon className="w-6 h-6" />,
    title: "Github",
    description: "Oasis is open-source and audited.",
    image: getAssetPath("/assets/github-illustration.png"),
  },
  {
    icon: <MessageSquareIcon className="w-6 h-6" />,
    title: "Discord",
    description: "Chat with fellow developers and validators.",
    image: getAssetPath("/assets/image-1-1.png"),
  },
];

const heroTokens = [
  {
    icon: getAssetPath("/assets/component-2.svg"),
    symbol: "TIA",
  },
  {
    icon: getAssetPath("/assets/image-btc.svg"),
    symbol: "BTC",
  },
  {
    icon: getAssetPath("/assets/image-atom.svg"),
    symbol: "ATOM",
  },
  {
    icon: getAssetPath("/assets/image-34.png"),
    symbol: "OASIS",
  },
];

export const MainContentSection = (): JSX.Element => {
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTokenIndex((prev) => (prev + 1) % heroTokens.length);
    }, 2500); // Change token every 2.5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex flex-col items-center gap-32 w-full max-w-[1440px] mx-auto px-4 py-0 relative">
      {/* Hero Section */}
      <div className="relative w-full rounded-[48px] overflow-hidden border-[3px] border-solid border-[#ffffff33] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="w-full min-h-[539px] flex bg-[linear-gradient(145deg,rgba(11,0,18,1)_0%,rgba(250,93,137,0)_51%,rgba(143,4,49,1)_100%),url(/assets/main-block.png)_50%_50%_/_cover]">
          <div className="flex flex-col lg:flex-row mt-8 w-full min-h-[475px] px-4 lg:px-11 py-8 relative items-center justify-between gap-8">
            <div className="flex flex-col max-w-[477px] items-start gap-[58px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex flex-col max-w-[451px] items-start gap-1 relative">
                <h1 className="font-title-72 font-[number:var(--title-72-font-weight)] text-white text-[length:var(--title-72-font-size)] tracking-[var(--title-72-letter-spacing)] leading-[var(--title-72-line-height)] [font-style:var(--title-72-font-style)]">
                  Discover and
                </h1>

                <div className="inline-flex items-center gap-[22px]">
                  <span className="font-title-72 font-[number:var(--title-72-font-weight)] text-white text-[length:var(--title-72-font-size)] tracking-[var(--title-72-letter-spacing)] leading-[var(--title-72-line-height)] whitespace-nowrap [font-style:var(--title-72-font-style)]">
                    trade
                  </span>

                  <div className="inline-flex items-center gap-1">
                    <div className="flex flex-col w-3 h-[90px] items-center justify-center px-0 py-px">
                      <div className="relative w-3 h-[88px]">
                        <img
                          className="absolute w-[66.67%] h-[95.45%] top-[2.27%] left-[16.67%]"
                          alt="Vector"
                          src={getAssetPath("/assets/vector-14.svg")}
                        />
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-3 relative">
                      {heroTokens.map((token, index) => (
                        <div
                          key={index}
                          className={`absolute inline-flex items-center gap-3 transition-all duration-500 ${
                            index === currentTokenIndex
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4 pointer-events-none"
                          }`}
                          style={{
                            position: index === currentTokenIndex ? "relative" : "absolute",
                          }}
                        >
                          <img
                            className="w-[70px] h-[70px] flex-shrink-0"
                            alt={token.symbol}
                            src={token.icon}
                          />

                          <span className="font-title-72 font-[number:var(--title-72-font-weight)] text-white text-[length:var(--title-72-font-size)] tracking-[var(--title-72-letter-spacing)] leading-[var(--title-72-line-height)] whitespace-nowrap [font-style:var(--title-72-font-style)]">
                            {token.symbol}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="relative w-3 h-[88px] rotate-180">
                      <img
                        className="absolute w-[66.67%] h-[95.45%] top-[2.27%] left-[16.67%] -rotate-180"
                        alt="Vector"
                        src={getAssetPath("/assets/vector-16.svg")}
                      />
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-[13px]">
                  <span className="font-title-72 font-[number:var(--title-72-font-weight)] text-[length:var(--title-72-font-size)] tracking-[var(--title-72-letter-spacing)] leading-[var(--title-72-line-height)] text-white whitespace-nowrap [font-style:var(--title-72-font-style)]">
                    on
                  </span>

                  <div className="relative w-[70px] h-[70px] overflow-hidden">
                    <div className="relative top-[-5px] left-[-9px] w-[79px] flex">
                      <img
                        className="w-[79px] h-[79px]"
                        alt="Image"
                        src={getAssetPath("/assets/image-34.png")}
                      />
                    </div>
                  </div>

                  <span className="font-title-72 font-[number:var(--title-72-font-weight)] text-[length:var(--title-72-font-size)] tracking-[var(--title-72-letter-spacing)] leading-[var(--title-72-line-height)] text-white whitespace-nowrap [font-style:var(--title-72-font-style)]">
                    Oasis.
                  </span>
                </div>
              </div>

              <p className="text-white font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                The premier decentralized crypto exchange. Powered by Jae Kwon.
              </p>
            </div>

            <Card className="w-full max-w-[512px] p-4 bg-[#f61051] rounded-[32px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <CardContent className="flex flex-col items-start gap-10 p-3.5 bg-[#b20136] rounded-3xl">
                <div className="flex flex-col items-start gap-[3px] relative w-full">
                  <div className="flex h-[120px] items-center justify-between p-4 w-full bg-[#f61051] rounded-xl">
                    <div className="inline-flex items-center gap-2">
                      <img
                        className="w-12 h-12"
                        alt="Image USD"
                        src={getAssetPath("/assets/image-usd-.svg")}
                      />

                      <div className="inline-flex flex-col items-start">
                        <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)]">
                          USDC
                        </span>

                        <span className="font-description font-[number:var(--description-font-weight)] text-[#ffffff80] text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                          USD Coin
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-start">
                      <span className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] text-right tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] whitespace-nowrap [font-style:var(--subtitle-font-style)]">
                        1000
                      </span>

                      <div className="flex items-start justify-end px-0 py-[0.5px] w-full">
                        <span className="font-description font-[number:var(--description-font-weight)] text-[#ffffff80] text-[length:var(--description-font-size)] text-right tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                          ≈ $1000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex h-[120px] items-center justify-between p-4 w-full bg-[#f61051] rounded-xl">
                    <div className="inline-flex items-center gap-2">
                      <img
                        className="w-12 h-12"
                        alt="Image TIA"
                        src={getAssetPath("/assets/image-tia-1.svg")}
                      />

                      <div className="inline-flex flex-col items-start">
                        <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)]">
                          Celestia
                        </span>

                        <span className="font-description font-[number:var(--description-font-weight)] text-[#ffffff80] text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                          TIA
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-end gap-1">
                      <div className="w-24 h-3 bg-[#ffffff33] rounded-2xl" />
                      <div className="w-14 h-3 bg-[#ffffff33] rounded-2xl" />
                    </div>
                  </div>

                  <div className="flex w-[46px] h-[46px] items-center justify-center absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)]">
                    <div className="flex flex-col w-[46px] h-[46px] items-center justify-center relative">
                      <div className="w-[46px] h-[46px] bg-[#b20136] rounded-[100px] overflow-hidden border-[3px] border-solid flex items-center justify-center">
                        <img
                          className="w-6 h-6"
                          alt="Icons arrow down"
                          src={getAssetPath("/assets/icons-24-arrow-down.svg")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="w-[150px] h-3 bg-[#ffffff33] rounded-2xl" />
                  <div className="w-[90px] h-3 bg-[#ffffff33] rounded-2xl" />
                </div>

                <Button className="flex h-16 gap-1 px-6 py-0 w-full bg-[#0a0012] rounded-xl items-center justify-center hover:bg-[#0a0012]/90 transition-colors">
                  <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)]">
                    Start Trading
                  </span>

                  <img
                    className="w-6 h-6"
                    alt="Icons arrow right"
                    src={getAssetPath("/assets/icons-24-arrow-right-up.svg")}
                  />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Three Column Cards Section */}
      <div className="flex flex-col lg:flex-row items-start gap-[26px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        {/* Top Volume */}
        <div className="flex flex-col w-full lg:w-[448px] min-h-[440px] items-start gap-2">
          <div className="flex items-start gap-2 px-0 py-3 w-full">
            <BarChart3Icon className="w-6 h-6 text-white" />
            <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
              Top Volume
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            {topVolumeData.map((token, index) => (
              <Card
                key={index}
                className="justify-between flex w-full lg:w-[448px] min-h-[90px] items-center px-4 py-[17.5px] bg-white rounded-xl border-0 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="inline-flex items-center gap-3 p-0">
                  <img
                    className="w-12 h-12"
                    alt={`Image ${token.symbol}`}
                    src={token.icon}
                  />

                  <div className="inline-flex flex-col items-start gap-1">
                    <span className="text-[#0a0012] text-[length:var(--text-font-size)] font-text font-[number:var(--text-font-weight)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                      {token.name}
                    </span>

                    <span className="text-[#9f6a79] text-[length:var(--description-font-size)] font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                      {token.symbol}
                    </span>
                  </div>
                </CardContent>

                <div className="inline-flex flex-col items-end justify-center gap-1.5">
                  <span className="text-[#0a0012] text-[length:var(--text-font-size)] font-text font-[number:var(--text-font-weight)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                    {token.price}
                  </span>

                  <div className="inline-flex items-center">
                    <ChevronDownIcon className="w-5 h-5 text-[#ea4571]" />
                    <span className="text-[#ea4571] text-[length:var(--description-font-size)] font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                      {token.change}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* New */}
        <div className="flex flex-col w-full lg:w-[448px] min-h-[440px] items-start gap-2">
          <div className="flex items-start gap-2 px-0 py-3 w-full">
            <RocketIcon className="w-6 h-6 text-white" />
            <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
              New
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            {newTokensData.map((token, index) => (
              <Card
                key={index}
                className={`${token.price ? "justify-between" : ""} flex w-full lg:w-[448px] min-h-[90px] items-center px-4 py-[17.5px] bg-white rounded-xl border-0 hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <CardContent className="inline-flex items-center gap-3 p-0">
                  <img
                    className="w-12 h-12"
                    alt={`Image ${token.symbol}`}
                    src={token.icon}
                  />

                  <div className="inline-flex flex-col items-start gap-1">
                    <span className="text-[#0a0012] text-[length:var(--text-font-size)] font-text font-[number:var(--text-font-weight)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                      {token.name}
                    </span>

                    <span className="text-[#9f6a79] text-[length:var(--description-font-size)] font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                      {token.symbol}
                    </span>
                  </div>
                </CardContent>

                {token.price && (
                  <div className="inline-flex flex-col items-end justify-center gap-1.5">
                    <span className="text-[#0a0012] text-[length:var(--text-font-size)] font-text font-[number:var(--text-font-weight)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                      {token.price}
                    </span>

                    <div className="inline-flex items-center">
                      <ChevronDownIcon className="w-5 h-5 text-[#ea4571]" />
                      <span className="text-[#ea4571] text-[length:var(--description-font-size)] font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                        {token.change}
                      </span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="flex flex-col w-full lg:w-[448px] min-h-[440px] items-start gap-2">
          <div className="flex items-start gap-2 px-0 py-3 w-full">
            <BarChart3Icon className="w-6 h-6 text-white" />
            <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
              Upcoming
            </span>
          </div>

          <div className="flex flex-wrap items-start gap-[8px_8px] flex-1 w-full">
            {upcomingTokensData.map((token, index) => (
              <Card
                key={index}
                className="flex flex-col w-full sm:w-[calc(50%-4px)] lg:w-[220px] min-h-[90px] items-start gap-[82.5px] p-4 bg-white rounded-xl border-0 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="inline-flex flex-col items-start p-0">
                  <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                    {token.year}
                  </span>
                </CardContent>

                <div className="inline-flex items-center gap-3">
                  <img
                    className="w-12 h-12"
                    alt={`Image ${token.symbol}`}
                    src={token.icon}
                  />

                  <div className="inline-flex flex-col items-start gap-1">
                    <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                      {token.name}
                    </span>

                    <span className="text-[#9f6a79] text-[length:var(--description-font-size)] font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] whitespace-nowrap [font-style:var(--description-font-style)]">
                      {token.symbol}
                    </span>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="flex flex-col w-full lg:w-[448px] h-[181.5px] items-center justify-center p-[21px] bg-white rounded-xl overflow-hidden border-0 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="inline-flex flex-col items-center gap-[7.5px] p-0">
                <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                  Stay tuned for more.
                </span>

                <div className="inline-flex items-center gap-1.5">
                  <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                    Follow @oasis
                  </span>

                  <img
                    className="w-6 h-6"
                    alt="Icons arrow right"
                    src={getAssetPath("/assets/icons-24-arrow-right-up.svg")}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Token Grid Section */}
      <div className="flex flex-col w-full max-w-[1067px] items-center relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] px-4 lg:px-0">
        <div className="absolute top-[calc(50.00%_+_29px)] left-[calc(50.00%_-_50px)] w-[116px] h-[116px] bg-[#f61051] rounded-[58.23px] blur-[77px]" />

        <div className="relative w-full max-w-[1067px] h-[400px] sm:h-[500px] lg:h-[666px] hidden sm:block">
          <div className="absolute top-0 left-0 w-[1067px] h-[666px]">
            <div className="absolute top-[131px] left-[120px] w-[832px] h-[470px] opacity-80">
              {tokenGridData.map((token, index) => (
                <div
                  key={index}
                  className={`${token.top} ${token.left} inline-flex flex-col items-center absolute`}
                >
                  <img
                    className="w-[72px] h-[72px]"
                    alt="Image"
                    src={token.icon}
                  />

                  <Badge
                    className={`inline-flex h-5 items-center justify-center pl-px pr-2 py-0.5 -mt-1.5 ${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"} rounded-full border-0 hover:${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"}`}
                  >
                    <img
                      className="w-5 h-5"
                      alt="Icons arrow right"
                      src={
                        token.isPositive
                          ? "/assets/icons-20-arrow-right-up.svg"
                          : "/assets/icons-20-arrow-right-down.svg"
                      }
                    />

                    <span className="font-osmosis-zone-inter-medium font-[number:var(--osmosis-zone-inter-medium-font-weight)] text-[#0a0012] text-[length:var(--osmosis-zone-inter-medium-font-size)] tracking-[var(--osmosis-zone-inter-medium-letter-spacing)] leading-[var(--osmosis-zone-inter-medium-line-height)] whitespace-nowrap [font-style:var(--osmosis-zone-inter-medium-font-style)]">
                      {token.change}
                    </span>
                  </Badge>
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-0 w-[1067px] h-[666px] opacity-50">
              {tokenGridDataSecondary.map((token, index) => (
                <div
                  key={index}
                  className={`${token.top} ${token.left} ${token.opacity || ""} inline-flex flex-col items-center absolute`}
                >
                  <img
                    className="w-[72px] h-[72px]"
                    alt="Image"
                    src={token.icon}
                  />

                  <Badge
                    className={`inline-flex h-5 items-center justify-center pl-px pr-2 py-0.5 -mt-1.5 ${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"} rounded-full border-0 hover:${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"}`}
                  >
                    <img
                      className="w-5 h-5"
                      alt="Icons arrow right"
                      src={
                        token.isPositive
                          ? "/assets/icons-20-arrow-right-up.svg"
                          : "/assets/icons-20-arrow-right-down.svg"
                      }
                    />

                    <span className="font-osmosis-zone-inter-medium font-[number:var(--osmosis-zone-inter-medium-font-weight)] text-[#0a0012] text-[length:var(--osmosis-zone-inter-medium-font-size)] tracking-[var(--osmosis-zone-inter-medium-letter-spacing)] leading-[var(--osmosis-zone-inter-medium-line-height)] whitespace-nowrap [font-style:var(--osmosis-zone-inter-medium-font-style)]">
                      {token.change}
                    </span>
                  </Badge>
                </div>
              ))}
            </div>

            <div className="absolute top-[246px] left-[250px] w-[571px] h-[304px]">
              {tokenGridDataCenter.map((token, index) => (
                <div
                  key={index}
                  className={`${token.top} ${token.left} inline-flex flex-col items-center absolute`}
                >
                  <img
                    className="w-[72px] h-[72px]"
                    alt="Image"
                    src={token.icon}
                  />

                  <Badge
                    className={`inline-flex h-5 items-center justify-center pl-px pr-2 py-0.5 -mt-1.5 ${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"} rounded-full border-0 hover:${token.isPositive ? "bg-[#37d56d]" : "bg-[#ea456c]"}`}
                  >
                    <img
                      className="w-5 h-5"
                      alt="Icons arrow right"
                      src={
                        token.isPositive
                          ? "/assets/icons-20-arrow-right-up.svg"
                          : "/assets/icons-20-arrow-right-down.svg"
                      }
                    />

                    <span className="font-osmosis-zone-inter-medium font-[number:var(--osmosis-zone-inter-medium-font-weight)] text-[#0a0012] text-[length:var(--osmosis-zone-inter-medium-font-size)] tracking-[var(--osmosis-zone-inter-medium-letter-spacing)] leading-[var(--osmosis-zone-inter-medium-line-height)] whitespace-nowrap [font-style:var(--osmosis-zone-inter-medium-font-style)]">
                      {token.change}
                    </span>
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[455px] left-[455px] w-[158px] h-[158px] flex">
            <div className="w-[158px] h-[158px] flex overflow-hidden">
              <div className="mt-[-11.3px] w-[178.31px] ml-[-20.3px] flex">
                <img
                  className="w-[178.31px] h-[178.31px]"
                  alt="Image"
                  src={getAssetPath("/assets/image-34-1.png")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[550px] items-center gap-6 sm:gap-8 relative px-4">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full">
            <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[32px] sm:text-[48px] lg:text-[length:var(--title-64-font-size)] text-center tracking-[var(--title-64-letter-spacing)] leading-[1.2] lg:leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
              The center of the
              <br />
              multichain future.
            </h2>

            <p className="font-text font-[number:var(--text-font-weight)] text-[#ffffff80] text-[14px] sm:text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-center [font-style:var(--text-font-style)]">
              Access liquidity and assets from over 100 ecosystems.
            </p>
          </div>

          <Button className="bg-[#f61051] inline-flex w-full sm:w-auto h-14 sm:h-16 items-center justify-center gap-1 px-6 py-0 rounded-xl hover:bg-[#f61051]/90 transition-colors">
            <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)]">
              Explore Assets
            </span>
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col w-full items-start pt-20 pb-[25px] px-4 rounded-[32px] border border-solid border-[#ffffff1a] bg-[linear-gradient(206deg,rgba(250,93,122,0.1)_33%,rgba(178,1,54,1)_55%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-16 px-4 py-0">
          <div className="flex flex-col w-full max-w-[1408px] items-start gap-12">
            <div className="flex items-start gap-2 w-full">
              <div className="flex flex-col w-[60px] h-[60px] items-center justify-center">
                <img
                  className="w-[60px] h-[60px]"
                  alt="Component"
                  src={getAssetPath("/assets/component-1-3.svg")}
                />
              </div>

              <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[length:var(--title-64-font-size)] tracking-[var(--title-64-letter-spacing)] leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
                Trusted by 1+ million
                <br />
                users and counting.
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
              {statsData.map((stat, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-full lg:w-[458.66px] h-[230px] items-start gap-16 p-6 bg-white rounded-3xl border-0 relative overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0 w-full">
                    {stat.icon}

                    <div className="flex flex-col items-start gap-3 w-full mt-16">
                      <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                        {stat.title}
                      </span>

                      <span className="font-subtitle-48 font-[number:var(--subtitle-48-font-weight)] text-[#0a0012] text-[length:var(--subtitle-48-font-size)] tracking-[var(--subtitle-48-letter-spacing)] leading-[var(--subtitle-48-line-height)] [font-style:var(--subtitle-48-font-style)]">
                        {stat.value}
                      </span>
                    </div>

                    <img
                      className="absolute -top-12 right-[15px] w-[120px] h-[120px]"
                      alt="Image"
                      src={stat.image}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-0 py-6 w-full">
            <div className="flex-1 h-px bg-white" />

            <div className="flex flex-col w-[21px] h-[21px] items-center justify-center">
              <img
                className="w-[21px] h-[21px]"
                alt="Component"
                src={getAssetPath("/assets/component-1-4.svg")}
              />
            </div>

            <div className="flex-1 h-px bg-white" />
          </div>

          <div className="flex flex-col items-center gap-8 px-0 py-px w-full">
            <div className="inline-flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-4 w-full">
                <span className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] text-center tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] whitespace-nowrap [font-style:var(--subtitle-font-style)]">
                  Don&#39;t just take it from us...
                </span>

                <p className="font-text font-[number:var(--text-font-weight)] text-[#ffffff80] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                  Real users show real love for Oasis.
                </p>
              </div>
            </div>

            <img
              className="w-[1408px] h-[408px]"
              alt="Mask group"
              src={getAssetPath("/assets/mask-group-1.svg")}
            />

            <p className="max-w-screen-sm text-[#ffffff80] whitespace-nowrap font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
              These tweets highlight positive feedback from our community of
              users and influencers.
            </p>

            <div className="flex flex-col w-[1408px] items-center gap-4">
              <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] text-center tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] whitespace-nowrap [font-style:var(--subtitle-font-style)]">
                Backed by the best in the industry
              </h3>

              <div className="flex flex-col items-start justify-center w-full">
                <div className="relative w-[1408px] h-48">
                  <div className="absolute top-[68px] left-[calc(50.00%_+_146px)] w-[139px] h-14 flex items-center justify-center">
                    <div className="w-[138.92px] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg">
                      <div className="flex flex-col w-[136.92px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[136.93px] h-[54px]">
                          <img
                            className="absolute w-[40.36%] h-[31.39%] top-[34.31%] left-[42.73%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group.png")}
                          />

                          <img
                            className="absolute w-[21.53%] h-[55.
95%] top-[22.02%] left-[16.90%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-1.png")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-[39px] w-[1330px] h-48">
                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_-_665px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[141.75px] h-[54px] items-center justify-center">
                        <div className="relative w-[141.75px] h-[54px]">
                          <img
                            className="absolute w-[13.17%] h-[39.93%] top-[30.04%] left-[16.81%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-10.svg")}
                          />

                          <img
                            className="absolute w-[48.32%] h-[27.48%] top-[36.26%] left-[34.87%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-4.svg")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_-_509px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[172.59px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[172.61px] h-[54px]">
                          <img
                            className="absolute w-[72.63%] h-[38.24%] top-[30.88%] left-[13.57%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-2.png")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_-_323px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[162.95px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[162.96px] h-[54px]">
                          <img
                            className="absolute w-[71.01%] h-[33.93%] top-[33.04%] left-[14.37%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-3.png")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_-_146px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[248.78px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[248.79px] h-[54px]">
                          <img
                            className="absolute w-[40.43%] h-[26.47%] top-[36.76%] left-[9.32%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-18.svg")}
                          />

                          <img
                            className="absolute w-[35.47%] h-[26.47%] top-[36.76%] left-[55.21%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-19.svg")}
                          />

                          <img
                            className="absolute w-[2.10%] h-[26.47%] top-[36.76%] left-[51.24%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-7.svg")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_+_117px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[167.78px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[167.79px] h-[54px]">
                          <img
                            className="absolute w-[71.84%] h-[28.48%] top-[35.76%] left-[14.34%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-2.svg")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_+_299px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[171.64px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[171.64px] h-[54px]">
                          <img
                            className="absolute w-[72.69%] h-[57.46%] top-[21.27%] left-[13.48%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector.png")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_96px)] left-[calc(50.00%_+_485px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[178.39px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[178.39px] h-[54px]">
                          <img
                            className="absolute w-[6.05%] h-[27.37%] top-[36.32%] left-[24.90%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-3.svg")}
                          />

                          <img
                            className="absolute w-[6.30%] h-[28.07%] top-[35.96%] left-[46.80%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-5.svg")}
                          />

                          <img
                            className="absolute w-[5.91%] h-[27.37%] top-[36.32%] left-[58.01%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-12.svg")}
                          />

                          <img
                            className="absolute w-[7.99%] h-[27.37%] top-[36.32%] left-[79.01%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-11.svg")}
                          />

                          <img
                            className="absolute w-[6.83%] h-[27.37%] top-[36.32%] left-[13.49%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-6.svg")}
                          />

                          <img
                            className="absolute w-[6.83%] h-[27.37%] top-[36.32%] left-[35.52%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-8.svg")}
                          />

                          <img
                            className="absolute w-[6.83%] h-[27.37%] top-[36.32%] left-[68.58%]"
                            alt="Vector"
                            src={getAssetPath("/assets/vector-8.svg")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_522px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[268.06px] h-[54px] items-center justify-center overflow-hidden">
                        <img
                          className="w-[268.07px] h-[54px]"
                          alt="Component"
                          src={getAssetPath("/assets/component-1-5.svg")}
                        />
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_240px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[188.03px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[188.04px] h-[54px]">
                          <img
                            className="absolute w-[56.35%] h-[23.86%] top-[38.07%] left-[31.34%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-4.png")}
                          />

                          <img
                            className="absolute w-[13.33%] h-[47.73%] top-[26.14%] left-[12.31%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-5.png")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_38px)] inline-flex h-14 items-center justify-center p-px bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="flex flex-col w-[169.7px] h-[54px] items-center justify-center overflow-hidden">
                        <div className="relative w-[169.71px] h-[54px]">
                          <img
                            className="absolute w-[72.73%] h-[30.79%] top-[34.61%] left-[13.64%]"
                            alt="Clip path group"
                            src={getAssetPath("/assets/clip-path-group-6.png")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex h-14 items-center justify-center p-px absolute top-[calc(50.00%_-_28px)] left-[calc(50.00%_+_293px)] bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0">
                        <div className="w-[39px] h-[39px] bg-[url(/assets/anatoly-yakovenko-profile-picture.png)] bg-cover bg-[50%_50%]" />

                        <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                          Anatoly Yakovenko
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex h-14 items-center justify-center p-px absolute top-[calc(50.00%_+_40px)] left-[calc(50.00%_-_281px)] bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0">
                        <div className="w-12 h-[39px] bg-[url(/assets/ethan-buchman-profile-picture.png)] bg-cover bg-[50%_50%]" />

                        <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                          Ethan Buchman
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex h-14 items-center justify-center p-px absolute top-[calc(50.00%_+_40px)] left-[calc(50.00%_-_52px)] bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0">
                        <div className="w-12 h-12 bg-[url(/assets/hasu-profile-picture.png)] bg-cover bg-[50%_50%]" />

                        <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                          Hasu
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex h-14 items-center justify-center p-px absolute top-[calc(50.00%_+_40px)] left-[calc(50.00%_+_104px)] bg-[#ffffff33] rounded-lg hover:bg-[#ffffff4d] transition-colors cursor-pointer">
                      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0">
                        <div className="w-12 h-[39px] bg-[url(/assets/raj-gokal-profile-picture.png)] bg-cover bg-[50%_50%]" />

                        <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                          Raj Gokal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DeFi Features Section */}
      <div className="flex flex-col items-start pt-20 pb-[25px] px-0 w-full rounded-[32px] border border-solid border-[#ffffff1a] bg-[linear-gradient(206deg,rgba(250,93,122,0.1)_33%,rgba(178,1,54,1)_55%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="flex flex-col w-full items-center gap-14 px-4 py-0">
          <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[length:var(--title-64-font-size)] text-center tracking-[var(--title-64-letter-spacing)] leading-[var(--title-64-line-height)] whitespace-nowrap [font-style:var(--title-64-font-style)]">
            Unlock the full potential of DeFi.
          </h2>

          <div className="flex flex-col items-start justify-center gap-4 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
              {defiFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-full lg:w-[453.33px] h-[440px] items-start justify-between p-[25px] bg-white rounded-3xl overflow-hidden border hover:shadow-lg transition-shadow cursor-pointer relative"
                >
                  <CardContent className="p-0 w-full flex flex-col h-full">
                    <div className="flex items-center justify-between w-full mb-4">
                      <div className="flex flex-col w-8 items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg overflow-hidden">
                        <img
                          className="w-6 h-6"
                          alt="Icon"
                          src={feature.icon}
                        />
                      </div>

                      <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg border-0 hover:bg-[#fa5d791a]">
                        <span className="font-text font-[number:var(--text-font-weight)] text-[#f61051] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                          {feature.badge}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center min-h-[180px] max-h-[200px]">
                      <img
                        className="max-w-[280px] max-h-[180px] object-contain"
                        alt="Image"
                        src={feature.image}
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full mt-4">
                      <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-[#0a0012] text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                        {feature.title}
                      </h3>

                      <p className="text-[#787687] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)] whitespace-pre-line">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
              <Card className="flex flex-col w-full lg:w-[688px] h-[330px] items-start p-[25px] rounded-3xl overflow-hidden border-0 bg-white hover:shadow-lg transition-shadow cursor-pointer relative">
                <CardContent className="p-0 w-full flex flex-col h-full">
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-[33px] h-[33px] items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg overflow-hidden flex flex-col">
                      <img
                        className="w-6 h-6"
                        alt="Icons flash"
                        src={getAssetPath("/assets/icons-24-flash-1.svg")}
                      />
                    </div>

                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg border-0 hover:bg-[#fa5d791a]">
                      <span className="text-[#f61051] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                        Powered by Mars
                      </span>
                    </Badge>
                  </div>

                  <div className="flex-1 flex items-center justify-end relative max-h-[180px]">
                    <img
                      className="max-h-[180px] max-w-[300px] object-contain"
                      alt="Image"
                      src={getAssetPath("/assets/image-3.png")}
                    />
                  </div>

                  <div className="flex flex-col w-[306px] items-start gap-2 mt-4">
                    <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-[#0a0012] text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                      Liquid Staking
                    </h3>

                    <p className="text-[#787687] whitespace-nowrap font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                      Dead simple staking, no staking lock-ups.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col w-full lg:w-[688px] h-[330px] items-start p-[25px] rounded-3xl overflow-hidden border-0 bg-white hover:shadow-lg transition-shadow cursor-pointer relative">
                <CardContent className="p-0 w-full flex flex-col h-full">
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-[33px] items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg overflow-hidden flex flex-col">
                      <img
                        className="w-6 h-6"
                        alt="Icons flash"
                        src={getAssetPath("/assets/icons-24-flash.svg")}
                      />
                    </div>

                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#fa5d791a] rounded-lg border-0 hover:bg-[#fa5d791a]">
                      <span className="text-[#f61051] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                        Explore Apps
                      </span>
                    </Badge>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative overflow-hidden max-h-[180px]">
                    <img
                      className="max-h-[180px] max-w-[350px] object-contain"
                      alt="Image"
                      src={getAssetPath("/assets/mask-group.png")}
                    />
                  </div>

                  <div className="flex flex-col w-[277px] items-start gap-2 mt-4">
                    <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-[#0a0012] text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                      More Possibilities
                    </h3>

                    <p className="text-[#787687] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                      Explore a growing ecosystem of apps on Oasis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="flex flex-col items-center justify-center gap-14 px-4 py-0 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <div className="inline-flex flex-col items-center gap-4">
          <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#ffffff33] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 hover:bg-[#ffffff33]">
            <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
              Put your assets to work
            </span>
          </Badge>

          <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[length:var(--title-64-font-size)] text-center tracking-[var(--title-64-letter-spacing)] leading-[var(--title-64-line-height)] whitespace-nowrap [font-style:var(--title-64-font-style)]">
            Connect with Oasis.
          </h2>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 w-full max-w-[1406px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-4 w-full">
            {connectCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col flex-1 w-full lg:w-auto h-[260px] items-start p-[25px] bg-[#ffffff1a] rounded-3xl overflow-hidden border-0 hover:bg-[#ffffff26] transition-colors cursor-pointer relative"
              >
                <CardContent className="p-0 w-full flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-white">{card.icon}</div>

                    <div className="flex flex-col w-[30px] h-[30px] gap-2.5 px-2.5 py-[11px] bg-[#ffffff1a] rounded-lg overflow-hidden opacity-80 items-center justify-center">
                      <ArrowUpRightIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-[85px] right-[25px] w-[200px] h-[140px] flex items-center justify-end">
                    <img
                      className="max-h-[140px] max-w-[200px] object-contain"
                      alt="Image"
                      src={card.image}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full max-w-[280px]">
                    <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                      {card.title}
                    </h3>

                    <p className="text-[#ffffff80] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)] whitespace-pre-line">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-4 w-full">
            {socialCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col flex-1 w-full lg:w-auto h-[200px] items-start justify-between p-[25px] bg-[#ffffff1a] rounded-3xl overflow-hidden border-0 hover:bg-[#ffffff26] transition-colors cursor-pointer"
              >
                <CardContent className="p-0 w-full flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between w-full">
                    <img className="w-6 h-6" alt={card.title} src={card.icon} />

                    <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#ffffff33] rounded-lg border-0 hover:bg-[#ffffff33]">
                      <span className="text-white font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                        {card.handle}
                      </span>
                    </Badge>
                  </div>

                  <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                    {card.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Governance Section */}
      <div className="flex flex-col items-start gap-2.5 px-4 py-0 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <Card className="relative w-full min-h-[546px] bg-white rounded-[32px] overflow-hidden border-0">
          <CardContent className="p-0">
            {/* Background Images - Hidden on mobile */}
            <div className="hidden lg:block absolute top-0 left-0 w-[1392px] h-[546px] overflow-hidden">
              <div className="mt-0.5 w-[1390px] h-[552.21px] ml-px flex overflow-hidden" />
            </div>

            <img
              className="hidden lg:block absolute top-0 left-[637px] w-[772px] h-[546px] object-cover"
              alt="Screenshot"
              src={getAssetPath("/assets/screenshot-2025-10-17-at-18-50-28-1.png")}
            />

            <div className="hidden lg:block absolute top-[-19px] left-[877px] w-[440px] h-[584px]">
              <img
                className="absolute top-0 -left-0.5 w-[442px] h-[584px]"
                alt="Image"
                src={getAssetPath("/assets/image-423.png")}
              />

              <div className="absolute top-[101px] -left-0.5 w-[45px] h-[245px] bg-white" />
            </div>

            {/* Content */}
            <div className="flex flex-col w-full lg:w-[519px] items-start justify-center relative lg:absolute lg:top-14 lg:left-14 p-6 sm:p-8 lg:p-0">
              <div className="inline-flex flex-col items-start justify-center gap-6 sm:gap-8">
                <div className="inline-flex flex-col w-full items-start gap-2 sm:gap-2.5">
                  <div className="flex flex-col items-start w-full">
                    <h2 className="text-[#0a0012] font-title-64 font-[number:var(--title-64-font-weight)] text-[32px] sm:text-[48px] lg:text-[length:var(--title-64-font-size)] tracking-[var(--title-64-letter-spacing)] leading-[1.2] lg:leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
                      Have your say in
                    </h2>

                    <span className="bg-[linear-gradient(90deg,rgba(234,70,114,1)_0%,rgba(178,1,54,1)_10%,rgba(178,1,54,1)_36%,rgba(234,70,114,1)_50%,rgba(178,1,54,1)_65%,rgba(178,1,54,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent font-title-64 font-[number:var(--title-64-font-weight)] text-[32px] sm:text-[48px] lg:text-[length:var(--title-64-font-size)] tracking-[var(--title-64-letter-spacing)] leading-[1.2] lg:leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
                      Oasis&apos; future.
                    </span>
                  </div>

                  <p className="text-[#0a0012] font-text font-[number:var(--text-font-weight)] text-[14px] sm:text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                    Join the global decentralized community of OASIS and
                    <br className="hidden sm:block" />
                    vote on the future of the network in the latest governance
                    <br className="hidden sm:block" />
                    proposals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <Button className="bg-[#0a0012] inline-flex h-14 sm:h-16 items-center justify-center gap-1 px-6 py-0 rounded-xl hover:bg-[#0a0012]/90 transition-colors">
                    <span className="font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] text-white whitespace-nowrap [font-style:var(--text-font-style)]">
                      Vote now
                    </span>

                    <ArrowUpRightIcon className="w-6 h-6" />
                  </Button>

                  <Button className="bg-[#fa5d791a] inline-flex h-14 sm:h-16 items-center justify-center gap-1 px-6 py-0 rounded-xl hover:bg-[#fa5d792a] transition-colors">
                    <span className="font-text font-[number:var(--text-font-weight)] text-[#0a0012] text-[14px] sm:text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                      Join the discussion
                    </span>

                    <UsersIcon className="w-6 h-6 text-[#0a0012]" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer text */}
            <div className="inline-flex items-center gap-2 relative lg:absolute lg:top-[460px] lg:left-14 p-6 sm:p-8 lg:p-0 pt-0 lg:pt-0">
              <div className="flex w-[30px] h-[30px] items-center justify-center p-px rounded-full border border-solid border-[#787687]">
                <img
                  className="w-[15px] h-[15px]"
                  alt="Component"
                  src={getAssetPath("/assets/component-1-6.svg")}
                />
              </div>

              <span className="font-text font-[number:var(--text-font-weight)] text-[#787687] text-[12px] sm:text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                1 OSMO minimum stake required
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Developer Section */}
      <div className="flex flex-col items-center gap-14 w-full px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <div className="inline-flex flex-col items-center gap-4">
          <Badge className="inline-flex items-center justify-center px-3 py-1 bg-[#ffffff33] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 hover:bg-[#ffffff33]">
            <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
              Developers
            </span>
          </Badge>

          <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[length:var(--title-64-font-size)] text-center tracking-[var(--title-64-letter-spacing)] leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
            Build the next
            <br />
            disruptive DeFi App.
          </h2>

          <p className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
            Oasis empowers developers to innovate.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[1406px] items-start gap-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
            {developerCards.slice(0, 2).map((card, index) => (
              <Card
                key={index}
                className="flex flex-col w-full lg:flex-1 h-[260px] items-start p-[25px] bg-[#ffffff1a] rounded-3xl overflow-hidden border-0 hover:bg-[#ffffff26] transition-colors cursor-pointer relative"
              >
                <CardContent className="p-0 w-full flex flex-col h-full justify-between">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-white">{card.icon}</div>

                    <div className="flex flex-col w-[30px] h-[30px] gap-2.5 px-2.5 py-[11px] bg-[#ffffff1a] rounded-lg overflow-hidden opacity-80 items-center justify-center">
                      <ArrowUpRightIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-[85px] right-[25px] w-[200px] h-[140px] flex items-center justify-end">
                    <img
                      className="max-h-[140px] max-w-[200px] object-contain"
                      alt="Image"
                      src={card.image}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full max-w-[280px]">
                    <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                      {card.title}
                    </h3>

                    <p className="text-[#ffffff80] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
            {developerCards.slice(2, 4).map((card, index) => (
              <Card
                key={index}
                className="flex flex-col w-full lg:flex-1 h-[260px] items-start p-[25px] bg-[#ffffff1a] rounded-3xl overflow-hidden border-0 hover:bg-[#ffffff26] transition-colors cursor-pointer relative"
              >
                <CardContent className="p-0 w-full flex flex-col h-full justify-between">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-white">{card.icon}</div>

                    <div className="flex flex-col w-[30px] h-[30px] gap-2.5 px-2.5 py-[11px] bg-[#ffffff1a] rounded-lg overflow-hidden opacity-80 items-center justify-center">
                      <ArrowUpRightIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-[85px] right-[25px] w-[200px] h-[140px] flex items-center justify-end">
                    <img
                      className="max-h-[140px] max-w-[200px] object-contain"
                      alt="Image"
                      src={card.image}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full max-w-[280px]">
                    <h3 className="font-subtitle font-[number:var(--subtitle-font-weight)] text-white text-[length:var(--subtitle-font-size)] tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
                      {card.title}
                    </h3>

                    <p className="text-[#ffffff80] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative w-full max-w-[1406px] min-h-[583px] mb-32 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms] px-4 lg:px-0">
        <Card className="relative w-full min-h-[583px] rounded-[32px] border-2 border-solid border-[#ffffff1a] bg-[linear-gradient(206deg,rgba(250,93,122,0.1)_33%,rgba(178,1,54,1)_55%)] overflow-visible">
          <CardContent className="p-0 relative w-full h-full min-h-[583px] overflow-visible">
            {/* Background Image */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-[695px] h-full overflow-visible pointer-events-none">
              <div className="absolute bottom-[-20px] left-[-80px] w-[900px] h-[700px] bg-[url(/assets/group-33937-1.png)] bg-contain bg-no-repeat bg-bottom" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center lg:items-end justify-start w-full h-full min-h-[583px] p-6 sm:p-8 lg:p-14">
              <div className="flex flex-col items-start gap-6 sm:gap-8 w-full lg:w-[399px]">
                <div className="inline-flex flex-col items-start gap-2 sm:gap-[7.5px]">
                  <div className="flex flex-col items-start w-full">
                    <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[32px] sm:text-[48px] lg:text-[length:var(--title-64-font-size)] tracking-[var(--title-64-letter-spacing)] leading-[1.2] lg:leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
                      Start trading
                    </h2>

                    <span className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_19%,rgba(255,255,255,0.5)_85%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-title-64 font-[number:var(--title-64-font-weight)] text-transparent text-[32px] sm:text-[48px] lg:text-[length:var(--title-64-font-size)] tracking-[var(--title-64-letter-spacing)] leading-[1.2] lg:leading-[var(--title-64-line-height)] [font-style:var(--title-64-font-style)]">
                      today.
                    </span>
                  </div>

                  <p className="text-white font-text font-[number:var(--text-font-weight)] text-[14px] sm:text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                    Simply set up your wallet and connect to Oasis instantly,
                    <br className="hidden sm:block" />
                    from anywhere. No sign-ups required.
                  </p>
                </div>

                <Button className="flex w-full sm:w-[220px] h-14 sm:h-16 items-center justify-center gap-1 px-6 py-0 bg-[#0a0012] rounded-xl hover:bg-[#0a0012]/90 transition-colors">
                  <span className="font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
                    Get Started
                  </span>
                </Button>
              </div>

              {/* Footer Text */}
              <div className="flex items-end justify-center lg:justify-end w-full mt-auto pt-8 lg:pt-0">
                <p className="text-[#ffffff80] leading-[var(--description-line-height)] font-description [font-style:var(--description-font-style)] font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] text-[12px] sm:text-[length:var(--description-font-size)] max-w-[630px] text-center lg:text-left">
                  Oasis uses TradingView technology to display prices on charts.
                  Supported by robust
                  <br className="hidden lg:block" />
                  technologies across browser, desktop and mobile apps, the
                  platform provides unparalleled access
                  <br className="hidden lg:block" />
                  to real-time data such as{" "}
                  <span className="text-white">BTC USD Chart</span>, the latest
                  financial news, comprehensive financial
                  <br className="hidden lg:block" />
                  reports, and a range of useful tools, including the economic
                  data calendar and screeners.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
