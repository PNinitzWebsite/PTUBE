import React from "react"
import Layout from "../components/Layout"
import VideoPlayer from "../components/VideoPlayer"

const IndexPage = () => {
    return (
        <Layout>
            <VideoPlayer publicId='https://res.cloudinary.com/pninitz/video/upload/v1663243279/NONT_TANONT_%E0%B9%82%E0%B8%95%E0%B8%B0%E0%B8%A3%E0%B8%A1_melt_Official_MV_1080p_qnvkrc.mp4'/>
        </Layout>
    )
}

export default IndexPage;