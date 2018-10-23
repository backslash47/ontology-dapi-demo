import * as React from 'react';
import { RouterProps } from 'react-router';

declare var dApi: any;

export const Network: React.SFC<RouterProps> = (props) => {
  async function onGetBlockHeight() {
    const height = await dApi.client.api.network.getBlockHeight();
    alert('onGetBlockHeight: ' + height);
  }

  async function onGetBlock() {
    const block = await dApi.client.api.network.getBlock({ block: 1 });
    alert('onGetBlock: ' + JSON.stringify(block));
  }

  async function onGetTransaction() {
    const transaction = await dApi.client.api.network.getTransaction({
      txHash: '314e24e5bb0bd88852b2f13e673e5dcdfd53bdab909de8b9812644d6871bc05f'
    });
    // tslint:disable-next-line:no-console
    console.log('onGetTransaction: ' + JSON.stringify(transaction));
  }

  async function onGetBalance() {
    const balance = await dApi.client.api.network.getBalance({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
    alert('onGetBalance: ' + JSON.stringify(balance));
  }

  async function onGetNetwork() {
    const network = await dApi.client.api.network.getNetwork();
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
      <button onClick={onGetTransaction}>getTransaction</button>
      <hr />
      <button onClick={onGetBalance}>getBalance</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
