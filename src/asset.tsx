import { client } from 'ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const Asset: React.SFC<RouterProps> = (props) => {
  async function onGetDefaultAccount() {
    const account = await client.api.asset.getDefaultAccount();
    alert('onGetDefaultAccount: ' + JSON.stringify(account));
  }

  async function onMakeTransfer(values: any) {
    const recipient: string = values.recipient;
    const amount: number = Number(values.amount);
    const asset: 'ONT' | 'ONG' = values.asset;

    try {
      const result = await client.api.asset.makeTransfer(recipient, asset, amount);
      alert('onMakeTransfer finished, txHash:' + result);
    } catch (e) {
      alert('onMakeTransfer canceled');
      // tslint:disable-next-line:no-console
      console.log('onMakeTransfer error:', e);
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetDefaultAccount}>getDefaultAccount</button>
      <hr />

      <h2>Transfer</h2>
      <Form
        initialValues={{
          amount: '10',
          asset: 'ONT',
          recipient: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
        }}
        onSubmit={onMakeTransfer}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Recipient</h4>
            <Field name="recipient" component="input" />

            <h4>Amount</h4>
            <Field name="amount" component="input" type="number" />

            <h4>Asset</h4>
            <Field name="asset" component="select">
              <option value="ONT">ONT</option>
              <option value="ONG">ONG</option>
            </Field>

            <br />
            <br />
            <button type="submit">Make transfer</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
