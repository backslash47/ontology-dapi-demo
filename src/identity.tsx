import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Identity: React.SFC<RouterProps> = (props) => {

  async function onGetIdentity() {
    const identity = await client.api.identity.getIdentity();
    alert('onGetIdentity: ' + JSON.stringify(identity));
  }

  async function onGetDDO() {
    const identity = await client.api.identity.getIdentity();
    const ddo = await client.api.identity.getDDO({identity});
    alert('onGetDDO: ' + JSON.stringify(ddo));
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetIdentity}>getIdentity</button>
      <hr />
      <button onClick={onGetDDO}>getDDO</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
