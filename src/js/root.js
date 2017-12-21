import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/pc.css';
import '../css/mobile.css';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import PCIndex from './components/pc_index';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import PCNewsDetails from './components/pc_news_details';
 class Root extends React.Component{

   render(){
       return (
           <div>
              {/* pc端 */}
               <MediaQuery minDeviceWidth={1224}>
             <BrowserRouter>
                 <Switch>
                     <Route exact path="/" component={PCIndex}></Route>
                     <Route path='/details/:uniquekey' component={PCNewsDetails}></Route>
                 </Switch>
             </BrowserRouter>

               </MediaQuery>

              {/* 移动端 */}
               <MediaQuery maxDeviceWidth={1224}>

                   <MobileIndex/>

               </MediaQuery>

           </div>

       );
   }

}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));