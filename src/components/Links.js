import react from 'react'

function Links(prop){
    return(
    <>
    <h3>Links</h3>
    <a href = {prop.linkedin}>{prop.linkedin}</a>
    <a href = {prop.github}>{prop.github}</a>
    </>
    )
  }

  export default Links