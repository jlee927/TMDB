import React from 'react'
import { useParams } from 'react-router-dom';

function AccessBackend() {
    const { host } = useParams();
    

  return (
    <div>Post ID: {host}</div>
  )
}

export default AccessBackend