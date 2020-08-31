import React, { useState } from 'react';
import axios from 'axios';

const Quest = () => {
    const [quoteState, setQuoteState] = useState({
        quoteData: []
    })

    const generateQuote = () => {
        axios.get('https://api.kanye.rest')
            .then(res => {
                setQuoteState(() => ({
                    quoteData: res.data
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const theQuote = quoteState.quoteData.quote

    return (
        <div className="kanye-quest">
            <h2>I bid you come closer, fellow web traveler..</h2>
            <p>There was a man named Kanye West, who was put to the Kanye test.
            <br />
            "You must grab a bird from Kanye nest, and bring it to our Kanye fest!"
            <br />
            <br />
            "An easy task!", said Kanye, blessed. He set off on his Kanye quest.
            <br />
            "But what to wear?", our Kanye guessed, and proceeded to get Kanye dressed.
            <br />
            <br />
            Though pride worn on his Kanye breast, his task quite made him Kanye pressed. For without a calming
            <br />
            Kanye rest, he could not do his Kanye best.
            <br />
            <br />
            Our champion now, all Kanye stressed, sayeth he, one Kanye West: 
            </p>
            <br/>
            <h1 className="quote">{theQuote}</h1>
            <br/>
            <button onClick={generateQuote} className="btn">Y O L O</button>
        </div>
    )
}

export default Quest