import React from 'react'

const PigDetail = (props) => {
  const weight = props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  const medal = props['highest medal achieved']

  return (
    <div className='normalText'>
      <p>{ props.greased ? 'Greasy boi' : 'Not a greasy boi' }</p>
      <p>Specialty: { props.specialty }</p>
      <p>Weight: { weight }</p>
      <p>Highest medal: { medal }</p>
    </div>
  )
}

export default PigDetail
