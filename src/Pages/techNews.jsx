import React, {Component} from 'react';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';



class TechNewsPage extends Component {

   

  render() {
    return (
      <div className="App">
        <div className="container-fluid p-0">
          <Nav />

          <Footer />
        </div>
      </div>
    )
  }
}

export default TechNewsPage;