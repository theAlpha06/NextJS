import { useEffect, useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const { showNotification } = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comment/${eventId}`)
        .then(res => res.json())
        .then(data => {
          setComments(data.comments)
        })
        .finally(() => {
          setIsLoading(false);
        })
    }

    return () => {
      setComments([]);
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    try {
      showNotification({
        title: 'Saving...',
        message: "Saving your comment...",
        status: 'pending'
      })
      const res = await fetch(`/api/comment/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const resData = await res.json();
      showNotification({
        title: 'Success',
        message: resData.message || "Successfully added your comment!",
        status: 'success'
      })
      setComments(prevData => [...prevData, resData.comment]);
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message || "Error while saving!",
        status: 'error'
      })
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {isLoading && <p>Loading...</p>}
      {showComments && !isLoading && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
