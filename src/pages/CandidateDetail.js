import React from 'react'
import { useParams } from 'react-router'

export default function CandidateDetail() {
    let {firstName} = useParams()
    return (
        <div>
            Application : {firstName}
        </div>
    )
}
