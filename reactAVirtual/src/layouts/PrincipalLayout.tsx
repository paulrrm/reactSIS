import PrinciapalSide  from "../components/PrinciapalSide"
interface PrincipalLayoutProps{
    children: React.ReactNode;
}
const PrincipalLayout = ({children}:PrincipalLayoutProps) => {
  return (
    <div className="flex flex-row">
        <PrinciapalSide />
        {children}
    </div>
  )
}

export default PrincipalLayout