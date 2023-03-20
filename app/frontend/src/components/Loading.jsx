import React from 'react';
import { loadingAnimate } from '../images';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => (
  <div>
   <Player
    autoplay
    loop
    src={loadingAnimate}
    style={{ height: '300px', width: '300px', marginTop: '270px'}}
   />
  </div>
);

export default Loading;
