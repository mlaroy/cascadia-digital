import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import BetterWebsitesMagnet from '../components/betterWebsitesMagnet';

const NotFoundPage = () => (
  <Layout>
    <Section>
      <div className="mx-auto lg:w-2/3 has-bg">

        <h1>Improve your website with these tips</h1>
        <p className="text-xl mb-8">
          Did you know that search engines like Google factor in how fast your site is in its search results
          algorithm?
        </p>

        <p className="text-xl mb-8">
          There are so many things to consider when it comes to making your website work the way it’s
          supposed to. You might have questions like, "why is my site slow?" or "why doesn’t my content
          rank higher in Google search results?"  Well, there are probably some things you need to
          do differently, that you should have been doing all along. But, there’s no time like the present
          to get started doing things right.
        </p>

        <p className="text-xl mb-8">
          Some of the things you probably need to address include:
        </p>

        <ul className="leading-none mb-8">
          <li className="text-xl mb-4 ">Your images might be too big</li>
          <li className="text-xl mb-4 ">Your HTML might not be formatted properly</li>
        </ul>

        <p className="text-xl mb-8">
          With this free guide, you will learn why these things changes are important, and what you can do
          to easily make these improvements to your website.
        </p>

        {/* <p className="text-xl mb-8">
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
        </p> */}
        <p className="text-xl">
          Enter your email to get this free PDF, <span className="italic">Making Better Websites</span> right in your inbox.
        </p>
      </div>
      <div className="mx-auto lg:w-2/3">
        <div className="mt-24 w-full mx-auto">
          <BetterWebsitesMagnet />
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage