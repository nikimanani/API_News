import React ,{component, Component} from 'react';
import { Navbar } from './component/Navbar';
import { News } from './component/News';

export default class App extends Component{
  c='niki';
  render()
  {
    return(
    <div>
      <Navbar />
      <News />
    </div>)
  }
}