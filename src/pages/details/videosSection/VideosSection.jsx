import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    // console.log(data);
    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
            
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {
                            
                            data?.results?.map( (video) => (
                                <div 
                                key={video.id} 
                                className="videoItem"
                                onClick={ () => {
                                    
                                    setVideoId(video.key)
                                    setShow(true)
                                }}

                                >
                                    <div className="videoThumbnail">
                                        <Img src={`https://i.ytimg.com/vi/${video.key}/hq720.jpg`}/>        {/* net pe search krke ye URL dhunda h youtube k poster ka */}
                                        <PlayIcon/>
                                    </div>
                                    <div className="videoTitle">
                                        {video?.name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;