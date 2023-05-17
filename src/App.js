import React, { useEffect, useState } from "react";




import { Header} from './components';
import {Home, Cart} from './pages';
import { Routes, Route } from "react-router-dom";


// import store from './redux/store';



function App() {



  
  return (

    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' Component={Home} exact > </Route>
            <Route path='/cart' Component={Cart} exact />
        
          </Routes>
      
        </div>
      </div>
    </div>
  )
}

//  class App extends React.Component{

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//            this.props.setBouquets(data.bouquets);
//   })
// }
//   // render() {
//   //   return (

//   //   <div className="App">
//   //     <div className="wrapper">
//   //       <Header />
//   //       <div className="content">
//   //         <Routes>
//   //           <Route path='/' exact element={<Home items={this.props.items} />}> </Route>
//   //           <Route path='/cart' exact element={<Cart />}> </Route>
        
//   //         </Routes>
      
//   //       </div>
//   //     </div>
//   //   </div>
//   //   )
//   // }
//  }

// export default connect ( 
//   (state)=> {
//     return {
//       items: state.bouquets.items,
//       filters: state.filters,
//     };
//    },
//    (dispatch) => {
//     return {
//       setBouquets: (items) => dispatch(setBouquets(items)),
//     };
//    },
// )(App);
export default App;