import React from 'react'
import OutputAha from './OutputAha'
import Koren from './koren/Koren'
import OutputKoren from './koren/OutputKoren'
import Inputramcharan from '../../Heros/Ramcharan/Inputramcharan'
import Pawan from '../../Heros/PawanKalyan/Pawan'
import Prabash from '../../Heros/Prabesh/Prabesh'
import OutputMarval from '../../Marval/Outputmarval'

export default function Aha() {
  return (
    <div>
        <div className="row bg-black text-white p-3">
                <div className="col-8">
                    <h1 className style={{color:'wheat',marginRight:"700px"}} >Aha</h1>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <a href="/ImportAha" className="btn btn-danger">Add Product</a>
                </div>
            </div>
            <OutputAha/>
            <Koren/>
            <OutputKoren/>
            <OutputMarval/>
        <Inputramcharan/>
        <Pawan/>
        <Prabash/>
      
    </div>
  )
}
