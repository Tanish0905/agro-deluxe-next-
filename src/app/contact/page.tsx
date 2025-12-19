/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useReducer, useRef } from "react";
import "./Contact.css";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  designation: string;
  hotel_company_name: string;
  outlet_brand_name: string;
  number_of_outlets: string;
  email: string;
  phone: string;
  interest_type: string[];
  message: string;
  website: string;
};

type State = {
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
};

const initialState: State = {
  formData: {
    name: "",
    designation: "",
    hotel_company_name: "",
    outlet_brand_name: "",
    number_of_outlets: "",
    email: "",
    phone: "",
    interest_type: [],
    message: "",
    website: "",
  },
  errors: {},
  isSubmitting: false,
  submitStatus: "idle",
};

type Action =
  | { type: "FIELD"; field: keyof FormData; value: any }
  | { type: "ERRORS"; errors: State["errors"] }
  | { type: "SUBMITTING"; value: boolean }
  | { type: "STATUS"; value: State["submitStatus"] }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };
    case "ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMITTING":
      return { ...state, isSubmitting: action.value };
    case "STATUS":
      return { ...state, submitStatus: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const sanitize = (value: string) =>
  value.replace(/<[^>]*>?/gm, "").trim();

const validateForm = (data: FormData) => {
  const errors: State["errors"] = {};

  const name = sanitize(data.name);
  const company = sanitize(data.hotel_company_name);
  const message = sanitize(data.message);
  const email = sanitize(data.email);
  const phone = data.phone.replace(/\s+/g, "");

  if (name.length < 2) {
    errors.name = "Please enter your name";
  }

  if (company.length < 2) {
    errors.hotel_company_name = "Please enter your hotel or company name";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!/^[1-9]\d{9}$/.test(phone)) {
    errors.phone = "Please enter a valid 10-digit phone number (e.g. 9898XXXXXX)";
  }

  if (message.length < 10) {
    errors.message = "Please enter a short message (min 10 characters)";
  }

  return errors;
};


const Contact: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const lastSubmitRef = useRef<number>(0);

  const handleCheckboxChange = (value: string) => {
    dispatch({
      type: "FIELD",
      field: "interest_type",
      value: state.formData.interest_type.includes(value)
        ? state.formData.interest_type.filter((v) => v !== value)
        : [...state.formData.interest_type, value],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    if (state.formData.website) return;

    // Friendly rate-limit (prevents spam, not users)
    if (Date.now() - lastSubmitRef.current < 8000) {
      dispatch({ type: "STATUS", value: "error" });
      return;
    }

    const errors = validateForm(state.formData);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "ERRORS", errors });
      return;
    }

    dispatch({ type: "SUBMITTING", value: true });
    dispatch({ type: "STATUS", value: "idle" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: sanitize(state.formData.name),
          designation: sanitize(state.formData.designation),
          hotel_company_name: sanitize(state.formData.hotel_company_name),
          outlet_brand_name: sanitize(state.formData.outlet_brand_name),
          number_of_outlets: sanitize(state.formData.number_of_outlets),
          email: sanitize(state.formData.email),
          phone: sanitize(state.formData.phone),
          interest_type: state.formData.interest_type.join(", "),
          message: sanitize(state.formData.message),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      lastSubmitRef.current = Date.now();
      dispatch({ type: "RESET" });
      dispatch({ type: "STATUS", value: "success" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        dispatch({ type: "STATUS", value: "idle" });
      }, 5000);
    } catch (err) {
      console.error("Email error:", err);
      dispatch({ type: "STATUS", value: "error" });
    } finally {
      dispatch({ type: "SUBMITTING", value: false });
    }
  };

  const { formData, errors, isSubmitting, submitStatus } = state;

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

              <form
  onSubmit={handleSubmit}
  className="contact-form"
  noValidate
  aria-label="Contact form"
>
  {/* Honeypot */}
  <input
    type="text"
    name="website"
    value={formData.website}
    onChange={(e) =>
      dispatch({ type: "FIELD", field: "website", value: e.target.value })
    }
    style={{ display: "none" }}
    tabIndex={-1}
    autoComplete="off"
  />

  <div className="contact-row">
    <div className="contact-field">
      <label>Name *</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) =>
          dispatch({ type: "FIELD", field: "name", value: e.target.value })
        }
      />
      {errors.name && <div className="contact-error">{errors.name}</div>}
    </div>

    <div className="contact-field">
      <label>Designation</label>
      <input
        type="text"
        value={formData.designation}
        onChange={(e) =>
          dispatch({
            type: "FIELD",
            field: "designation",
            value: e.target.value,
          })
        }
      />
    </div>
  </div>

  <div className="contact-field">
    <label>Hotel / Company Name *</label>
    <input
      type="text"
      value={formData.hotel_company_name}
      onChange={(e) =>
        dispatch({
          type: "FIELD",
          field: "hotel_company_name",
          value: e.target.value,
        })
      }
    />
    {errors.hotel_company_name && (
      <div className="contact-error">{errors.hotel_company_name}</div>
    )}
  </div>

  <div className="contact-row">
    <div className="contact-field">
      <label>Outlet / Brand Name</label>
      <input
        type="text"
        value={formData.outlet_brand_name}
        onChange={(e) =>
          dispatch({
            type: "FIELD",
            field: "outlet_brand_name",
            value: e.target.value,
          })
        }
      />
    </div>

    <div className="contact-field">
      <label>Number of Outlet/s</label>
      <input
        type="text"
        value={formData.number_of_outlets}
        onChange={(e) =>
          dispatch({
            type: "FIELD",
            field: "number_of_outlets",
            value: e.target.value,
          })
        }
      />
    </div>
  </div>

  <div className="contact-row">
    <div className="contact-field">
      <label>Email Address *</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          dispatch({ type: "FIELD", field: "email", value: e.target.value })
        }
      />
      {errors.email && <div className="contact-error">{errors.email}</div>}
    </div>

    <div className="contact-field">
      <label>Phone Number *</label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) =>
          dispatch({ type: "FIELD", field: "phone", value: e.target.value })
        }
      />
      {errors.phone && <div className="contact-error">{errors.phone}</div>}
    </div>
  </div>

  <div className="contact-field">
    <label>I am interested in:</label>
    <div className="contact-checkbox-group">
      {[
        "Getting a Quote",
        "Discussing a Partnership",
        "A Specific Product Inquiry",
        "Other",
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
      value={formData.message}
      onChange={(e) =>
        dispatch({ type: "FIELD", field: "message", value: e.target.value })
      }
    />
    {errors.message && <div className="contact-error">{errors.message}</div>}
  </div>

  {submitStatus === "success" && (
    <div className="contact-success">
      Thank you for your inquiry! We'll get back to you within 24 hours.
    </div>
  )}

  {submitStatus === "error" && (
    <div className="contact-error">
      There was an error submitting your form. Please try again.
    </div>
  )}

  <button type="submit" disabled={isSubmitting} className="contact-submit">
    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
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
