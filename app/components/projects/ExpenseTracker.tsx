"use client";

import React, { useState } from "react";

interface Expense {
  name: string;
  amount: number;
}

const ExpenseTracker = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = () => {
    if (!name || !amount) return;
    setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
    setName("");
    setAmount("");
  };

  const removeExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center w-80">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Expense name"
            className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-[#252525] dark:text-gray-200"
          />
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-24 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-[#252525] dark:text-gray-200"
          />
          <button onClick={addExpense} className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Add</button>
        </div>
        <div className="overflow-auto max-h-40 text-left text-gray-800 dark:text-gray-200 space-y-1">
          {expenses.map((e, i) => (
            <div key={i} className="flex justify-between items-center">
              <span>{e.name}: ${e.amount.toFixed(2)}</span>
              <button onClick={() => removeExpense(i)} className="text-red-500 hover:text-red-700 font-bold ml-2">X</button>
            </div>
          ))}
        </div>
        <p className="mt-4 font-bold text-gray-800 dark:text-gray-200">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;
