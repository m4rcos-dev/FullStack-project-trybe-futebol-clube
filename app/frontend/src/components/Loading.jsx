import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => (
  <div>
   <Player
    autoplay
    loop
    src="https://assets4.lottiefiles.com/packages/lf20_xFpiNt.json"
    style={{ height: '300px', width: '300px', marginTop: '270px'}}
   />
  </div>
);

export default Loading;
