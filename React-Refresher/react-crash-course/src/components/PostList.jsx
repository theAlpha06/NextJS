import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import { useState } from 'react';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value)
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  )
}

export default PostList;