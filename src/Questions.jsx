import Question from "./Question";
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            questions={questions}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
