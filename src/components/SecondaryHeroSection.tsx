import Image, { StaticImageData } from "next/image";
import PrimaryHeading from "./PrimaryHeading";
import { Button } from "./ui/button";
import crown from "@/app/images/crown.png";

const SecondaryHeroSection = ({
  title,
  rightimage,
  bg,
}: {
  title?: string;
  rightimage: StaticImageData;
  bg: StaticImageData;
}) => {
  return (
    <div className="">
      {/* <div className="container mx-auto max-w-[1920px] relative pt-20"> */}
      <div className="container mx-auto max-w-[1920px] relative">
        <Image
          src={bg}
          alt="hero"
          priority
          // className="w-full h-full object-cover"
          className={
            title === "VIP Shop"
              ? "w-full h-[700px] lg:h-[600px] xl:h-[600px] object-cover"
              : "w-full h-[600px] md:h-[400px] lg:h-[600px]"
          }
        />
        <div className="absolute top-0 left-0 w-full h-full md:flex items-center justify-start mt-5 px-4 lg:pt-10">
          <div className="container mx-auto px-4 flex flex-col-reverse gap-10 md:grid grid-cols-1 md:grid-cols-2 md:gap-24 ">
            <div className="col-span-1 content-center md:flex-none flex flex-col md:items-start items-center">
              {title === "VIP Shop" ? (
                <>
                  <h4 className="text-white text-2xl font-bold mb-8">
                    VIP Shop
                  </h4>
                  <PrimaryHeading
                    highlightText="Exclusive"
                    remainingText="OFFERS FOR"
                    remainingHeading="VIP MEMBERS"
                    textColor="text-white"
                  />
                  <p className="text-white text-lg md:text-xl font-bold mt-4">
                    Take your chance to get a very special bargain.
                  </p>
                  <Button
                    style={{
                      background: `
                        linear-gradient(#330542, #330542) padding-box,
                        linear-gradient(116.76deg, #E4BD83 13.91%, #9C6727 28.84%, #FDF6AE 32.04%, #A06B2A 50.53%, #FDF6AE 53.15%, #BD8D42 71.14%) border-box
                      `,
                      border: "2px solid transparent",
                      borderRadius: "9999px",
                    }}
                    className="mt-4 px-7 md:px-12 py-5 md:py-7 flex items-center justify-center"
                  >
                    <Image
                      src={crown}
                      width={20}
                      height={20}
                      alt="crown"
                      className="w-5 h-5"
                    />
                    Register
                  </Button>
                  <p className="text-white text-md lg:text-xl mt-4">
                    Complete your{" "}
                    <span className="text-primary">ViP membership</span> now!
                  </p>
                </>
              ) : (
                <h1 className="text-white text-5xl lg:text-6xl xl:text-8xl font-bold mt-0 md:mt-28 lg:mt-44 xl:mt-52 text-center">
                  {title}
                </h1>
              )}
            </div>
            <div className="col-span-1 content-center flex justify-center md:justify-end items-center mt-20 md:mt-0">
              <Image
                src={rightimage}
                height={400}
                width={600}
                alt="tournament"
                className=" md:w-full h-fit w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;
