"use client"

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactLinks } from "@/data/contact.data";
import { Header, Footer } from '@/global/page';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

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
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => {
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formState.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formState.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFocus = (field: string) => {
        setActiveField(field);
    };

    const handleBlur = () => {
        setActiveField(null);
    };

    const handleRecaptcha = (value: any) => {
        setRecaptchaToken(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!recaptchaToken) {
            setFormState(prev => ({ ...prev, status: 'Please verify that you are not a robot.' }));
            return;
        }

        setIsLoading(true);
        setIsDisabled(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formState, recaptchaToken }),
            });

            const result = await response.json();

            if (response.ok) {
                setFormSubmitted(true);
                setFormState({
                    name: '',
                    email: '',
                    mobile: '',
                    subject: '',
                    message: '',
                    status: result.message,
                });
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            setFormState(prev => ({
                ...prev,
                status: error instanceof Error ? error.message : 'An error occurred. Please try again later.',
            }));
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    };

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="bg-[--bg-color] min-h-screen"
        >
            <Header />
            
            {/* Hero Section */}
            <motion.section 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="relative w-full py-32 md:py-40 px-4 overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[--main-color]/10 via-[--main-color]/5 to-transparent"></div>
                    <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[--bg-color] to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[--bg-color] to-transparent"></div>
                </div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[--main-color]/10 rounded-full text-sm font-medium mb-6 border border-[--main-color]/20">
                            <span className="w-2 h-2 rounded-full bg-[--main-color] animate-pulse"></span>
                            <span className="text-[--main-color]">Available for Projects</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-jetbrains mb-6">
                            Let's Build Something
                            <span className="block mt-2 bg-gradient-to-r from-[--main-color] to-pink-500 bg-clip-text text-transparent">
                                Extraordinary
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mb-12 font-jetbrains leading-relaxed">
                            Have an exciting project in mind? Let's collaborate and create something amazing together.
                        </p>
                        
                        <motion.div 
                            variants={staggerContainer}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            {contactLinks.map((link, index) => (
                                <motion.a 
                                    key={index}
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6 }}
                                    href={link.href}
                                    aria-label={link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[--main-color] to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                                    <div className="relative flex items-center gap-3 px-6 py-4 bg-[--second-bg-color] border border-gray-800 rounded-xl transition-all duration-300 group-hover:border-[--main-color]">
                                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[--main-color]/20 to-pink-500/20 rounded-lg">
                                            <i className={`${link.iconClass} text-xl text-[--main-color] group-hover:text-white transition-colors duration-300`}></i>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-400">Connect via</span>
                                            <span className="font-medium text-white group-hover:text-[--main-color] transition-colors duration-300">{link.name}</span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
            
            {/* Contact Form Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full py-20 px-4 bg-gradient-to-b from-transparent via-[--second-bg-color]/30 to-transparent"
            >
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Left Side - Image and Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-5/12 sticky top-8"
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[--main-color]/30 to-pink-500/30 rounded-2xl blur-xl"></div>
                                <div className="relative bg-[--second-bg-color] p-8 rounded-2xl border border-gray-800/50 overflow-hidden backdrop-blur-sm">
                                    <motion.img 
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4 }}
                                        src="/images/contact.png" 
                                        alt="Contact illustration" 
                                        className="w-full h-auto rounded-xl mb-10 shadow-2xl"
                                    />
                                    
                                    <motion.div 
                                        variants={staggerContainer}
                                        initial="initial"
                                        animate="animate"
                                        className="space-y-6"
                                    >
                                        <motion.div 
                                            variants={fadeInUp}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[--bg-color]/50 hover:to-[--bg-color]/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[--main-color]/20 to-pink-500/20 text-[--main-color] rounded-xl">
                                                <i className="bx bx-map text-2xl"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1">Location</h3>
                                                <p className="text-gray-400">Kolkata, West Bengal, India</p>
                                            </div>
                                        </motion.div>
                                        
                                        <motion.div 
                                            variants={fadeInUp}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[--bg-color]/50 hover:to-[--bg-color]/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[--main-color]/20 to-pink-500/20 text-[--main-color] rounded-xl">
                                                <i className="bx bx-envelope text-2xl"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1">Email</h3>
                                                <a 
                                                    href="mailto:suryabasak10@gmail.com" 
                                                    className="text-gray-400 hover:text-[--main-color] transition-colors"
                                                >
                                                    suryabasak10@gmail.com
                                                </a>
                                            </div>
                                        </motion.div>
                                        
                                        <motion.div 
                                            variants={fadeInUp}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[--bg-color]/50 hover:to-[--bg-color]/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[--main-color]/20 to-pink-500/20 text-[--main-color] rounded-xl">
                                                <i className="bx bx-time text-2xl"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1">Response Time</h3>
                                                <p className="text-gray-400">Usually within 24 hours</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Right Side - Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="w-full lg:w-7/12"
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[--main-color]/5 via-pink-500/20 to-[--main-color]/30 rounded-2xl blur-xl"></div>
                                <div className="relative bg-[--second-bg-color] p-8 md:p-10 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold font-jetbrains mb-3">
                                            Send Me a Message
                                        </h2>
                                        <p className="text-gray-400">Fill out the form below and I'll get back to you promptly.</p>
                                    </div>
                                    
                                    {formSubmitted ? (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-16 px-4"
                                        >
                                            <div className="w-20 h-20 bg-[--main-color]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <i className="bx bx-check text-4xl text-[--main-color]"></i>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                                            <p className="text-gray-400 mb-8 max-w-md mx-auto">{formState.status || "Thank you for reaching out. I'll get back to you as soon as possible."}</p>
                                            <motion.button 
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    setFormSubmitted(false);
                                                    setFormState(prev => ({ ...prev, status: '' }));
                                                }}
                                                className="px-8 py-4 bg-[--main-color] text-[--bg-color] rounded-xl font-medium hover:bg-[--main-color]/90 transition-all duration-300 shadow-lg shadow-[--main-color]/20"
                                            >
                                                Send Another Message
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        <motion.form 
                                            variants={staggerContainer}
                                            initial="initial"
                                            animate="animate"
                                            onSubmit={handleSubmit} 
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <motion.div 
                                                    variants={fadeInUp}
                                                    transition={{ duration: 0.4 }}
                                                    className="relative group"
                                                >
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formState.name}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('name')}
                                                        onBlur={handleBlur}
                                                        className={`w-full bg-[--bg-color] border-2 ${
                                                            errors.name 
                                                                ? 'border-red-500/50 focus:border-red-500' 
                                                                : activeField === 'name'
                                                                    ? 'border-[--main-color]' 
                                                                    : 'border-gray-800 group-hover:border-gray-700 focus:border-[--main-color]'
                                                        } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                                                        placeholder="John Doe"
                                                    />
                                                    {errors.name && (
                                                        <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>
                                                    )}
                                                </motion.div>

                                                <motion.div 
                                                    variants={fadeInUp}
                                                    transition={{ duration: 0.4 }}
                                                    className="relative group"
                                                >
                                                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formState.email}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('email')}
                                                        onBlur={handleBlur}
                                                        className={`w-full bg-[--bg-color] border-2 ${
                                                            errors.email 
                                                                ? 'border-red-500/50 focus:border-red-500' 
                                                                : activeField === 'email'
                                                                    ? 'border-[--main-color]' 
                                                                    : 'border-gray-800 group-hover:border-gray-700 focus:border-[--main-color]'
                                                        } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                                                        placeholder="john@example.com"
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>
                                                    )}
                                                </motion.div>
                                            </div>

                                            <motion.div 
                                                variants={fadeInUp}
                                                transition={{ duration: 0.4 }}
                                                className="relative group"
                                            >
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('subject')}
                                                    onBlur={handleBlur}
                                                    className={`w-full bg-[--bg-color] border-2 ${
                                                        errors.subject 
                                                            ? 'border-red-500/50 focus:border-red-500' 
                                                            : activeField === 'subject'
                                                                ? 'border-[--main-color]' 
                                                                : 'border-gray-800 group-hover:border-gray-700 focus:border-[--main-color]'
                                                    } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                                                    placeholder="What's this about?"
                                                />
                                                {errors.subject && (
                                                    <p className="text-red-500 text-sm mt-1.5">{errors.subject}</p>
                                                )}
                                            </motion.div>

                                            <motion.div 
                                                variants={fadeInUp}
                                                transition={{ duration: 0.4 }}
                                                className="relative group"
                                            >
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('message')}
                                                    onBlur={handleBlur}
                                                    rows={6}
                                                    className={`w-full bg-[--bg-color] border-2 ${
                                                        errors.message 
                                                            ? 'border-red-500/50 focus:border-red-500' 
                                                            : activeField === 'message'
                                                                ? 'border-[--main-color]' 
                                                                : 'border-gray-800 group-hover:border-gray-700 focus:border-[--main-color]'
                                                    } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none`}
                                                    placeholder="Tell me about your project..."
                                                ></textarea>
                                                {errors.message && (
                                                    <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>
                                                )}
                                            </motion.div>

                                            <motion.div 
                                                variants={fadeInUp}
                                                transition={{ duration: 0.4 }}
                                                className="bg-[--bg-color] p-4 rounded-xl border-2 border-gray-800"
                                            >
                                                <ReCAPTCHA
                                                    sitekey={RECAPTCHA_SITE_KEY || ''}
                                                    onChange={handleRecaptcha}
                                                    theme="dark"
                                                />
                                            </motion.div>

                                            <motion.button
                                                variants={fadeInUp}
                                                transition={{ duration: 0.4 }}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                type="submit"
                                                disabled={isDisabled}
                                                className="w-full px-8 py-4 bg-[--main-color] text-[--bg-color] rounded-xl font-medium hover:bg-[--main-color]/90 transition-all duration-300 shadow-lg shadow-[--main-color]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center gap-3">
                                                        <div className="w-5 h-5 border-2 border-[--bg-color] border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Sending Message...</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center gap-2">
                                                        <span>Send Message</span>
                                                        <i className='bx bx-send'></i>
                                                    </div>
                                                )}
                                            </motion.button>

                                            {formState.status && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                                                >
                                                    <p className="text-center text-red-400">
                                                        <i className='bx bx-error-circle mr-2'></i>
                                                        {formState.status}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </motion.form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            
            <Footer />
        </motion.div>
    );
}