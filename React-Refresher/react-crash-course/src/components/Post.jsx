import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <li>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.body}>{props.body}</p>
      </li>
    </div>
  )
}

export default Post;