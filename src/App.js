import data from "./data/data.json";
import List from "./Components/List/List";
import RevenueTotal from "./Components/Calculations/RevenueTotal";
import ExpenseTotal from "./Components/Calculations/ExpenseTotal";

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
        <ExpenseTotal account={revenueData}/>
    </div>
  );
}

export default App;
