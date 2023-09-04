import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Slidebar from "./scenes/global/Slidebar";
import Dashboard from "./scenes/dashboard";
import BudgetOverview from "./scenes/budget-and-expenses/BudgetOverview";
import IncomeOverview from "./scenes/budget-and-expenses/IncomeOverview";
import SpendingInsights from "./scenes/budget-and-expenses/SpendingInsights";
import UpcomingBills from "./scenes/bill-reminders/UpcomingBills";
import PaidBills from "./scenes/bill-reminders/PaidBills";
import RecurringBills from "./scenes/bill-reminders/RecurringBills";
import AchievedGoals from "./scenes/saving-goals/AchievedGoals";
import CurrentGoals from "./scenes/saving-goals/CurrentGoals";
import OngoingDebts from "./scenes/debt-management/OngoingDebts";
import RepaymentStrategies from "./scenes//debt-management/RepaymentStrategies";


// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          < Slidebar />
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
          <Topbar />
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              <Route path="/budget-overview" element={<BudgetOverview />} />
              <Route path="/income-overview" element={<IncomeOverview />} />
              <Route path="/spending-insights" element={<SpendingInsights />} />
              <Route path="/upcoming-bills" element={<UpcomingBills />} />
              <Route path="/recurring-bills" element={<RecurringBills />} />
              <Route path="/paid-bills" element={<PaidBills />} />
              <Route path="/achieved-goals" element={<AchievedGoals />} />
              <Route path="/current-goals" element={<CurrentGoals />} />
              <Route path="/ongoing-debts" element={<OngoingDebts />} />
              <Route path="/repayment-strategies" element={<RepaymentStrategies />} />

              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
