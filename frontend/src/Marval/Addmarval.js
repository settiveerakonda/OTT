import React from 'react'
import Outputmarval from './Outputmarval'

export default function Addmarval() {
  return (
    <div>
        <div className="row bg-black text-white p-3">
                <div className="col-8">
                    <h1 className style={{color:'wheat',marginRight:"700px"}} >Marval</h1>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <a href="/Inputmarval" className="btn btn-danger">Add Product</a>
                </div>
            </div>
            <Outputmarval/>
            
    </div>


  )
}
