import { Component } from "react";
import "./Destinationstyles.css";

class DestinationData extends Component {
  render() {
    return (
       <div className ={this.props.className}> 
                <div className="dest-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    {/* <img alt="img" src="https://images.unsplash.com/photo-1720819029162-8500607ae232?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    
                    <img alt="img" src="https://images.unsplash.com/photo-1709810953776-ee6027ff8104?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
                    <img alt="img" src={this.props.img2}/>
                  
                  </div>
            </div>
    );
  }
}

export default DestinationData;
