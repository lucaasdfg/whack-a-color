import React, {Component} from "react"

class Demo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bgColor: "",
        randomItem: ""
      }
    }
  
    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random()*this.myArray.length)]
    )
    componentDidMount(){
        this.setState({randomItem:this.randomItemGenerator()})
    }
    
    boxClick = (e) => {
      this.setState({
        bgColor: this.state.randomItem
      })
    }
    
    myArray = [
        "red",
        "green"
    ];
    componentWillUnmount() { // clear the interval when the component is unmounted
        this.setState({
        randomItem: ""
        })
      }
    render() {
      return (
        <div className="App">
  
  
          <article className='experimentsHolder'>
            <h2>Test 3</h2>
            <p>This is an example of an onClick event by react.</p>
            <div className="boxClickCss" 
            style={{backgroundColor: this.state.bgColor}}
             onClick={this.boxClick}>Click Me!</div>
          </article>
          <div><h3>{this.state.randomItem}</h3></div>
                <div className="shift" onClick={this.boxClick}>red</div>
                <div className="shift" style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}>red</div>
  
        </div>
      );
    }
  }
  export default Demo;