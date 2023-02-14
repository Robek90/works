import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import Verification from '../../component/verification/index'

export default inject('verification') (
  observer((props) => {
    return (
      <>
        <div>1111</div>
        <Verification/>
      </>
    )
  })
)