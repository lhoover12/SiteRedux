import React from 'react';
import SmlComponent from './Component/SmlComponent'
import MidComponent from './Component/MidComponent'
import LrgComponent from './Component/LrgComponent'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('../src/styles.css')
class App extends React.Component{
     render(){
    return(
<MuiThemeProvider>
  <div className="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main className="mdl-layout__content">
        <div className="demo-blog__posts mdl-grid">

     <SmlComponent />
     <MidComponent />
     <LrgComponent title={"The Dude"} pictue={'dude'} text={"The Dude is a good boy."}/>
     <LrgComponent title={"I am a web developer"} pictue={'dock'} text={"The Best web developer this side of the Mississippi."}/>
     <LrgComponent title={""} pictue={'smoke'} text={"BELIVE."}/>
     <LrgComponent title={"Cmaera Man"} pictue={'lake'} text={"I fix and take pictures"}/>

    </div>
    <footer className="mdl-mini-footer">
        <div className="heart"></div>
    </footer>
      </main>
    </div>

</MuiThemeProvider>
   );
     }
}

export default App;
