import React from 'react';															
// import Login from './components/Login.js';															
																												
// import Productlist from './Productlist.js';
import Add from './Add.js';
import Home from './Home.js';
															
const routes = [															
	{			
										
		path : '/',													
		exact : true,													
		main : ()=> <Home></Home>												
	},														
	{														
		path : '/Add',													
		exact : true,										
		main : ({history})=> <Add history={history} />													
	},														
	{														
		path : '/products/:id/edit',													
		exact : true,													
		main : ({match , history})=> <Add  match ={match} history={history}/>													
	},																											
];															
															
															
export default routes;															
															