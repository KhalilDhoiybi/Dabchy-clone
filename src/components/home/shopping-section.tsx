import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ShoppingSection = () => {
  return (
    <>
      <section className="bg-slate-100 dark:bg-sky-900">
        <div className="container py-12 flex flex-col">
          <div className="text-center flex flex-col">
            <span>Shopping</span>
            <span>Discover our new products!</span>
          </div>
          <Tabs className="container " defaultValue="women">
            <div>
              <TabsList>
                <TabsTrigger value="women">Women</TabsTrigger>
                <TabsTrigger value="girls">Girls</TabsTrigger>
                <TabsTrigger value="boys">Boys</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="women">
              <div className="container">
                <span>The best shopping experience, at unbeatable prices!</span>
                <span>
                  Check out the latest items posted on Dabchy, and experience a
                  new way of shopping among fashion fans in Tunisia.
                </span>
                <span>
                  Dabchy is a community of hundreds of thousands of
                  fashion-loving women. They share not only their wardrobes but
                  also their entire style universes with stunning trendy looks.
                  Click on one of the categories below to start the experience
                </span>
                <div></div>
              </div>
            </TabsContent>
            <TabsContent value="girls">
              <div className="container">
                <span>What if you made your little darling happy?</span>
                <span>
                  Other moms are sharing their daughters&apos; wardrobes, take
                  advantage of it!
                </span>
                <span>
                  Dabchy Kids is a community of hundreds of thousands of
                  fashion-loving moms. They share their little ones&apos;
                  wardrobes at very attractive prices. Click on one of the
                  categories below to start the experience
                </span>
                <div></div>
              </div>
            </TabsContent>
            <TabsContent value="boys">
              <div className="container">
                <span>Your little one deserves the best!</span>
                <span>
                  Other moms are sharing their sons&apos; wardrobes, take
                  advantage of it!
                </span>
                <span>
                  Dabchy Kids is a community of hundreds of thousands of
                  fashion-loving moms. They share their little ones&apos;
                  wardrobes at very attractive prices. Click on one of the
                  categories below to start the experience
                </span>
                <div></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default ShoppingSection
