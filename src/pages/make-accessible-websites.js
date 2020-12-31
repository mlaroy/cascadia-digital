import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import A11yMagnet from '../components/a11yMagnet';

const NotFoundPage = () => (
  <Layout>
    <Section>
      <div className="mx-auto lg:w-2/3 has-bg">

        <h1>Make your website more accessible</h1>

        <p className="text-xl mb-8">
          More and more, accessible websites are required by law in many jurisdictions. Governments and businesses
          alike have faced lawsuits by not making sure their sites are accessible to all users. By making your
          site compliant, you can not only avoid legal issues, but <em>you are also making your site more accessible to
          more people</em>, which is good for everyone, right?
        </p>
        <p className="text-2xl mb-4 font-bold font-serif">How do I know this stuff?</p>
        <p className="text-xl mb-8">
          I have been working on making websites more accessible throughout my entire career
          as a front-end developer. I also studied accessibility with <a href="https://webaim.org/" className="link">WebAIM</a> in Logan, Utah,
          industry leaders in web accessible training, as well as the makers of the WAVE accessibility tool.
        </p>
        <p className="text-xl mb-4">
          Signup for my mailing list to get this free PDF, <span className="italic">5 Tips for More Accessible Websites.</span>
        </p>
      </div>
      <div className="mx-auto lg:w-2/3">
        <div className="mt-24 w-full mx-auto">
          <A11yMagnet />
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
