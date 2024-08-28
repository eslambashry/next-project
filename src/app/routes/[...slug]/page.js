import React from 'react'

function routes({params}) {
    console.log(params);
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        MESSIIIIIIIIIIIIIIIIIIIIIIIIIII
      {params.slug.map((param)=>
        <ul>
            <li>{param}</li>
        </ul>
      )}
    </div>
  )
}

export default routes
