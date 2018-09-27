import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Register from './Register';
import Signin from './signin';
import Pop from './pop';
import Contacts from './contacts';
import Info from './info';
import Forgot from './forgot';
import Cardlist from './cardlist';

class App extends Component {

constructor(props){
  super(props);
  this.state={
     route:'home',
     name:'',
     users:[]
  }
}

componentDidMount(){
   fetch('http://localhost:3000/info',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
   })
    }).then(function(response){
       return response.json();
    }).then(data=>{
        
        this.setState({users:data})
        console.log(this.state.users);
        
    })
  }


onRouteChange=(random)=>{
  this.setState({route:random});
}
onNameChange=(random)=>{
  this.setState({name:random});
}


  render() {
    
    return (

       
      <div>
      {
       this.state.route ==='register' 
         ?
      
        <Register register={this.onRouteChange} />
        :(
          this.state.route ==='signin'
         ?
          <Signin sign={this.onRouteChange} onName={this.onNameChange}/>
 
         : (
            this.state.route ==='home'
            ?
            <Pop pop={this.onRouteChange}/>
            :(
              this.state.route ==='contact' 
              ?
                <Contacts contact={this.onRouteChange} name={this.state.name}/>
              :(
                this.state.route==='forgot'
                ?
                <Forgot forgot={this.onRouteChange}/>
                :
                <div>
                <Info info={this.onRouteChange} />
                <Cardlist table={this.state.users}/>
</div>

                )
                  
              )
            
     )
  )
    
  
   }
     </div>
    );
  }
}

export default App;
