import React from "react";

interface Props {
	embedId: string
}

const YoutubeVideo: React.FC<Props> = (props: Props) => (
 <div className="video-responsive">
    <iframe
      width="100vw"
      height="auto"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)
export default YoutubeVideo;
