import { client } from 'ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Identity: React.SFC<RouterProps> = (props) => {

  async function onGetIdentity() {
    const identity = await client.api.identity.getIdentity();
    alert('onGetIdentity: ' + JSON.stringify(identity));
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetIdentity}>getIdentity</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
