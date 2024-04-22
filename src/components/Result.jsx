export default function Result({userAnswer,questions, resetQuiz }){
    const correctAnswers = userAnswer.filter((item)=>item).length
    console.log(questions)

    return(
        <div className="results">
            <h2>Result</h2>
            <p>You answered {correctAnswers}out of {questions.length}</p>
            <button className="retry" onClick={resetQuiz}>Retry</button>
            <ul>
            {questions.map((question, index)=>(
                <li key={index} dataCorrect={userAnswer[index]}>
                    Q{index+1}. {question.question}
                </li>
            ))}
            </ul>
        </div>
    )
}