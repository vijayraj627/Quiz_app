export default function QuestionData({ questions, onAnswerClick}) {
    console.log(questions);
    return (
      <div className="question">
        <h1>{questions['question']}</h1>
        <ul className="options">
        {questions.answerOptions.map((item,index)=>(
          <li key={index}>
            <button onClick={()=> onAnswerClick(item.isCorrect)}>
              {item.text}
              </button>
          </li>
        ))}
        </ul>
      </div>
    );
  }
  