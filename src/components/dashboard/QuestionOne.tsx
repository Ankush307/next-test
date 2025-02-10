import React from 'react'

const QuestionOne = () => {
    const Question = [{
        list: {
            data: [
                {
                    title: "What is the capital of India?",
                    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"]
                }
            ]
        }
    }];

   const title = Question[0].list.data[0].title
   const options = Question[0].list.data[0].options[0]

    return (
        <div>
            <p className='text-xl font-semibold'>Q1. {title}</p>
            <p className='text-lg font-medium'>Ans. {options}</p>
        </div>
    )
}

export default QuestionOne;