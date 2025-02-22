const VideoPlayerSection = () => {
    return (
        <div className="w-full aspect-[16/9] min-h-96 py-16">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/5Fa4kIzPXaE?si=l85pdXRyyNY7gTwf"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayerSection;