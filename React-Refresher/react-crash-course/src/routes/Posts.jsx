import PostsList from '../components/PostList';
import { Outlet } from 'react-router-dom';

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList/>
      </main>
    </>
  );
}

export default Posts;