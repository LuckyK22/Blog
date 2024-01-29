import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loader() {
    return (
        <>
            <div className='bg-slate-800 w-full pt-5 px-10'>
                <SkeletonTheme
                    baseColor="#0000"
                    highlightColor="#fff"
                    borderRadius="5rem"
                    duration={2}
                >
                    <div className='flex justify-center items-center'>
                        <Skeleton circle height={50} width={50} containerClassName="avatar-skeleton" />
                        <h1 className="w-full h-fit mx-5"><Skeleton count={1} height={50} /></h1>
                    </div>
                </SkeletonTheme>
            </div>
            <div className='flex justify-center mt-20'>
                <div className=' w-1/3 pt-5 px-10 border-2 border-stone-100 rounded-lg'>
                    <SkeletonTheme
                        baseColor="#0000"
                        highlightColor="#fff"
                        borderRadius="5rem"
                        duration={2}
                    >
                        <div className="w-full">
                            <div className="px-6 me-48 mb-5">
                                <h3><Skeleton /></h3>
                            </div>
                            <h1><Skeleton height={300} /></h1>
                            <div className="px-6 py-4">
                                <h2 className=" mb-2"><Skeleton /></h2>
                                <div className="text-base">
                                    <h3><Skeleton /></h3>
                                </div>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
            </div>
        </>
    )
}

export default Loader