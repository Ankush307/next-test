import React from 'react'

const QuestionOne = () => {
    const Question = [{
        list: {
            data: [
                {
                    title: "What is the capital of India?",
                    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
                }
            ]
        }
    }];
    return (
        <div>
            <p>{Question[0].list.data[0].title}</p>
            <p>{Question[0].list.data[0].options[0]}</p>
        </div>
    )
}

export default QuestionOne