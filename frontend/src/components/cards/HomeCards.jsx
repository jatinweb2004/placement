import React from 'react'
import { useSelector } from 'react-redux';
import InterviewData from '../../pages/InterviewData';

const HomeCards = () => {

  const { information } = useSelector((state) => state.getDetails);

  return (
    <>
        <InterviewData/>
    </>
  )
}

export default HomeCards