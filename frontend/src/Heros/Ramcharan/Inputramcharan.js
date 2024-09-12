import React from 'react'

import Ramcharanop from '../Ramcharan/Ramcharan _op';
export default function Inputramcharan() {
  return (
    <div>
        <div className="row bg-black text-white p-3">
                <div className="col-8">
                    <h1 className style={{color:'wheat',marginRight:"700px"}} >Ramcharan</h1>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <a href="/Ramcharan" className="btn btn-danger">Add Product</a>
                </div>
            </div>
            <Ramcharanop/>
    </div>

  )
}
