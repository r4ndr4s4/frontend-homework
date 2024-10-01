import { useState } from 'react';

import Container from '@/components/Container';
import Accordion from '@/components/Quiz/Accordion';
import Results from '@/components/Quiz/Results';

function QuizPage() {
  const [showResults, setShowResults] = useState(false);

  return <Container>{showResults ? <Results /> : <Accordion setShowResults={setShowResults} />}</Container>;
}

export default QuizPage;
