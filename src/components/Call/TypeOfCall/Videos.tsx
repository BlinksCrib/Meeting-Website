import { useEffect, useRef } from 'react';
import { useRemoteVideo } from '@huddle01/react/hooks';

const Videos = () => {
  const videoRef = useRef(null);

  const {
    stream,
  } = useRemoteVideo({
    peerId: "remote-peer-id", // Make sure to replace "remote-peer-id" with an actual ID or a variable that holds the ID.
    onClose: (reason: { code: number; tag: string; message: string }) => {
      // Handle the closure of the video stream
      console.log(`Stream closed: ${reason.code} - ${reason.tag}, ${reason.message}`);
    },
    onPlayable: (data: { stream: MediaStream; track: MediaStreamTrack; label: string }) => {
      // Handle the video stream being playable 
      console.log(`Stream is playable: ${data.label}`);
      if (videoRef.current) {
        videoRef.current.srcObject = data.stream;
      }
    }
  });

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
    </div>
  );
};

export default Videos;
