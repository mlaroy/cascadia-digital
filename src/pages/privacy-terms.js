import React from 'react'
import Helmet from 'react-helmet'
import Section from '../components/section'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ContactBumper from '../components/contactBumper'

const ServicesPage = props => (
  <Layout>
    <Helmet>
      <title>Privacy &amp; Terms | Cascadia Digital</title>
      <meta property="og:title" content="Services | Cascadia Digital" />
      <meta property="og:url" content={ props.location.href } />
    </Helmet>
    <Hero title="Privacy & Terms" fade={false}></Hero>
    <div className="bg-grey-lightest">
      <Section>
        <h2>Privacy Policy</h2>

        <p className="text-md md:text-xl leading-normal mb-8">Personal privacy is an important topic to us. Our Privacy Policy provides you with clarity on how Cascadia Digital Inc. collects and makes use of personal information collected through our website and mobile website, <a href="https://cascadia.digital" className="link">https://cascadia.digital</a> (the “Site”). This statement also outlines who we share data with and our methods for protecting data collected. This Privacy Policy pertains specifically to data collected through our Site, and not through other services, websites, digital, or physical channels. If you do not agree with the terms of this Privacy Policy, please exit the Site. For questions or concerns related to this Privacy Policy, please contact us at info@cascadia.digital.</p>

        <h3 className="text-2xl md:text-3xl">The information we collect.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Personal data we collect and store from time to time through our Site and/or when you contact us may include:</p>
        <ul className="text-md md:text-xl leading-normal mb-8">
            <li>Name, email, and other contact information;</li>
            <li>IP or Internet Protocol addresses through web analytics software including Google Analytics;</li>
            <li>Any other information you may provide to us.</li>
        </ul>

        <p className="text-md md:text-xl leading-normal mb-8">We also collect personal information through use of “cookies” which are files that are stored on your computer. Cookies enable personalization of Site content and features, and allow our analytics software, Google Analytics, to track your use of our website, providing us with data on the overall performance of our Site and its content, as well as traffic sources. We do this so that we can improve our Site based on how our visitors use it. For more information about Google’s use of cookies, visit Google Analytics. To read about Google Analytics’ Privacy Policy, visit <a href="http://www.google.com/analytics/learn/privacy.html" className="link">http://www.google.com/analytics/learn/privacy.html</a>.
          For more general information on how cookies work, visit <a href="https://www.aboutcookies.org" className="linl">https://www.aboutcookies.org</a>. Note, if you prefer to reduce tracking of your web activity, you can set your browser to block cookies.</p>

        <h3 className="text-2xl md:text-3xl">How we use the data we collect.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">We care about your privacy. We will never not sell, share, or otherwise distribute your personal information to any third party. We will only use the personal information we collect for the purposes listed below: </p>

        <ul className="text-md md:text-xl leading-normal mb-8">
            <li>To evaluate and respond to your inquiries through email and web form submissions;</li>
            <li>To communicate with you through our email newsletters;</li>
            <li>To track analyze your use of our Site;</li>
            <li>To enforce the Terms of Use of our Site;</li>
            <li>To apply with any applicable legal requirements, industry standards, and policies; and</li>
            <li>To understand the needs of our prospects and clients, to make necessary improvements to our Site, messaging, and marketing, and to develop new services.</li>
        </ul>

        <p className="text-md md:text-xl leading-normal mb-8">Personal information may from time to time be provided to third parties services who perform services on our behalf in support of the purposes outlined above, such as marketing automation services, analytics and heatmapping services, and other services that help us to better communicate and serve our visitors, prospects, and clients. Only the personal information required to enable these services will be provided to them for the agreed upon purposes, and we require third parties through contract to not sell or provide your personal information to third parties except as required by law.</p>

        <h3 className="text-2xl md:text-3xl">Transferring of data.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">As our Site traffic is global in nature, we may from time to time transfer the personal information we collect through the Site to countries other than the the country in which the information was originally collected. By visiting our Site, and/or by submitting your information through web forms on our Site, you are consenting to this transfer of personal data, and you recognize that data protection laws may differ from country to country. We will maintain our protection of your personal information when we transfer data.</p>

        <h3 className="text-2xl md:text-3xl">Security.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">We do our best to protect the personal information you provide to us through technical and organizational measures from unlawful destruction, accidental loss, unauthorized use, alteration, disclosure or access. As no electronic data transmission or storage of information is able to be 100% secure, please be aware that we cannot ensure or warrant the security of any information to you provide to us.</p>

        <h3 className="text-2xl md:text-3xl">Linked websites.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Our Site may include links to third party websites which are not under our control or managed by us. These third party Sites may have their own published Privacy Policies which we encourage you to familiarize yourself with. We are not responsible for the content contained in linked Sites, your use of linked Sites, or the privacy practices of linked Sites.</p>

        <h3 className="text-2xl md:text-3xl">Children’s privacy.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">The Site is not directed to children under the age of 13. We do not knowingly collect, use, or disclose personal information from children under the age of 13 on the Site. If we discover that we have unknowingly collected personally identifiable information from a visitor under the age of 13, we will take necessary steps to delete such information from our systems.</p>

        <h3 className="text-2xl md:text-3xl">Your right to request correction and deletion of your information.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">In accordance to any applicable laws, you may have the right to access certain personal information we maintain about you and obtain a copy of that information. You may also request that personal information be updated, corrected, modified, or deleted, as applicable. To exercise your rights to modify your information, please contact us at info@cascadia.digital. To verify your identity before making such modifications to stored information, we may require proof of identity to confirm that you are the individual entitled to request access. Please note that your right to access personal information may be limited in some circumstances by applicable laws.</p>

        <h3 className="text-2xl md:text-3xl">Your consent.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">By visiting <a href="https://cascadia.digital" className="link">https://cascadia.digital</a>, you are accepting to the terms described in this Privacy Policy and the Terms of Use.</p>

        <h3 className="text-2xl md:text-3xl">Length of data retention.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">We will store the personal information we collect for a period of up to 6 years. You may have the opportunity to opt out or update at any point as set forth herein.</p>

        <h3 className="text-2xl md:text-3xl">Changes to this Privacy Policy.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">We reserve the right to modify our Privacy Policy from time to time and will post any revisions on the Site to make visitors aware of such changes. We will indicate at the top of this Privacy Policy the date of any applicable modifications. As a visitor to our Site, it is your responsibility to periodically familiarize yourself with updates to our Privacy Policy, and your future use of the Site will constitute your acceptance of any changes made herein.</p>

        <h3 className="text-2xl md:text-3xl">Getting in touch with us.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Questions, comments, and concerns in regards to this Privacy Policy can be sent via email to info@cascadia.digital.</p>



        <h2>Terms of Use</h2>

        <h3 className="text-2xl md:text-3xl">Terms.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">The following Terms of Use govern your access and use of <a href="https://cascadia.digital" className="link">https://cascadia.digital</a> (the “Site”). Please read these Terms of Use carefully before using the services of this Site as this sets out the legally binding terms and conditions for your use of this Site. Where used in this notice, “Us”, “We”, and “Our” refers to Cascadia Digital Inc. and its subsidiaries, and “you” and “your” refers to any individual, company, or legal entity that may from time to time visit and use this Site.</p>

        <p className="text-md md:text-xl leading-normal mb-8">Specific terms and conditions may also apply to the Content incorporated within this Site (“Content”) and to specific content, information, or documents you may upload or submit to the Site (“User Content”). Such specific terms may be in addition to these Terms of Use or, where and then only to the extent expressly specified, may supersede these Terms of Use.</p>

        <h3 className="text-2xl md:text-3xl">Your acceptance of the Terms of Use.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">By accessing, browsing or using this Site, you are agreeing to be bound by these Terms of Use as well as all applicable laws and regulations, and you agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.</p>

        <h3 className="text-2xl md:text-3xl">Modification to the Terms of Use.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Terms of Use may be modified by Us at our sole discretion, at any time without notice to you. Changes to the Terms of Use will take effect immediately. By continuing to access our Site, you will be deemed to have accepted such changes to the Terms of Use. It is your sole responsibility to review the Terms of Use for changes prior to use of the Site. We reserve the right to discontinue or make changes or updates with respect to the Site and its Content at any time, without notice.</p>

        <h3 className="text-2xl md:text-3xl">Privacy notice.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Personal information provided through this Site shall be used in accordance with Our Privacy Policy and these Terms of Use are subject to the Privacy Policy as posted on this Site.</p>

        <h3 className="text-2xl md:text-3xl">IP, copyright, and trademarks.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">By using this Site, you accept that the Content within this Site is the property of Cascadia Digital Inc. and is subject to and protected by Canadian, United States, and International copyright and intellectual property laws and rights. Such Content includes all text, information, imagery, photography, software, code, design, and the configuration of such elements, herein referred to collectively as the “Content”. All rights to the Content not expressly granted in these Terms of Use are reserved to their respective owners.</p>

        <p className="text-md md:text-xl leading-normal mb-8">Except as authorized by Us within these Terms of Use or as indicated within the the Site itself, you are not authorized to save, copy, distribute, republish, display, post, create derivative works from, or otherwise use any of the Content in any form or by any means, without the prior written consent from Cascadia Digital Inc. As a user of the Site, you are authorized only to view and download Content for personal, non-commercial use. You are restricted from using the Content for any public or commercial purposes, including adapting or modifying the content for any purpose, in any way. All trademarks, trade names, and logos (collectively, the “Marks”) contained within the Site are the sole property of Cascadia Digital Inc. and may not be copied, imitated, or otherwise used, in whole or in part, without written consent of Cascadia Digital Inc. The elements that make up the design of the Site, including all visual elements such as graphics, buttons, icons, and visual imagery, are considered Marks of Cascadia Digital Inc. and may not be saved, copied, imitated, or reproduced, in whole or in part, without written consent of Cascadia Digital Inc. and we will, where necessary, enforce the full extent of the law to protect the integrity of our Content and Marks.</p>

        <h3 className="text-2xl md:text-3xl">Links to third party Sites.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Our Site may be linked to third party Sites, and such third party Sites may link to our Site (collectively, “Linked Sites”). Such links from our Site that direct you to a third party Site are provided for your convenience, and such links do not constitute an endorsement or approval of the Content that exists on such third party Sites. It is your responsibility to understand the Terms of Use of any third party site you visit, directly, or through links that exist on our Site. Cascadia Digital Inc. will not be held responsible or liable, directly or indirectly, to you or any other person or entity, for any loss or damage arising from your use of any Linked Sites or the Content, goods, services, or information accessed through such Linked Sites.</p>

        <h3 className="text-2xl md:text-3xl">Disclaimer of warranties.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Cascadia Digital Inc. strives to provide accurate Content within this Site, however, we make no warranties or representations as to the accuracy of the Content on this Site.</p>

        <p className="text-md md:text-xl leading-normal mb-8">VISITORS TO THE SITE UNDERSTAND AGREE THAT ANY USE OF THE SITE IS AT THEIR OWN SOLE RISK. THIS SITE AND THE CONTENT WITHIN THE SITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT REPRESENTATION OR WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. Cascadia Digital Inc. DISCLAIMS ANY AND ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, THAT OUR SITE WILL MEET YOUR REQUIREMENTS, WILL BE ACCURATE AND UP TO DATE, WILL BE AVAILABLE AND UNINTERRUPTED, WILL BE SECURE, WILL BE ERROR-FREE, OR WILL BE USEFUL TO YOU. ANY CONTENT OR MATERIALS YOU CHOOSE TO DOWNLOAD OR SAVE FROM THE SITE WILL BE PROVIDED AT YOUR OWN RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGES CAUSED TO YOUR COMPUTER SYSTEM AS A RESULT FROM YOUR USE OF OUR SITE, INCLUDING ANY DAMAGES CAUSED BY COMPUTER VIRUSES. LOCAL LAWS MAY PROHIBIT THE EXCLUSION OF CERTAIN WARRANTIES, AS SUCH, THE ABOVE STATEMENT MAY NOT FULLY APPLY TO YOU.</p>

        <h3 className="text-2xl md:text-3xl">Disclaimer of damages and limitation of liability.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">Cascadia Digital Inc. AND ITS SUBSIDIARIES WILL NOT BE LIABLE, UNDER ANY CIRCUMSTANCES, FOR DAMAGES OF ANY KIND ARISING OUT OF, OR IN CONNECTION WITH, OR RELATING TO, YOUR ACCESS TO, OR USE OF, OR INABILITY TO USE, THIS SITE OR ANY MATERIAL, OR ANY OTHER WEBSITE YOU ACCESS THROUGH A LINK FROM THIS WEB SITE, OR ANY INCORRECT OR INACCURATE INFORMATION ON THIS SITE. THIS LIMITATION OF LIABILITY APPLIES TO ALL DAMAGES OF ANY KIND, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO PROPERTY DAMAGE, LOSS OF USE, LOSS OF DATA, LOSS OF BUSINESS, ECONOMIC LOSS, OR LOSS OF PROFITS), WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE OR LOSS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU EXPRESSLY WAIVE ALL CLAIMS AGAINST US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, SUPPLIERS AND ENGINEERS, THAT MAY ARISE FROM YOUR ACCESS OR USE OF THIS SITE.</p>

        <h3 className="text-2xl md:text-3xl">Indemnification and release.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">By using the Site, you agree to defend, indemnify, and hold us, our subsidiaries, and each of their respective officers, directors, employees, contractors and suppliers harmless from any and all claims, liabilities, damages, losses, costs, and expenses, including, but not limited to, attorneys’ fees and expenses, arising in any way from or in connection with your use of the Site or any service available on or through the Site, the uploading, posting, e-mailing, or transmission of any User Content or other materials by you or users authorized by you, infringement of any Proprietary Material, or any violation by you of these Terms and Use, our Privacy Policy or any other policy posted from time to time on the Site applicable to your use of the Site. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you agree to assist and cooperate with us in asserting any available defenses.</p>

        <h3 className="text-2xl md:text-3xl">No unlawful or prohibited activity.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">As a condition of your use of this Site, you agree not to use the Site for any purpose that is malicious, unlawful, or prohibited by these Terms of Use. You further agree that you are responsible for your use of and communications on the Site. You further agree not to transmit through the Site any unlawful, harassing, libelous, abusive, threatening, or harmful material of any kind or nature. You further agree not to transmit any material that encourages conduct that could constitute a criminal offense, give rise to civil liability, violates the privacy rights of others, infringes others' intellectual property rights or otherwise violates any applicable local, state, national or international law. You agree to use reasonable efforts to scan and remove any viruses or other contaminating or destructive features before submitting any material.</p>

        <p className="text-md md:text-xl leading-normal mb-8">Cascadia Digital Inc. reserves the sole right to suspend or terminate your access to this Site and prohibit any and all current and future use of this Site (or any portion thereof) by you, if you fail to comply with any term or provision of these Terms of Use or your use is harmful to the interests of another user of this Site.</p>

        <h3 className="text-2xl md:text-3xl">Shut-down of Site.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Site (or any part thereof) with or without notice or consent. Cascadia Digital Inc. and its subsidiaries shall have no responsibility or liability for failure to store or delete any Content or User Content submitted to the Site.</p>

        <h3 className="text-2xl md:text-3xl">Governing law and dispute resolution.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">These Terms of Use shall be governed by, and construed in accordance with, the laws of Canada and the laws of the Province of British Columbia, without giving effect to conflicts of law principles thereof. We do not represent that the material and information on this Site are appropriate or available in all national locations or languages. Persons who choose to access the Site from other locations do so on their own volition, and are responsible for complying with local laws, if and to the extent local laws are applicable.</p>

        <h3 className="text-2xl md:text-3xl">Severability.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">If any provision of these Terms of Use are found to be unenforceable or invalid by a court of competent jurisdiction, then the invalid or unenforceable provision will be replaced by a valid, enforceable provision that most closely matches the intent of the original provision, and the validity and enforceability of any remaining provisions shall not be affected.</p>

        <h3 className="text-2xl md:text-3xl">No waiver.</h3>

        <p className="text-md md:text-xl leading-normal mb-8">The failure of Cascadia Digital Inc. to insist upon or enforce strict performance of these Terms of Use shall not be construed as a waiver by Cascadia Digital Inc. and its subsidiaries of any provision or any right it has to enforce these Terms of Use, nor shall any course of conduct between Cascadia Digital Inc. and you or any other party be deemed to modify any provision of these Terms of Use. </p>

      </Section>
    </div>
    <ContactBumper />
  </Layout>
)

export default ServicesPage
