import Hls from 'hls.js';
import { useRef, useEffect } from 'react';
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaCaptionsButton,
  MediaPlaybackRateButton,
  MediaLoadingIndicator,
  MediaTextDisplay,
  MediaChromeRange,
} from 'media-chrome/dist/react';

export default function MediaChrome({ videoSrc, trackSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const video = videoRef.current;

      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });

      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari and other browsers that support HLS natively
      videoRef.current.src = videoSrc;
      videoRef.current.addEventListener('loadedmetadata', function () {
        videoRef.current.play();
      });
    }
  }, []);
  return (
    <div className=''>
      <MediaController defaultSubtitles autoHide='2'>
        <video
          ref={videoRef}
          slot='media'
          src={videoSrc}
          preload='auto'
          playsInline
          muted
          crossOrigin=''
        >
          <track label='English' kind='captions' srcLang='en' src={trackSrc} />
        </video>
        <MediaLoadingIndicator slot='centered-chrome'></MediaLoadingIndicator>
        <MediaControlBar>
          <MediaTimeRange></MediaTimeRange>
          <MediaTimeDisplay showDuration></MediaTimeDisplay>
        </MediaControlBar>
        <MediaControlBar>
          <MediaCaptionsButton></MediaCaptionsButton>
          <MediaSeekBackwardButton seekOffset='10'></MediaSeekBackwardButton>
          <MediaPlayButton></MediaPlayButton>
          <MediaSeekForwardButton seekOffset='10'></MediaSeekForwardButton>
          <span id='spacer'></span>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
          <MediaPlaybackRateButton></MediaPlaybackRateButton>
          <MediaFullscreenButton></MediaFullscreenButton>
        </MediaControlBar>
      </MediaController>
    </div>
  );
}
