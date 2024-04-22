import questions from './questions.json'
import QuestionData from './components/questionData';
import {useState} from 'react';
import Result from './components/Result';
function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[userAnswer, setUserAnswer] = useState([])

  const handleNextQuestion = (isCorrect) =>{
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswer([...userAnswer, isCorrect])
   }

   const resetQuiz = ()=>{
    console.log("++")
    setCurrentQuestion(0)
    setUserAnswer([])
   }

  return (
    <div>
        { currentQuestion < questions.length &&
          <QuestionData
          questions = {questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />}
        {/* {console.log(userAnswer)} */}
        { currentQuestion === questions.length &&
          <Result
          userAnswer = {userAnswer}
          questions = {questions}
          resetQuiz = {resetQuiz}
        />}
    </div>
  );
}
export default App;
