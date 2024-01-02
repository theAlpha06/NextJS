import { useRouter } from "next/router"

function ClientProjectsPage() {

  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }
  return (
    <>
      <div>ClientProjectsPage</div>
      <button onClick={loadProjectHandler}>
        Load Project A
      </button>
    </>
  )
}

export default ClientProjectsPage