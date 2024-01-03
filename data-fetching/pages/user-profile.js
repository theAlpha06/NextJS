

function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {

  const { params, req, res } = context;
  //Unlike getStaticProps() we also get the request and response objects here
  //We can use them to set cookies for example
  //req and res are the official NodeJS request and response objects respectively

  return {
    props: {
      username: 'Sunny'
    }
  }
}

export default UserProfilePage