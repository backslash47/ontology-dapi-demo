import * as React from 'react';
import { RouterProps } from 'react-router';

export const Home: React.SFC<RouterProps> = (props) => {
  function onNetwork() {
    props.history.push('/network');
  }

  function onAsset() {
    props.history.push('/asset');
  }

  function onSmartContract() {
    props.history.push('/smart-contract');
  }

  return (
    <div>
      <button onClick={onNetwork}>Network</button>
      <hr />
      <button onClick={onAsset}>Asset</button>
      <hr />
      <button onClick={onSmartContract}>Smart contract</button>
    </div>
  );
};
