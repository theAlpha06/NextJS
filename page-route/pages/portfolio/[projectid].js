import { useRouter } from "next/router";

function PortfolioProjectPage() {

  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>PortfolioProjectPage</div>
  )
}

export default PortfolioProjectPage