import React from 'react'
// import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
import NewsletterForm from './newsletterForm';

const BetterWebsitesMagnet = () => {

    //FORM_URL should be the same as the form action url pointed out above
    const FORM_URL = `815128`;

    return (
        <div className="p-8 shadow rounded">
            <div className="formkit-header" data-element="header">
                <h2 className="text-3xl">Get Your Free Website Improvement Tips</h2>
            </div>

            <NewsletterForm url={FORM_URL} buttonText="Download PDF" icon={true} />

            {/* <label className="block mb-4">
                <span className="block mb-2 text-sm">Email Address</span>
                <input
                    name="email_address"
                    placeholder="your@email.com" required="" type="email"
                    onChange={handleInputChange}
                    value={email}
                />
            </label>
            <button type="submit" className="button mb-4">
                <MdCloudDownload color="white" fontSize="24px" style={{
                    verticalAlign: 'text-top',
                    marginRight: '0.5rem'
                }} /> Download PDF
            </button> */}
            <div className="text-sm">
                I respect your privacy and will <span className="italic">never</span> send you spam or share your email.
            </div>
        </div>
    )
}

export default BetterWebsitesMagnet;

