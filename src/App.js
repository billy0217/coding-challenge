import data from "./data/data.json";
import List from "./Components/List/List";
import RevenueTotal from "./Components/Calculations/RevenueTotal";
import ExpenseTotal from "./Components/Calculations/ExpenseTotal";
import GrossProfitMargin from "./Components/Calculations/GrossProfitMargin";
import NetProfitMargin from "./Components/Calculations/NetProfitMargin";
import WorkingCapitalRatio from "./Components/Calculations/WorkingCapitalRatio";

function App() {

  const accountData = data.data;
  const revenueData = accountData.filter((r) => r.account_category === "revenue");
  const expenseData = accountData.filter((e) => e.account_category === "expense");

  console.log(expenseData);

  return (
    <div className="App">
        {/* {
          accountData?.map((info) => {
            return (
              <List account={info} key={info.account_identifier}/>
            )
            
          })
        } */}
        <RevenueTotal account={revenueData}/>
        <ExpenseTotal account={expenseData}/>
        <GrossProfitMargin account={accountData} />
        <NetProfitMargin account={accountData}/>
        <WorkingCapitalRatio account={accountData} />

    </div>
  );
}

export default App;
