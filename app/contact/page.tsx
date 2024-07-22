"use client"
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactLinks } from "@/data/contact.data";
import { Header, Footer } from '@/global/page';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
        status: '',
    });

    const [errors, setErrors] = useState({
        email: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });

        if (name === 'email') {
            validateEmail(value);
        }
    };

    const validateEmail = (email: any) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Please enter a valid email address.',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }
    };

    const handleRecaptcha = (value: any) => {
        setRecaptchaToken(value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (errors.email) {
            setFormState({ ...formState, status: 'Please fix the errors before submitting.' });
            return;
        }

        if (!recaptchaToken) {
            setFormState({ ...formState, status: 'Please verify that you are not a robot.' });
            return;
        }

        setIsLoading(true);
        setIsDisabled(true);

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formState, recaptchaToken }),
        });

        const result = await response.json();

        setFormState({
            ...formState,
            status: result.message,
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: '',
        });

        setIsLoading(false);
        setIsDisabled(false);
    };

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <Header />
                <section className="contact w-full" id="contact">
                    <h2 className="heading font-bold font-jetbrains">Contact<span className="font-jetbrains"> Me!</span></h2>
                    <p className="font-jetbrains text-center">
                        I’d love to hear from you! Whether you have a project idea, a question, or just want to connect,
                        feel free to reach out. Your thoughts and inquiries are important to me, and
                        I’m here to help you with your digital needs.
                        Let’s discuss how we can work together to bring your vision to life.
                    </p>
                    <div className="social-media-contact social-media-contact-justify">
                        {
                            contactLinks.map((link, index) => (
                                <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                    <i className={link.iconClass}></i>
                                </a>
                            ))
                        }
                    </div>
                    <div className="about mt-9">
                        <div className="about-img md:w-[40%]">
                            <img src="/images/contact.png" alt="" />
                        </div>
                        <div className="about-content md:ml-10 w-full md:w-[60%]">
                            {formState.status ?
                                <p id="msg" className='text-center'>{formState.status}</p> :
                                <form onSubmit={handleSubmit}>
                                    <div className="input-box">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            required
                                            disabled={isDisabled}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            required
                                            disabled={isDisabled}
                                        />
                                        {errors.email && <p className="error-message">{errors.email}</p>}
                                    </div>
                                    <div className="input-box">
                                        <input
                                            type="text"
                                            name="mobile"
                                            value={formState.mobile}
                                            onChange={handleChange}
                                            placeholder="Mobile Number"
                                            disabled={isDisabled}
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            placeholder="Subject *"
                                            required
                                            disabled={isDisabled}
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        cols={10}
                                        rows={10}
                                        placeholder="Your Message *"
                                        required
                                        disabled={isDisabled}
                                    ></textarea>
                                    {RECAPTCHA_SITE_KEY && (
                                        <ReCAPTCHA
                                            sitekey={RECAPTCHA_SITE_KEY}
                                            onChange={handleRecaptcha}
                                        />
                                    )}
                                    {recaptchaToken&&
                                        <button type="submit" className="btn" disabled={isDisabled}>
                                        {isLoading ? <span className="loader"></span> : 'Send Message'}
                                    </button>
                                    }
                                </form>}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}