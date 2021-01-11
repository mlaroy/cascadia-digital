import React, { useState } from 'react'
import { navigate } from "gatsby-link";
import { encode } from '../utilities/formHelpers';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [hasEmptyFields, setHasEmptyFields] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formHasError, setFormHasError] = useState(false);


  const postFormData = async (form) => {
    try {
      const response = await fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          "name": name,
          "email": email,
          "message": message
        })
      })

      if(response) {
        try {
          setSuccess(true);
        }catch(err) {
          console.warn(err);
          setFormHasError(true)
        }

      }
    }catch(err) {
      console.warn(err);
      setSuccess(false);
      setFormHasError(true);
    }
  }

  const handleContactSubmit = e => {
    e.preventDefault();
    setHasEmptyFields(false);
    setFormHasError(false);
    setIsRobot(false);

    if (success) {
      console.warn('Form already submitted');
      return false;
    }

    const allowedFields = [email, name, message];

    // check for bots
    if( honeypot !== '') {
      console.error('This is not an allowed field. No robots allowed!');
      return false;
    }

    // check for empty fields
    const emptyFields = allowedFields.some( field => field === '');

    // stop function because fields are not filled
    if( emptyFields ) {
      setHasEmptyFields(true);
      return false;
    }

    // check for bad words
    const badWords = ['sex', 'hot women', 'get laid', 'ass', 'tits', ' boobs', 'shit', 'fuck'];
    const hasBadWords = badWords.some( word => {
      return message.includes(word);
    })

    if(hasBadWords) {
      setIsRobot(true);
      return false;
    }

    // we are good! Submit the form
    postFormData(e.target)
  }

  return (
    <form onSubmit={(e) => handleContactSubmit(e)} className="mx-auto max-w-lg" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
      <h2 className="text-2xl md:text-3xl">For general inquiries, please send me a note.</h2>
      <input
        type="hidden"
        name="bot-field"
      />
      <input type="text" className="hidden mt-1" value={honeypot} onChange={e => setHoneypot(e.target.value) } />
      <label className="mb-8 block text-sm">
        Name
        <input placeholder="Name" name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="mb-8 block text-sm">
        Email
        <input className="mt-1" placeholder="Email" name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="message" className="block text-sm">Message</label>
      <textarea name="message" className="block mb-8 mt-1" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      {hasEmptyFields && (
        <p className="mb-4 text-red">
          Please ensure all fields are set
        </p>
      )}
      {formHasError && (
        <p className="mb-4 text-red">
          There was an unexpected error. Please try again.
        </p>
      )}
      {isRobot && (
        <p className="mb-4 text-red">
          You might not be human... are you being nice?
        </p>
      )}
      <button className="button">Submit</button>
      {success && (
        <p className="mt-4 text-jp-indigo">
          Thank you! I will try to be in touch as soon as possible.
        </p>
      )}
    </form>
  );
}

export default ContactForm
