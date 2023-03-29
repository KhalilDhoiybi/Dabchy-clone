interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>
}

export default MainLayout
