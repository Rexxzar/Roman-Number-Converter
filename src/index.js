import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import reportWebVitals from './reportWebVitals';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    
    function convert(num){
      if(num<0){
        return romanized="Negative Numbers are not allowed, Only Positive";
      }
      else if(num==0){
        return romanized="The Romans did not accept the number ZERO as a real number";
        
      }
      else if(num>4999){
        return romanized="This Porgram only supports numbers that are less than or equal to 4999";
       
      }
      else{
      var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }
  return romanized;
}

}
    
    this.setState({
      submit:convert(this.state.input)
    });
  }
  render() {
    return (
     
<div>
        <h1 className={"wood-text "} >Roman Number Convertor</h1>
        <div className={"container"}>
     
     
        <form onSubmit={this.handleSubmit}>
          <input className={"DivMessage"}
            value={this.state.input}
            onChange={this.handleChange}  className={"form__input form__label DivMessage"} placeholder={"Enter an English number"} type={"number"}/>
        
            <div className={"bloppos"}>
            <div class="buttons">
  <button class="blob-btn" style={{opacity:"2"}}>
   Convert To Roman
    <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>
  </div>
  </div>

 
  </form>
          
  <script src="https://kit.fontawesome.com/2ecae59979.js" crossorigin="anonymous"></script>
        
        
  <input type="text" value={this.state.submit} readonly="readonly"  onFocus={"this.blue"} className="res"></input>
  <div className={"foot"}><footer> Made By Rexxzar <p>Check my other work in <a href={"https://codepen.io/Rexxzar"}>CodePen</a>. <i class="fab fa-twitter"></i></p></footer></div>
        </div>
        
        </div>
      
    );
  }
};
ReactDOM.render(<Counter />, document.getElementById('root'));

reportWebVitals();
