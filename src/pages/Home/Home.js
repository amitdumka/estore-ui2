import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import Typography from '@material-ui/core/Typography' 
import Paper from '@material-ui/core/Paper'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', backgroundColor: 'grey', display: 'flex', flex: 1 , padding: '22'}}
      >      
        
          <div style={{ backgroundColor: 'white', padding: 22 }}>
          <Paper  elevation={3} style={{ backgroundColor: 'white', padding: 22 }}>
        <Typography color="secondary" variant="h4"  align="center"> eStore: Store Management Software</Typography> 
          <Typography color="primary"variant="h6" style={{marginBottom: 15, padding: 15}}>

              Manages your store daily operations online. You can view sale, purchase, expenses, payroll from every where. 
              You can manage multiple stores and can have report for a particular store or multiple store. 
              Store owner(s) can have peace of mind by installing this web app. 
              It can be installed on cloud or in house. 
              
          </Typography>

            <Accordion color="primary">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                          id="panel1a-header">
                <Typography color="secondary" variant="h6">
                  Features
            </Typography>
              </AccordionSummary>
              
              <AccordionDetails>
              <Typography > 
            
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
              </AccordionDetails>
            </Accordion>
          
          </Paper>
        </div>
        
      </Scrollbar>
      
    </Page>
  )
}
export default HomePage
