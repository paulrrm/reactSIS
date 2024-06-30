import NavBar from "../components/NavBar"
interface AppLayoutProps{
    children: React.ReactNode;
}
const AppLayout = ({children}:AppLayoutProps) => {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}

export default AppLayout