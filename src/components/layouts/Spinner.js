import React, {Fragment} from 'react';
import s from './s.svg'

const Spinner = () => {
  return (
    <Fragment>
      <img src={s} alt="loading ..." style={{width:'200px' ,margin:"auto" , display:"block"}}/>
    </Fragment>
  )
}



export default Spinner
