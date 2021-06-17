import logo from './logo.svg';
import './App.css';
import { createUser } from './redux/redux';
import { connect } from 'react-redux';
import store from './redux/redux';

function App(props) {
  return (
    <div className='App'>
      <button onClick={() => console.log(props.newUser('kobi'))}>click me</button>
      <button onClick={() => console.log(props)}>click me2</button>
      <p>hello world</p>
      <p>{JSON.stringify(props.a)}</p>
    </div>
  );
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = { newUser: createUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
