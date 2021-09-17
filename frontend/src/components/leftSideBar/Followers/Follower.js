import React from 'react'

function Follower({f}) {
    return (
        <div>
            <img alt="" src={f.avatar}/>
            <span>{f.firstName}</span>
        </div>
    )
}

export default Follower
