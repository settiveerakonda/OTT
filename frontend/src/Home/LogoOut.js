import React, { useEffect } from 'react'

export default function LogOut() {
    useEffect(()=>{
        // alert("loggeed out");
        localStorage.clear()
        window.location.href='/Login'
},[])
}
