import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((total, amount) => {
    return total + amount 
  }, 0).toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}
