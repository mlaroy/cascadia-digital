import React, { Component } from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import fun from '../images/fun.svg'

class ContactPage extends Component {
  state = {
    hasJS: false
  }
  componentDidMount() {
    this.addBodyClass();
  }
  addBodyClass() {
    if(typeof window !== 'undefined'){
      const body = document.body;
      body.classList.add('js');
      this.setState({
        hasJS: true
      })
    }
  }
  render() {
    return(
      <Layout>
        <Hero title="Work with Cascadia Digital" img={fun}>
          Get in touch to find out how we can work together
        </Hero>
        {renderContactLink(this.state)}
      </Layout>
    )
  }
}

const renderContactLink = ({hasJS})  => {
  if(!hasJS) {
    return (
      <noscript>This requires JavaScript, sorry!</noscript>
    );
  } else {
    return (
      <p className="md:text-center px-4">
        <a href="mailto&#58;info%40c&#97;s%63%61d%&#54;9%61&#46;di&#103;&#37;&#54;&#57;&#116;al" className="button">Send an Email</a>
      </p>
    );
  }
}

export default ContactPage
