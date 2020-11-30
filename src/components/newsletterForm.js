import React, { useState } from 'react'
import MdCloudDownload from 'react-ionicons/lib/MdCloudDownload'
import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
import MdClose from 'react-ionicons/lib/MdClose'
import MdWarning from 'react-ionicons/lib/MdWarning'

const NewsletterForm = props => {

    const { buttonText, url, children, flex = false, icon = false } = props;

    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const FORM_URL = `https://app.convertkit.com/forms/${url}/subscriptions`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( email === '' || firstName === '') {
            setStatus('FAILED');
            return;
        }

        const data = new FormData(e.target);
        try {
            const response = await fetch(
                FORM_URL,
                {
                    method: 'post',
                    body: data,
                    headers: {
                        accept: 'application/json',
                    },
                }
            );

            const json = await response.json();
            // console.log(json);
            if (json.status === 'success') {
                setStatus('SUCCESS');
                return;
            }
            if (json.status === 'failed') {
                setStatus('FAILED');
                return;
            }
        } catch (err) {
            setStatus('ERROR');
            console.log(err);
        } finally {
            setEmail('');
            setFirstName('')
        }
    };

    const handleInputChange = event => {
        const { value, name } = event.target;
        if( name === 'email_address') {
            setEmail(value);
        } else {
            setFirstName(value);
        }
    }

    return (
        <>
            {children}
            <form
                className={`newsletter-form ${flex ? 'sm:flex flex-around flex-wrap' : ''}`}
                action={FORM_URL}
                method="post"
                onSubmit={handleSubmit}
            >
                <label className={flex ? 'sm:mr-2 mb-2 block flex-1' : 'mb-2 block'}>
                    <span className="skip-link">First Name</span>
                    <input
                        type="text"
                        name="fields[first_name]"
                        placeholder="First name"
                        onChange={handleInputChange}
                        value={firstName}
                    />
                </label>

                <label className={flex ? 'mb-2 block flex-1' : 'mb-2 block'}>
                    <span className="skip-link">Your Email</span>
                    <input
                        type="email"
                        name="email_address"
                        placeholder="your@email.com"
                        onChange={handleInputChange}
                        value={email}
                    />
                </label>

                <button className={flex ? 'button mb-2 w-full' : 'button mt-2 mb-4' }>
                    {icon && (
                        <MdCloudDownload color="white" fontSize="24px" style={{
                            verticalAlign: 'text-top',
                            marginRight: '0.5rem'
                            }}
                        />
                    )}
                    {buttonText}
                </button>
                {status === 'SUCCESS' && <p className="form-message mt-4 text-base md:text-lg flex items-center"><MdCheckmark color="#fff" style={{ marginRight: '8px' }}/> Please go confirm your subscription!</p>}
                {status === 'FAILED' && <p className="form-message mt-4 text-base md:textlgl flex items-center"><MdWarning color="#fff" style={{ marginRight: '8px' }}/> Please ensure all fields are filled.</p>}
                {status === 'ERROR' && <p className="form-message mt-4 text-base md:text-lg flex items-center"><MdClose color="#fff" style={{ marginRight: '8px' }}/> Oops, Something went wrong! Try again.</p>}
            </form>
        </>
    )
}

export default NewsletterForm;
