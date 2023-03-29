import SiteHeader from "@/components/nav/site-header"

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
