import Image from "next/image"
import iphonex from "@/assets/images/iphonex.png"

import { Icons } from "../icons/icons"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <section className="bg-costume-lightGreen">
      <div className="container lg:flex gap-32 pt-5">
        <div className="container text-center flex flex-col gap-12 items-center lg:py-20 pt-10 ">
          <h1 className="lg:text-6xl text-4xl font-nunito">
            Buy and sell your clothes without leaving your home.
          </h1>
          <p className="lg:text-2xl text-xl font-light">
            The only application that allows you to earn money by selling your
            clothes and buy new ones at up to 70% off.
          </p>
          <div className="flex flex-col gap-4">
            <Button variant="homeNav" size="lg" className="space-x-2">
              <Icons.facebook className="w-5 h-5" />
              <span>Sign up with facebook</span>
            </Button>
            <Button variant="homeNav" size="lg" className="space-x-2">
              <Icons.message className="w-5 h-5" />
              <span>Send the link with SMS</span>
            </Button>
          </div>
        </div>
        <div className="container lg:h-fit overflow-hidden">
          <Image
            className="mx-auto"
            src={iphonex}
            alt="iphonex"
            width={523}
            height={960}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
