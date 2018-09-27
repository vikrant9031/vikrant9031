import React from 'react';
import 'tachyons' ;
import Zoom from 'react-reveal/Zoom';

 class Register extends React.Component{

    constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
   }

  OnEmailChange=(event)=>{
    this.setState({email:event.target.value})
    console.log(this.state.email);
  }

  OnPasswordChange=(event)=>{
    this.setState({password:event.target.value})
    console.log(this.state.password);
  }


  onRegister=()=>{
   fetch('http://localhost:3000/register',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:this.state.email,
             password:this.state.password

   })
    }).then(function(response){
        return  response.json();

        })
        .then(data=>{
      if(data==='successfully'){
        console.log("successfully inserted");
        this.props.register('home');
      }
      else{
        console.log("error in insertion");
         this.props.register('register');
      }
    })
 }
  
	render(){

    const {register}=this.props;

    return (
    <Zoom right cascade>
    <div style={{marginLeft:500, marginTop:200}} className="">
    <article className="o-90    pa4 black-80   bw5 br4 pa4  mw6 " >
  <form action="sign-up_submit" method="get" accept-charset="utf-8"  id="grass">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="ph5 mh5 i f3  fw6" style={{color:'white'}}>Register</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f6 pointer" for="email-address " style={{color:'white'}}>Email address</label>
        <input onChange={this.OnEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure ttc  bg-transparent hover-bg-black hover-white w-100" 
        type="email" name="email-address"  id="email-address" ></input>
      </div>
      <div class="mt3">
        <label className="db fw4 lh-copy f6 pointer" for="password" style={{color:'white'}}>Password</label>
        <input  onChange={this.OnPasswordChange}  
        className="b pa2 input-reset ba bg-transparent ttc  bg-transparent hover-bg-black hover-white w-100" 
        type="password" name="password"  id="password" ></input>
      </div>
    </fieldset>
    <div className="mt3"><div onClick={this.onRegister} style={{width:100}} className="b  ph3 pv2 hover-bg-green bg-white input-reset ba b--black bg-transparent grow pointer f6"  value="Sign Up">Sign up</div></div>
   
  </form>
</article>
</div>
</Zoom>

    );
  }
}
 export default Register;