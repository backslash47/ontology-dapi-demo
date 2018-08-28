import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Network: React.SFC<RouterProps> = (props) => {
  async function onGetBlockHeight() {
    const height = await client.api.network.getBlockHeight();
    alert('onGetBlockHeight: ' + height);
  }

  async function onGetBlock() {
    const block = await client.api.network.getBlock({ block: 1 });
    alert('onGetBlock: ' + JSON.stringify(block));
  }

  async function onGetBalance() {
    const balance = await client.api.network.getBalance({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
    alert('onGetBalance: ' + JSON.stringify(balance));
  }

  async function onGetNetwork() {
    const network = await client.api.network.getNetwork();
    alert('onGetNetwork: ' + JSON.stringify(network));
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetNetwork}>getNetwork</button>
      <hr />
      <button onClick={onGetBlockHeight}>getBlockHeight</button>
      <hr />
      <button onClick={onGetBlock}>getBlock</button>
      <hr />
      <button onClick={onGetBalance}>getBalance</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
