import React from 'react';
import FeedbackForm from './components/feedbackform';
import FeedbackList from './components/feedbacklist';

const App: React.FC = () => {
  return (
    <div>
      <h1>Feedback App</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;

