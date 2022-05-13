import { useState } from 'react';

import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = key => {
    if (key === 'good') setGood(s => s + 1);
    if (key === 'neutral') setNeutral(s => s + 1);
    if (key === 'bad') setBad(s => s + 1);
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((100 / totalFeedback) * good);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>
      <Section title="Statistic">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
