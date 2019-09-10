import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
  state = {
    transaction: [],
    balance: 0,
    inputValue: '',
    deposit: 0,
    withdraw: 0,
  };

  notifyA = () =>
    toast('На счету недостаточно средств для проведения операции!');

  notifyB = () => toast('Введите сумму для проведения операции!');

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDeposit = () => {
    const { inputValue } = this.state;

    const transactionDate = new Date().toLocaleString('en-GB');

    const newDeposit = {
      id: shortid.generate(),
      type: 'Deposit',
      amount: Number(inputValue),
      date: transactionDate,
    };

    if (Number(inputValue) === 0 || Number(inputValue) === '') {
      this.notifyB();
    } else {
      this.setState(prevState => ({
        transaction: [...prevState.transaction, newDeposit],
        balance: prevState.balance + Number(inputValue),
        deposit: prevState.deposit + Number(inputValue),
      }));
    }
  };

  handleWithdraw = () => {
    const { inputValue, balance } = this.state;

    const transactionDate = new Date().toLocaleString('en-GB');

    const newWithdraw = {
      id: shortid.generate(),
      type: 'Withdraw',
      amount: Number(inputValue),
      date: transactionDate,
    };
    if (Number(inputValue) > balance) {
      this.notifyA();
    } else {
      this.setState(prevState => ({
        transaction: [...prevState.transaction, newWithdraw],
        balance: prevState.balance - Number(inputValue),
        withdraw: prevState.withdraw + Number(inputValue),
      }));
    }
  };

  render() {
    const { transaction, inputValue, balance, deposit, withdraw } = this.state;
    return (
      <div className="dashboard">
        <Controls
          input={inputValue}
          handleChange={this.handleChange}
          handleDeposit={this.handleDeposit}
          handleWithdraw={this.handleWithdraw}
        />
        <Balance
          amountDeposit={deposit}
          amountWithdraw={withdraw}
          amountBalance={balance}
        />
        <TransactionHistory transactionArr={transaction} />

        <ToastContainer />
      </div>
    );
  }
}
export default Dashboard;
