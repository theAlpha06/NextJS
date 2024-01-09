import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../lib/posts-utils";

function PostDetailPage(props) {
  
  if (!props.post) {
    return <div>Loading...</div>; 
  }

  return <PostContent post={props.post} />;
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getPostData(slug);

  return {
    props: {
      post: post
    },
    revalidate: 600
  };
}

export default PostDetailPage;
