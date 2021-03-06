import React from "react"

const Entry = (props) => {
    return <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emojiUnicode}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>{props.meaning}</dd>
        </div>
        }
export default Entry