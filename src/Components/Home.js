import React, {Component} from 'react'
import Pic from '../Images/banner.jfif'
import Footer from './Footer'
import '../App.css'

class Home extends Component{
  render(){
    return(
      <div>
        <img className="banner" src={Pic} alt="Banner" />
          <div className="container">
            <div className="bodyContent">
              <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum
               has been the industry's standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
               including versions of Lorem Ipsum.</p>
               <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not
               only five centuries, but also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</p>
                <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                 has been the industry's standard dummy text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                 including versions of Lorem Ipsum.</p>
                 <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not
                 only five centuries, but also the leap into electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
                  <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                   has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum.</p>
            </div>
            <div className="sideBar">
            <h2>Our Games</h2>
              <ul className="sidebar-list">
                <li>Cricket</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Kabbaddi</li>
                <li>Kushti</li>
                <li>Throw</li>
              </ul>
              <h2>Our Products</h2>
                <ul className="sidebar-list">
                  <li>Bat</li>
                  <li>Ball</li>
                  <li>Band</li>
                  <li>Spikes</li>
                  <li>Shoes</li>
                  <li>Rope</li>
                </ul>
                <h2>Our Grounds</h2>
                  <ul className="sidebar-list">
                    <li>Gurgaon</li>
                    <li>Faridabad</li>
                    <li>Sonipat</li>
                    <li>Jagadhari</li>
                  </ul>
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}

export default Home
