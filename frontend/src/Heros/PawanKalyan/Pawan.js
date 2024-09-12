import React from 'react'
import Outputpawan from './Outputpawan'

export default function Pawan() {
  return (
    <div>
        <div className="row bg-black text-white p-3">
                <div className="col-8">
                    <h1 className style={{color:'wheat',marginRight:"700px"}} >Pawan</h1>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <a href="/Inputpawan" className="btn btn-danger">Add Product</a>
                </div>
            </div>
            <Outputpawan/>
    </div>

  )
}
