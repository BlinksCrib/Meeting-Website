import { Video } from '@huddle01/react/components';
import { useRemoteVideo } from '@huddle01/react/hooks';
 
const Videos = () => {
  const { stream } = useRemoteVideo();
  return (
    {stream && <Video stream={audioStream} />}
  )
}
 
export default Videos;