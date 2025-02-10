import React from 'react'
import { InlineWidget } from "react-calendly";
const Calendly = () => {
    return (
        <div>
            <div className="App lg:!h-[800px] h-[900px]">
                <InlineWidget url="https://calendly.com/ankushdhull966/30min" styles={{ height: "100%", width: "100%" }} />
            </div>
        </div>
    )
}

export default Calendly