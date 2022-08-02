import React, { useEffect, useState } from 'react'
import axiosGet from '../../../api_req/statisticsReqs'

const Statistics = () => {
  const [nutrients, setNutrients] = useState([])
  useEffect(() => {
    axiosGet(setNutrients)
  }, [])
  return (
    <div>statistics</div>
  )
}

export default Statistics