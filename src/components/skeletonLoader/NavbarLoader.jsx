import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NavbarLoader() {
    return (
        <>
            <div className='bg-slate-800 h-screen w-full min-h-screen pt-5 px-10'>
      <SkeletonTheme
                      baseColor="#e9e9e9"
                      highlightColor="#96c7ff"
                    borderRadius="5rem"
                    duration={4}
                > 
      <div className='flex justify-center items-center'>
        <Skeleton circle height={50} width={50} containerClassName="avatar-skeleton" />
        <h1 className="w-full h-fit mx-5"><Skeleton count={1} height={50} /></h1>
      </div>
      </SkeletonTheme>
    </div>
        </>
    )
}

export default NavbarLoader