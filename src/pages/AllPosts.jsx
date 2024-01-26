import {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'

function AllPost() {

    const [posts, setPosts] = useState([])
    useEffect(() => {}, []);
    appwriteService.getPosts([])
    .then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <h1>Lucky Kanathe</h1>
            <Container>
                <div className="bg-rose-500">
                    {
                        posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/2">
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPost