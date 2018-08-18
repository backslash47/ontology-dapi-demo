import { client, Parameter } from 'ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const SmartContract: React.SFC<RouterProps> = (props) => {
  async function onScCall(values: any) {
    const account = await client.api.asset.getDefaultAccount();

    const contract: string = values.contract;
    const method: string = values.method;
    const gasPrice: number = Number(values.gasPrice);
    const gasLimit: number = Number(values.gasLimit);
    const params: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];

    try {
      const result = await client.api.smartContract.invoke(account, contract, method, params, gasPrice, gasLimit, []);
      alert('onScCall finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCall canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCall error:', e);
    }
  }

  async function onScCallRead(values: any) {
    const contract: string = values.contract;
    const method: string = values.method;
    const params: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];

    try {
      const result = await client.api.smartContract.invokeRead(contract, method, params);
      alert('onScCallRead finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCallRead canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCallRead error:', e);
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>ScCall</h2>
      <Form
        initialValues={{
          contract: 'bd76a5917e0444d4b615b87c5912362164676dc7',
          method: 'Add',
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onScCall}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />

            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Call SC</button>
          </form>
        )}
      />
      <hr />
      <h2>ScCall read</h2>
      <Form
        initialValues={{
          contract: 'bd76a5917e0444d4b615b87c5912362164676dc7',
          method: 'Add'
        }}
        onSubmit={onScCallRead}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <br />
            <br />
            <button type="submit">Call SC ReadOnly</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
