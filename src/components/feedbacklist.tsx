import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/feedback');
      setFeedbacks(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {feedbacks.map((fb, index) => (
        <li key={index}>
          <strong>{fb.name}:</strong> {fb.feedback}
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
