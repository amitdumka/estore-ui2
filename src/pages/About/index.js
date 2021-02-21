import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import { Typography } from '@material-ui/core'

const About = () => {
  const [source, setSource] = useState(null)
  const intl = useIntl()

  const loadData = async () => {
    const data = await fetch(
      'https://raw.githubusercontent.com/TarikHuber/react-most-wanted/master/README.md'
    )
    const text = await data.text()
    setSource(text)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'about', defaultMessage: 'About' })}
    >
      <Scrollbar style={{ backgroundColor: 'white', padding: 22 }}>
        <div style={{ backgroundColor: 'light-grey', padding: 22 }}>
        <Typography color="secondary" variant="h4"  align="center"> eStore: Store Management Software</Typography> 
          <Typography color="primary"variant="h6" style={{marginBottom: 15, padding: 15}}>

              Manages your store daily operations online. You can view sale, purchase, expenses, payroll from every where. 
              You can manage multiple stores and can have report for a particular store or multiple store. 
              Store owner(s) can have peace of mind by installing this web app. 
              It can be installed on cloud or in house. 
              
          </Typography>

          <Typography color="primary"> 
            Features:
            <ol>
              <li>Payroll</li>
              <li>Sales</li>
              <li>Purchase</li>
              <li>Expenses/Payments</li>
              <li>Assests Management</li>
              <li>Multiple Sites</li>
              <li>Secure Role based authazation</li>
              <li>Cloud Based software</li>
              <li>Stock Management</li>
              <li>Custom Reports</li>
              <li>Customer relation management</li>
              <li>Online Invoice email and payments</li>
              <li>Email and telegram app alerts on sale , expenses etc. or based on condtion.</li>
              <li>Automatic import daily sale data from voyager retails software</li>
              <li>Get data from capliary</li>
              <li>Tailoirng management</li>
              <li>Custom Tailoirng Data record</li>
              <li>Track booking, delivery, complain , qualtity , customer remarks</li>
              <li>Mobile App fom Staff for thier Payroll and incentive data</li>
              <li>Mobile app for customer to track points, custom tailoirng, sale information, and promotions</li>
              <li>Future addition for able to sale from the Mobile App</li>
            </ol>
          </Typography>
        </div>
      </Scrollbar>
    </Page>
  )
}
export default About