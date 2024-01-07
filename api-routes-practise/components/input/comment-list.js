import { useState } from 'react';
import classes from './comment-list.module.css';

function CommentList() {

  const [comments, setComments] = useState([]);

  fetch('/api/comment/123')
    .then(res => res.json())
    .then(data => {
      setComments(data.comments)
    });


  return (
    <ul className={classes.comments}>
      {
        comments && comments.map(comment => {
          return (
            <li key={comment.id}> 
              <p>{comment.text}</p>
              <div>
                By <address>{comment.name}</address>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default CommentList;
