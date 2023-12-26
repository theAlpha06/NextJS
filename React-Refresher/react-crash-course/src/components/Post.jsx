import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <Link to={props.id}>
        <li>
          <p className={classes.author}>{props.author}</p>
          <p className={classes.body}>{props.body}</p>
        </li>
      </Link>
    </div>
  )
}

export default Post;