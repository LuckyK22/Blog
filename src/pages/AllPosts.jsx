import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'
// import UserProfile from './UserProfile';

function AllPost() {

    const [posts, setPosts] = useState([])
    useEffect(() => { }, []);
    appwriteService.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })

    return (
        <>
            <div className='w-full py-8'>
                {/* <UserProfile /> */}
                <div className='w-1/2  float-right'>
                    <Container>
                        <div className="">
                            {
                                posts.map((post) => (
                                    <div key={post.$id} className="p-2 w-full">
                                        <PostCard {...post} />
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default AllPost