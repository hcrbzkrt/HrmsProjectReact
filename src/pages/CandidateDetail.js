import React from 'react'
import { useParams } from 'react-router'

export default function CandidateDetail() {
    let {apply} = useParams()
    return (
        <div>
            Application : {apply}
        </div>
    )
}
