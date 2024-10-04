import React from 'react'

const Privatepage = ({ children }) => {
    const get = localStorage.getItem('token')
    if (!get) {
        return <Navigate to="/login" />
    }
    return children

}

export default Privatepage
