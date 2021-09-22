import React from 'react'
import Helmet from 'react-helmet';
import Layout from '../components/layout'
import Section from '../components/section'
import BetterWebsitesMagnet from '../components/betterWebsitesMagnet';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
        <title>Free PDF: 3 Ways To Improve Your Website’s Quality | Cascadia Digital</title>
        <meta name="description" property="og:description" content="Learn what improvements you can make to make your website load
          faster, how you can improve your SEO, and how to properly use HTML tags in a way that makes sense." />
        <meta property="og:title" content="Free PDF: 3 Ways To Improve Your Website’s Quality | Cascadia Digital" />
      </Helmet>
    <Section>
      <div className="mx-auto lg:w-2/3 has-bg">

        <h1>Free PDF: 3 Ways To Improve Your Website’s Quality</h1>

        <h2>Are you losing out on sales because your website’s performance is turning people away?</h2>

        <ul className="text-xl list-disc list-inside mb-8">
          <li className="mb-1">Does your website take <span className="italic">forever</span> to load?</li>
          <li className="mb-1">Is your site not ranking in search because of poor SEO?</li>
          <li className="mb-1">Are you unsure how to use proper HTML tags, and just <span className="italic">winging</span> it?</li>
        </ul>

        <p className="text-xl mb-12">
          There are so many things to consider when it comes to making your website work the way it’s
          supposed to. You might have questions like, "why is my site slow?" or "why doesn’t my content
          rank higher in Google search results?"  Well, there are probably some things you need to
          do differently, that you should have been doing all along. But, there’s no time like the present
          to get started doing things right.
        </p>

        <h2>Imagine getting better leads and more sales with a better performing website</h2>

        <ul className="text-xl list-disc list-inside mb-8">
          <li className="mb-1">Imagine having a website that loads fast</li>
          <li className="mb-1">Imaging finding your website on higher search result pages</li>
          <li className="mb-1">Imagine knowing just what HTML to use and how to use it</li>
        </ul>

        <h2>My free PDF guide to improving website quality is the answer.</h2>

        <p className="text-xl mb-8">
          With this free guide, you will learn what improvements you can make to make your website load
          faster, how you can improve your SEO, and how to properly use HTML tags in a way that makes sense.
        </p>

        <p className="text-xl">
          Enter your email to get this free PDF, <span className="italic">3 Ways To Improve Your Website’s Quality</span> right in your inbox.
          In addition, you’ll receive a short series of emails exanding on the topics covered in the PDF, so that
          you can go even further in making your website meet your expectations.
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
