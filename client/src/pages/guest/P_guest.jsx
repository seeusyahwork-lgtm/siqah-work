// /client/src/pages/guest/P_guest.jsx

import React from 'react'
import L_Guest from '../../layouts/L_Guest'
import CG_Pembukaan from '../../components/guest/CG_Pembukaan'
import CG_aqiqah from '../../components/guest/CG_aqiqah'


const P_guest = () => {
  return (
    <L_Guest>

      <CG_Pembukaan />
      <CG_aqiqah />

    </L_Guest>
  )
}

export default P_guest