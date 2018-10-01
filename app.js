// TODO

var App = () => (
  <div>
    <Pizza/>
    <Burritos/>
    <GroceryListItem foods={['food']}/>
    <GroceryListItem foods={['really food']}/>
  </div>
);

// var App = function() {
//   return <div>
//     <Pizza/>
//     <Burritos/>
//     <GroceryListItem foods={['food']}/>
//     <GroceryListItem foods={['really food']}/>
//   </div>
// };

var Pizza = () => (
  <ul>Pizzas</ul>

);


var Burritos = () => (
  <ul>Burritos</ul>
  
);


class GroceryListItem extends React.Component {
  
  // var clickFooditems = (event) => {
  //   console.log('clickFooditems');
  // }

  constructor (props) {
    super(props);

    this.state = {
      checkedOff: false, 
      hover: false
    }; 
  
  }

  clickFooditems () {
    this.setState({
      checkedOff: !this.state.checkedOff
    });
  }

  toggleHover () {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      textDecoration: this.state.checkedOff ? 'line-through' : 'none',
      'fontWeight': this.state.hover ? 'bold' : 'none'
      }
    return (
      <li style={style} onMouseOver={this.toggleHover.bind(this)} onClick={this.clickFooditems.bind(this)}> {this.props.foods} </li>
    );
  }
};

var GroceryList = (props) => (
  <ul>
    {props.foods.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));

