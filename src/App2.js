
import React, { Component } from 'react';
 
class App2 extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null
      };
  }

  componentDidMount() {
    fetch('menuData.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      
    }
 
  render() {
    
    console.log(new Date().getTime());
    console.log(this.state.data && this.state.data.menu.length);
    return (
      <div className="App">
      {
        this.state.data && this.state.data.menu.length>0 && this.state.data.menu.map((item)=><p>{item.menuName}</p>)
      }
     </div>
    );
  }
}
 
export default App2;