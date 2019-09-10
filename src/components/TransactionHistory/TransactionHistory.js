import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactionArr }) => {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactionArr.map(({ id, type, amount, date }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      typeOfTransaction: PropTypes,
      amount: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
