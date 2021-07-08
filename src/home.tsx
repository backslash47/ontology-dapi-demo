import * as React from 'react';
import { RouterProps } from 'react-router';

export const Home: React.SFC<RouterProps> = (props) => {
  function onNetwork() {
    props.history.push('/network');
  }

  function onAsset() {
    props.history.push('/asset');
  }

  function onIdentity() {
    props.history.push('/identity');
  }

  function onOep4() {
    props.history.push('/oep4');
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
      <button onClick={onMessage}>Message</button>
      <hr />
      <button onClick={onAsset}>Asset</button>
      <hr />
      <button onClick={onOep4}>OEP-4</button>
      <hr />
      <button onClick={onIdentity}>Identity</button>
      <hr />
      <button onClick={onSmartContract}>Smart Contract</button>
    </div>
  );
};
