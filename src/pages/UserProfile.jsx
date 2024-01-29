import React, {useEffect, useState} from 'react'
import authService from '../appwrite/auth'

function UserProfile() {

    const [userName, setUserName] = useState("User")

    useEffect(()=>{
        authService.getCurrentUser()
        .then((userData) => {
            setUserName(userData.name)
        })
    }, [])

    return (
        <>
            <div className='w-1/2 p-4'>
                <h3 className='text-3xl flex justify-center items-center'>Welcome &nbsp;<span className='font-semibold'>{userName.toLocaleUpperCase()}</span></h3>
            </div>
        </>
    )
}

export default UserProfile