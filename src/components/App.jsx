import { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Container } from './App.styled';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleBtnClick = key => {
    setOptions(options => ({ ...options, [key]: options[key] + 1 }));
  };

  const { good, neutral, bad } = options;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((100 / totalFeedback) * good);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
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
