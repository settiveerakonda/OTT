import React from 'react'
import Card from '../Card.js/Card'
import OutputAha from '../Tv shows/Aha/OutputAha'
import OutputKoren from '../Tv shows/Aha/koren/OutputKoren'
import OutputMarval from '../Marval/Outputmarval'
import Inputramcharan from '../Heros/Ramcharan/Inputramcharan'
import Pawan from '../Heros/PawanKalyan/Pawan'
import Prabash from '../Heros/Prabesh/Prabesh'

export default function Mixer() {
  return (
    <div>
        <Card/>
        <OutputAha/>
        <OutputKoren/>
        <OutputMarval/>
        {/* <Inputramcharan/> */}
        <Pawan/>
        <Prabash/>
        
    </div>
  )
}
