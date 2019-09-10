import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ input, handleChange, handleDeposit, handleWithdraw }) => {
  return (
    <section className={s.controls}>
      <input
        className={s.controls_input}
        type="text"
        value={input}
        name="inputValue"
        onChange={handleChange}
      />
      <button
        type="button"
        className={s.controls_buttonDeposit}
        onClick={handleDeposit}
      >
        Deposit
      </button>
      <button type="button" onClick={handleWithdraw}>
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDeposit: PropTypes.func.isRequired,
  handleWithdraw: PropTypes.func.isRequired,
};

export default Controls;
