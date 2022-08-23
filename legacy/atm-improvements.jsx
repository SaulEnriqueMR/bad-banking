const ATMDeposit = ({ onChange, isDeposit, validTransaction, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);

  return (
    <>
      {isDeposit !== null && 
        <label className="label huge">
          <h3> {choice[Number(!isDeposit)]}</h3>
          <input id="number-input" type="number" width="200" onChange={onChange}></input>
          <input disabled={!isValid} type="submit" width="200" value="Submit" id="submit-input"></input>
        </label>
      }
    </>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(null);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    if (event.target.value === 0) {
      setValidTransaction(false);
      return;
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
      setDeposit(Number(event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(true);
  };

  const handleModeSelect = (event) => {
    const value = event.target.value;
    setAtmMode(value);
    if (value === '') {
      setIsDeposit(null);
    } else {
      setIsDeposit(value === "Deposit");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} validTransaction={validTransaction} isValid={validTransaction}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));
