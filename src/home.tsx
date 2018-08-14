import * as React from 'react';
import { RouterProps } from 'react-router';

export const Home: React.SFC<RouterProps> = (props) => {
  function onNetwork() {
    props.history.push('/network');
  }

  function onAsset() {
    props.history.push('/asset');
  }

  return (
    <div>
      <button onClick={onNetwork}>Network</button>
      <br />
      <button onClick={onAsset}>Asset</button>
    </div>
  );
};
