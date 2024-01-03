

function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      username: 'Sunny'
    }
  }
}

export default UserProfilePage