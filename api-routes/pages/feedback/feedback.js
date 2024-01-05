import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedback.map((item) => (
        <li key={item.id}>{item.text}</li>
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