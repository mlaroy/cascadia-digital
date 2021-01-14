import React from 'react';
import NewsletterForm from '../components/newsletterForm';

const SubscriptionForm = () => {

    //FORM_URL should be the same as the form action url pointed out above
    const FORM_URL = `https://app.convertkit.com/forms/1815128/subscriptions`;

    return (
        <div className="sub">
            <h2>Join My Newsletter</h2>
            <p>
               If you've found any of my articles useful, subscribe to receive more quality articles straight to your inbox.
            </p>

            <NewsletterForm
                buttonText="Download PDF"
                url={FORM_URL}
            />
            <p className="sub__tag">I won't send you spam and you can unsubscribe at any time</p>

        </div>
    );
};

export default SubscriptionForm
