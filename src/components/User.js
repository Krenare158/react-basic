import React from 'react'
import{Data}from './data'

const User = () => {
  return (
    <div className='user'>
                    {Data.map((props)=>{
                        return(
                            <Item
                            key={i} {...d}
                            />
                        )
                    })}
    </div>
  )
}

export default User