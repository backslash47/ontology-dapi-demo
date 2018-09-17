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

  function onProvider() {
    props.history.push('/provider');
  }

  function onMessage() {
    props.history.push('/message');
  }

  return (
    <div>
      <button onClick={onProvider}>Provider</button>
      <hr />
      <button onClick={onNetwork}>Network</button>
      <hr />
      <button onClick={onMessage}>Messaage</button>
      <hr />
      <button onClick={onAsset}>Asset</button>
      <hr />
      <button onClick={onSmartContract}>Smart contract</button>
    </div>
  );
};
