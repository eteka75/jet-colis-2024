import React from 'react';

// Définir le type pour les props
interface YouTubeEmbedProps extends React.HTMLProps<HTMLIFrameElement> {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, ...props }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="420"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
        {...props}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
