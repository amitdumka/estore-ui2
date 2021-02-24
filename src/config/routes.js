/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import { Route } from 'react-router-dom'
import Auth from 'base-shell/lib/providers/Auth'

const SignIn = lazy(() => import('../app/pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../app/pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../app/pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../app/pages/About'))
const Home = lazy(() => import('../app/pages/Home/Home'))
const DialogDemo = lazy(() => import('../app/pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../app/pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../app/pages/FilterDemo'))
const ListPageDemo = lazy(() => import('../app/pages/ListPageDemo'))
const TabsDemo = lazy(() => import('../app/pages/TabsDemo'))
const MyAccount = lazy(() => import('../app/pages/MyAccount/MyAccount'))
const Dashboard = lazy(() => import('../app/pages/Dashboard'))
const Dashboard2 = lazy(() => import('../app/views/reports/DashboardView'))
const Customers = lazy(() => import('../app/views/ops/CustomerListView'))

const TestMe = lazy(() => import('../testing/testme'))

const Home2 = lazy(() => import('../testing/home'))
const Users = lazy(() => import('../testing/users/Index'))
const Stores =lazy(() => import('../testing/stores/Index'))
const Employees =lazy(() => import('../testing/employees/Index'))

const routes = [
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <UnauthorizedRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <Route path="/testme" exact component={TestMe}/>,
  <UnauthorizedRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <Route path="/about" exact component={About} />,
  <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
  <AuthorizedRoute path="/home" exact component={Home} />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthorizedRoute path="/dashboardM" exact component={Dashboard2} />,
  <AuthorizedRoute path="/dialog_demo" exact component={DialogDemo} />,
  <AuthorizedRoute path="/toast_demo" exact component={ToastDemo} />,
  <AuthorizedRoute path="/filter_demo" exact component={FilterDemo} />,
  <AuthorizedRoute path="/list_page_demo" exact component={ListPageDemo} />,
  <AuthorizedRoute path="/tabs_demo" exact component={TabsDemo} />,
  <AuthorizedRoute path="/payroll/employee" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/payroll/attendance" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/stores/store" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/admin/roles" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/dailysale" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/manaualsale" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/invoice" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/expenses/expense" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/expenses/payment" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/accounts/receipts" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/expenses/rent"   exact component={TabsDemo}/>,
  <AuthorizedRoute path="/expenses/electricitybill" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/expenses/pettycashexpenses" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/banking/bank"    exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/accounts" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/deposit" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/widthrawl" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/secureinfo" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/chequelog"   exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/chequeissue" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/banking/bankaccounts" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/todo" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/tailoring/booking" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/tailoring/delivery" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/tailoring/pendingdelivery" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/tailoring/customerinfo" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/tailoring/customerfeedback" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/payroll/salarypayment" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/payroll/payslip" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/payroll/salary" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/payroll/employeereport" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/pauroll/advreciepts" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/account/cashreciepts" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/cashexpenses" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/transcationmode" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/tax/saletax"  extends Component ={TabsDemo}/>,
  <AuthorizedRoute path="/account/tax/purchasetax" extends Component ={TabsDemo}/>,
  <AuthorizedRoute path="/account/party" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/ledgertype" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/ledgerentry" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/ledger" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/cashbook" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/duelist" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/account/duerecovery" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/saleretunr" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/manualsalereturn" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/onlinesaleretunr" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/onlinesale" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/onlinevendor" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/sales/salereport" exact component={TabsDemo}/>,

  <AuthorizedRoute path="/stores/storeopertations" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/stores/storeadmin" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/stores/cashdetails" exact component={TabsDemo}/>,
  <AuthorizedRoute path="/stores/customers" exact component={Customers}/>,

  
  <Route  path="/home2" extact component={Home2} />,
  <Route path="/users" extact component={Users} />,
  <Route path="/stores" extact component={Stores} />,
  <Route path="/employees" extact component={Employees} />


]

export default routes
