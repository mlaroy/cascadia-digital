import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import fun from '../images/fun.svg'
import ServicesBumper from '../components/servicesBumper'
import Section from '../components/section'

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
    const { location } = this.props;
    return(
      <Layout>
        <Helmet>
          <title>Contact | Cascadia Digital</title>
          <meta property="og:title" content="Contact | Cascadia Digital" />
          <meta property="og:url" content={ location.href } />
        </Helmet>
        <Hero title="Get in touch" img={fun} fade={true}>
          Find out if we are a fit to work together
        </Hero>
        <Section>
          <h2>Some heading</h2>
          {renderContactLink(this.state)}
        </Section>
        <ServicesBumper className="bg-grey-lightest" />
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
      <p className="mt-16">
        <a href="mailto&#58;info%40c&#97;s%63%61d%&#54;9%61&#46;di&#103;&#37;&#54;&#57;&#116;al" className="button">Email Cascadia Digital</a>
      </p>
    );
  }
}

export default ContactPage
