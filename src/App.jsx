import questions from './questions.json'
import QuestionData from './components/questionData';
import {useState} from 'react';
function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[userAnswer, setUserAnswer] = useState([])

  const handleNextQuestion = (isCorrect) =>{
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswer([...userAnswer, isCorrect])
   }

  return (
    <div>
        <QuestionData
          questions = {questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
    </div>
  );
}
export default App;
