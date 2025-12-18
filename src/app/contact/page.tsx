/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact: React.FC = () =>
{
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    hotel_company_name: '',
    outlet_brand_name: '',
    number_of_outlets: '',
    email: '',
    phone: '',
    interest_type: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest_type: prev.interest_type.includes(value)
        ? prev.interest_type.filter((item) => item !== value)
        : [...prev.interest_type, value],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          designation: formData.designation,
          hotel_company_name: formData.hotel_company_name,
          outlet_brand_name: formData.outlet_brand_name,
          number_of_outlets: formData.number_of_outlets,
          email: formData.email,
          phone: formData.phone,
          interest_type: formData.interest_type.join(', '),
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        designation: '',
        hotel_company_name: '',
        outlet_brand_name: '',
        number_of_outlets: '',
        email: '',
        phone: '',
        interest_type: [],
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <h1 className="contact-hero-title">
              Let's Guarantee Your
              <span
                style={{
                  background:
                    'linear-gradient(to right, rgb(245, 158, 11), rgb(249, 115, 22), rgb(239, 68, 68)) text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                {' '}
                Kitchen's Supply
              </span>
            </h1>
            <p className="contact-hero-subtitle">
              Reach out to our{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                B2B specialists
              </span>{' '}
              today.
              <span
                style={{
                  background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                {' '}
                We're ready to partner with you{' '}
              </span>{' '}
              and ensure your menu is always ready to serve.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-main-section">
            <div className="contact-card-section">
              <div className="contact-card ">
                <div className="contact-card-icon">
                  <Mail />
                </div>
                <h3 className="contact-card-title">Email Us</h3>
                <p className="contact-card-text">For sales and new partnerships:</p>
                <a href="mailto:sales@agrodg.com" className="contact-card-link">
                  sales@agrodg.com
                </a>
                <p className="contact-card-text mt-4">For existing clients:</p>
                <a href="mailto:sales@agrodg.com" className="contact-card-link">
                  sales@agrodg.com
                </a>
              </div>

              <div className="contact-card ">
                <div className="contact-card-icon">
                  <Phone />
                </div>
                <h3 className="contact-card-title">Call Us</h3>
                <p className="contact-card-text">Sales & Partnerships:</p>
                 
                <a href="tel:+918591401573" className="contact-card-link">
                  +91 85914 01573
                </a>
                <p className="contact-card-text mt-4">Support Line:</p>
                <a href="tel:+919820885118" className="contact-card-link">
                  +91 98208 85118
                </a>
              </div>

              <div className="contact-card ">
                <div className="contact-card-icon">
                  <MapPin />
                </div>
                <h3 className="contact-card-title">Visit Us</h3>
                <p className="contact-card-text">
                  Shop No 13, Silver Croft
                  <br />
                  Opp Pali Municipal Market
                  <br />
                  Pali Mala Rd, Bandra West
                  <br />
                  Mumbai - 400050
                </p>
                <div className="contact-hours">
                  <Clock className="contact-hours-icon" />
                  <span>Monday - Sunday, 8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Get a Quote or Schedule a Consultation</h2>
              <p className="contact-form-desc">
                Tell us what you need, and we'll show you how we can deliver.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-row">
                  <div className="contact-field">
                    <label>Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="contact-field">
                    <label>Designation *</label>
                    <input
                      type="text"
                      // required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Hotel / Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.hotel_company_name}
                    onChange={(e) =>
                      setFormData({ ...formData, hotel_company_name: e.target.value })
                    }
                  />
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label>Outlet / Brand Name</label>
                    <input
                      type="text"
                      value={formData.outlet_brand_name}
                      onChange={(e) =>
                        setFormData({ ...formData, outlet_brand_name: e.target.value })
                      }
                    />
                  </div>

                  <div className="contact-field">
                    <label>Number of Outlet/s</label>
                    <input
                      type="text"
                      value={formData.number_of_outlets}
                      onChange={(e) =>
                        setFormData({ ...formData, number_of_outlets: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="contact-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>I am interested in:</label>
                  <div className="contact-checkbox-group">
                    {[
                      'Getting a Quote',
                      'Discussing a Partnership',
                      'A Specific Product Inquiry',
                      'Other',
                    ].map((option) => (
                      <label key={option} className="contact-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.interest_type.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="contact-field">
                  <label>Message *</label>
                  <textarea
                    rows={5}
                    // required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="contact-success">
                    Thank you for your inquiry! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="contact-error">
                    There was an error submitting your form. Please try again.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="contact-submit">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  <Send />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
