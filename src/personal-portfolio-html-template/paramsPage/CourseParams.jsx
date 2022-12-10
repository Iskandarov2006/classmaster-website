import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CourseParams() {
    const params = useParams()
    // const [mentor, setMentor] = useState()
    fetch('https://classmasteradmin.herokuapp.com/api/course/1')
    .then(response => response.json())
    .then(json => console.log(json))
    // console.log(mentor)
    return (
        <div>{params.id}</div>
    )
}

export default CourseParams