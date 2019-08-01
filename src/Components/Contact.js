import React, {Component} from 'react'
import Footer from './Footer'

class Contact extends Component{
  render(){
    return(
      <div>
      <div className="container">
        <div className="contactUS">
          <form>
            <div className="myForm">
              FirstName:<br/><input type="text" className="formField" placeholder="Enter First Name" /><br/><br/>
              LastName:<br/><input type="text" className="formField" placeholder="Enter Last Name" /><br/><br/>
              Email:<br/><input type="email" className="formField" placeholder="Enter Email Id" />
              <br/>
              <input type="submit" className="contactSearch" value="Submit" />
            </div>
          </form>
          <div className="address">
            <h2>This is our HeadOffice</h2>
            <p>5580 Rue Saint-Denis Rosemont.</p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    )
  }
}

export default Contact
