import React, { Component } from 'react';
import './App.css';

export default class CreditTranfer extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = { description: '' };
  }

  onSubmit(e) {
        e.preventDefault();
        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: this.state.description})
        });

        this.setState({description: ''});
    }

  onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

  render() {
    return (
      <div className="App">
        <form
            method="post"
            action="https://rt05.kasikornbank.com/pgpayment/payment.aspx"
          >
            <input type="hidden" id="MERCHANT2" name="MERCHANT2" value="451005121796001" />
            <input type="hidden" id="TERM2" name="TERM2" value="74402534" />
            <input type="hidden" id="AMOUNT2" name="AMOUNT2" value="000000000100" />
            <input type="hidden" id="URL2" name="URL2" value="http://www.confserve.org/cjass/_registration/chk_crd.php" />
            <input type="hidden" id="RESPURL" name="RESPURL" value="" />
            <input type="hidden" id="IPCUST2" name="IPCUST2" value="" />
            <input type="hidden" id="DETAIL2" name="DETAIL2" value="Test Payment" />
            <input type="hidden" id="INVMERCHANT" name="INVMERCHANT" value="20004" />
            invoid n.20004
            <input type="hidden" id="checksum" name="checksum" value="" />
            <input type="submit" />
          </form>
      </div>

    );
  }
}

App.defaultProps = {
    action: 'https://rt05.kasikornbank.com/pgpayment/payment.aspx',
    method: 'post'
};
