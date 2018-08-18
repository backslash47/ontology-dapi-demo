import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Network: React.SFC<RouterProps> = (props) => {
  async function onGetBlockHeight() {
    const height = await client.api.network.getBlockHeight();
    alert('onGetBlockHeight: ' + height);
  }

  async function onGetBlock() {
    const block = await client.api.network.getBlock(1);
    alert('onGetBlock: ' + JSON.stringify(block));
  }

  async function onGetBalance() {
    const balance = await client.api.network.getBalance('AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU');
    alert('onGetBalance: ' + JSON.stringify(balance));
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
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
