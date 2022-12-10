import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MentorParams() {
    const params = useParams()
    const [mentor, setMentor] = useState()
        fetch(`https://classmasteradmin.herokuapp.com/api/teachers/1`)
            .then((res) => res.json())
            .then((data) => console.log(data))
    console.log(mentor)
    return (
        <div>{params.id}</div>
    )
}

export default MentorParams