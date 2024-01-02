import Link from "next/link"

function ClientsPage() {

  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ]
  return (
    <>
      <div>ClientsPage</div>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[id]',
              query: { id: client.id }
            }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ClientsPage