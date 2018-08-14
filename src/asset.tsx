import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Asset: React.SFC<RouterProps> = (props) => {
  async function onGetOwnAccounts() {
    const accounts = await client.api.asset.getOwnAccounts();
    alert('onGetOwnAccounts: ' + JSON.stringify(accounts));
  }

  async function onGetDefaultAccount() {
    const account = await client.api.asset.getDefaultAccount();
    alert('onGetDefaultAccount: ' + JSON.stringify(account));
  }

  async function onMakeTransfer() {
    const account = await client.api.asset.getDefaultAccount();

    try {
      await client.api.asset.makeTransfer(account!, 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns', 'ONT', 5);
      // alert('onMakeTransfer finished: ' + JSON.stringify(result));
    } catch (e) {
      alert('onMakeTransfer canceled');
    }
  }

  return (
    <div>
      <button onClick={onGetOwnAccounts}>getOwnAccounts</button>
      <br />
      <button onClick={onGetDefaultAccount}>getDefaultAccount</button>
      <br />
      <button onClick={onMakeTransfer}>makeTransfer</button>
    </div>
  );
};
