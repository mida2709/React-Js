import { avatar, Card, CardContent, Grid, Typography } from "@mui/material"
import usePostService from "../services/post"
import { useEffect, useState } from "react"
import TimeAgo from "timeago-react"

export const Feed = () => {
    const { getPosts } = usePostService()
    const [posts, setPosts] = useState([])
    const fetchPost = async () => {
        const _posts = await getPosts()
        set
    }









const [credentials] = useLocalStorage('credential')
const navigate = useNavigate()
useEffect(() => {
    !credentials && navigate('./login')
}, [credentials])
return <div>
    <div style={{maxWidth: 1080, margin: 'auto'}}>

        <Grid container spacing={1}>
            <Grid item md={3} lg={3}>
            </Grid>
            <Grid item md={3} lg={9}>
                <PostForm/>
            </Grid>
            <Grid item md={3} lg={9}>
                    <Feed/>
            </Grid>
        </Grid>
    </div>
</div>
}