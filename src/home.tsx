import * as React from 'react';
import { RouterProps } from 'react-router';

export const Home: React.SFC<RouterProps> = (props) => {
  function onNetwork() {
    props.history.push('/network');
  }

  return (
    <div>
      <button onClick={onNetwork}>Network</button>
    </div>
  );
};
