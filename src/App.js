import data from "./data/data.json";
import RevenueTotal from "./Components/Calculations/RevenueTotal";
import ExpenseTotal from "./Components/Calculations/ExpenseTotal";
import GrossProfitMargin from "./Components/Calculations/GrossProfitMargin";
import NetProfitMargin from "./Components/Calculations/NetProfitMargin";
import WorkingCapitalRatio from "./Components/Calculations/WorkingCapitalRatio";
import Card from "./Components/Card/Card";
import "./index.css"
import "./App.css"

function App() {
  const accountData = data.data;
  const revenueData = accountData.filter((r) => r.account_category === "revenue");
  const expenseData = accountData.filter((e) => e.account_category === "expense");

  return (
    <div className="App">
        <Card>
          <RevenueTotal account={revenueData}/>
          <ExpenseTotal account={expenseData}/>
          <GrossProfitMargin account={accountData} />
          <NetProfitMargin account={accountData}/>
          <WorkingCapitalRatio account={accountData} />
        </Card>
    </div>
  );
}

export default App;
