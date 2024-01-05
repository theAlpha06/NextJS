import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      }
      );
  }

  return (
    <ul>
      {props.feedback.map((item) => (
        <Fragment>
          {
            feedbackData && <p>{feedbackData.email}</p>
          }
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // fetch data from an API

  // fetch(); this should not be the method to talk to your /page/api leverage the fact that the api is on the same domain

  // const response = await fetch("http://localhost:3000/api/feedback");

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedback: data,
    },
  };
}

export default FeedbackPage;