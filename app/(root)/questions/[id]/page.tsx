import React from 'react'

const  QuestionDetails = async ({params}:RouteParams)=>{
  const {id} = await params

  return (
    <div> question id : ${id} </div>
  )
}

export default QuestionDetails