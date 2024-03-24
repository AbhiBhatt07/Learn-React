import React, {useId} from 'react'


function InputBox({
  labelName,
  amountNumber,
  changingAmount,
  changingCurrency,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {labelName}
        </label>
        <input
          id={amountId}
          value={amountNumber}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          onChange={(e) =>
            changingAmount && changingAmount(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            changingCurrency && changingCurrency(Number(e.target.value))
          }
        >
          {currencyOptions.map((currency) => {
            <option value={currency} key={currency}>
              {currency}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
