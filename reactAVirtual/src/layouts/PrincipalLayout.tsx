import PrinciapalSide  from "../components/PrinciapalSide"
interface PrincipalLayoutProps{
    children: React.ReactNode;
}
const PrincipalLayout = ({children}:PrincipalLayoutProps) => {
  return (
    <>
        <PrinciapalSide />
        {children}
    </>
  )
}

export default PrincipalLayout