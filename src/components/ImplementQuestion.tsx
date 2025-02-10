import React from 'react'

const ImplementQuestion = () => {

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
            <p className='text-center'>{Question[0].list.data[0].title} {Question[0].list.data[0].options[0]} </p>
        </div>
    )
}

export default ImplementQuestion