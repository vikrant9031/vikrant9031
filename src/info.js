import React from 'react';
import TextLoop from 'react-text-loop';

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }

  
render(){

  const {info,name,company,work,email,mobile}=this.props;
    return (
   <div> 
 <article  onClick= {()=>info('contact')} className="f2 bg-light-pink dim pointer hover-black fl w-3 mv1 ph5 red shadow-3">Back to form</article>
<div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellspacing="20">
      <thead>
        <tr>
          <th className="fw6  f3 bb b--black-20 tl pb3  bg-white">Name</th>
          <th className="fw6  f3 bb b--black-20 tl pb3  bg-white">work</th>
          <th className="fw6  f3 bb b--black-20 tl pb3  bg-white">Email</th>
          <th className="fw6  f3 bb b--black-20 tl pb3  bg-white">mobile</th>
          <th className="fw6  f3 bb b--black-20 tl pb3  bg-white">company</th>

          
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr>
          <td className="pv3 f3 b bb b--black-20">{name}</td>
          <td className="pv3 f3 b bb b--black-20">{work}</td>
          <td className="pv3 f3 b bb b--black-20">{email}</td>
          <td className="pv3 f3 b bb b--black-20">{mobile}</td>
          <td className="pv3 f3 b bb b--black-20">{company}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>
</div>


    );
}
}
 export default Info;