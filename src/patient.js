import React, { Fragment } from "react";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Wizard from "./Wizard";

const patient = () => {
   
   
const blue = {
   50: '#F0F7FF',
   100: '#C2E0FF',
   200: '#80BFFF',
   300: '#66B2FF',
   400: '#B9C3DBF',
   500: '#2b68a1',
   600: '#3065D0',
   700: '#0059B2',
   800: '#004C99',
   900: '#003A75',
 };
 
 const Tab = styled(TabUnstyled)`
   font-family: IBM Plex Sans, sans-serif;
   color: white;
   cursor: pointer;
   font-size: 0.875rem;
   font-weight: bold;
   background-color: transparent;
   width: 100%;
   padding: 12px 16px;
   margin: 6px 6px;
   border: none;
   border-radius: 5px;
   display: flex;
   justify-content: center;
 
   &:hover {
     background-color: ${blue[400]};
   }
 
   &:focus {
     color: #fff;
     border-radius: 3px;
     outline: 2px solid ${blue[200]};
     outline-offset: 2px;
   }
 
   &.${tabUnstyledClasses.selected} {
     background-color: ${blue[50]};
     color: ${blue[600]};
   }
 
   &.${buttonUnstyledClasses.disabled} {
     opacity: 0.5;
     cursor: not-allowed;
   }
 `;
 
 const TabPanel = styled(TabPanelUnstyled)`
   width: 100%;
   font-family: IBM Plex Sans, sans-serif;
   font-size: 0.875rem;
 `;
 
 const TabsList = styled(TabsListUnstyled)`
   min-width: 320px;
   background-color: ${blue[500]};
   border-radius: 8px;
   margin-bottom: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   align-content: space-between;
 `;
 
   return (
      
      <Fragment>
           <div className="row justify-content-center h-100 align-items-center">
    <div className="col-md-8">
       <div className="authincation-content">
          <div className="row no-gutters">
             <div className="col-xl-12">
                <div className="auth-form">
           <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabsList>

      <TabPanel value={0}> 
<Wizard/>
     </TabPanel>




      <TabPanel value={1}>Second content</TabPanel>

    </TabsUnstyled>
        </div></div></div></div></div></div>
      </Fragment>
   );
};

export default patient;
