import React from 'react'
import Outputprabash from './Outputprabesh'

export default function Prabash() {
  return (
    <div>
        <div className="row bg-black text-white p-3">
                <div className="col-8">
                    <h1 className style={{color:'wheat',marginRight:"700px"}} >Pabash</h1>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <a href="/Inputprabash" className="btn btn-danger">Add Product</a>
                </div>
            </div>
            <Outputprabash/>
    </div>

  )
}
