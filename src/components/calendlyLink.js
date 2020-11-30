import React, { Component } from 'react';

class CalendlyPopup extends Component {

    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }

    bookCalendlyLink = (e) => {
        console.log('click');
        window.Calendly.initPopupWidget({url: 'https://calendly.com/cascadia-digital/30-minute-consulatation'});
    }

    render() {
        return (
            <>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                <button className="button" onClick={this.bookCalendlyLink}>Book a free consultation</button>
            </>
        )
    }
};

export default CalendlyPopup;
