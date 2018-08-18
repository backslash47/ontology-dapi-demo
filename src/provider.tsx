import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Provider: React.SFC<RouterProps> = (props) => {
  async function onIsInstalled() {
    const result = await client.api.provider.isInstalled();
    alert('onIsInstalled: ' + result);
  }

  async function onGetName() {
    const name = await client.api.provider.getName();
    alert('onGetName: ' + name);
  }

  async function onGetVersion() {
    const version = await client.api.provider.getVersion();
    alert('onGetVersion: ' + version);
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onIsInstalled}>onIsInstalled</button>
      <hr />
      <button onClick={onGetName}>onGetName</button>
      <hr />
      <button onClick={onGetVersion}>onGetVersion</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
