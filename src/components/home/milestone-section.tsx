import { Icons } from "../icons/icons"

const MileStoneSection = () => {
  return (
    <section className="relative bg-white dark:bg-slate-900 -mt-52 lg:mt-0">
      <div className="container md:flex justify-between items-center px-24 space-y-12 py-12 md:py-12 md:space-y-0">
        <div className="flex flex-col gap-4 items-center">
          <Icons.user className="w-[130px] h-[80px]" />
          <span className="text-4xl">+700K</span>
          <span className="text-2xl font-medium">Dabchouchas</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Icons.shirt className="w-[130px] h-[80px]" />
          <span className="text-4xl">+2M</span>
          <span className="text-2xl font-medium">Items for sale</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Icons.download className="w-[130px] h-[80px]" />
          <span className="text-4xl">+500K</span>
          <span className="text-2xl font-medium">Downloads</span>
        </div>
      </div>
    </section>
  )
}

export default MileStoneSection
