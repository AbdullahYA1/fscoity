import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import './Contact.css';

// Custom X (Twitter) Icon Component
const XIcon = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Client-side rate limiting removed (handled by backend)

const Contact = () => {
  const [sending, setSending] = useState(false);
  const notify = () =>
    toast.success('Message sent successfully.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      style: { background: '#001100', color: '#00ff41', border: '1px solid #00ff41' },
      progressStyle: { background: '#00ff41' },
    });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.style.animation = "shake 0.5s ease-in-out";
    setTimeout(() => (btn.style.animation = ""), 500);

    // Honeypot to deter bots
    const honeypot = e.target.querySelector('input[name="website"]')?.value;
    if (honeypot) return; // silently drop

  // Rate limiting handled by backend; no frontend checks

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || '',
      message: formData.get('message'),
      meta: {
        ua: navigator.userAgent,
        sentAt: new Date().toISOString(),
      }
    };

    // Prefer configured endpoint; fallback to common Laravel route
  const endpoint = import.meta?.env?.VITE_CONTACT_ENDPOINT || 'http://localhost:8000/api/contact';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };

    setSending(true);
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          if (res.status === 429) {
            const retryAfter = res.headers.get('Retry-After');
            const secs = retryAfter ? parseInt(retryAfter, 10) : null;
            if (!Number.isNaN(secs) && secs) {
              const mins = Math.floor(secs / 60);
              const rem = secs % 60;
              alert(`Too many messages. Try again in ${mins}m ${rem}s.`);
            } else {
              alert('Too many messages. Please try again later.');
            }
            return;
          }
          if (res.status === 422) {
            try {
              const data = await res.json();
              const firstError = data?.errors && Object.values(data.errors)[0]?.[0];
              alert(firstError || 'Validation failed. Please check your inputs.');
            } catch {
              alert('Validation failed. Please check your inputs.');
            }
            return;
          }
          if (res.status === 419) {
            alert('Session/CSRF mismatch. If this route is in web.php, include a CSRF token or use an API route.');
            return;
          }
          throw new Error(`HTTP ${res.status}`);
        }
      } else {
        // No endpoint configured; log for devs
        console.warn('No VITE_CONTACT_ENDPOINT configured. Message not sent to a server.');
      }
  notify();
      e.target.reset();
    } catch (err) {
      console.error('Contact submit failed:', err);
      alert('Failed to send. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      text: "abdullah.y.alowias@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.y.alowias@gmail.com&su=Let's%20Connect%20-%20Portfolio%20Inquiry&body=Hello%20Abdullah,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...",
    },
    {
      icon: Github,
      text: "github.com/AbdullahYA1",
      href: "https://github.com/AbdullahYA1",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/abdullah-alowais",
      href: "https://www.linkedin.com/in/abdullah-alowais-5451182b4/",
    },
    {
      icon: XIcon,
      text: "x.com/iAbdullahYousef",
      href: "https://x.com/iAbdullahYousef",
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 pt-48 relative z-10 animate-on-scroll"
    >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main Title - Top Left */}
          <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left">
            &gt; LINKS
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse" />
          </h2>
          
          {/* Content Grid - Links and Form Inline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center p-4 border border-green-400/30 bg-green-400/5 backdrop-blur-sm hover:border-green-400 transition-all duration-500 group transform hover:scale-105 animate-fade-up contact-link"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon
                    className="mr-4 text-green-400 group-hover:animate-pulse transition-all duration-300"
                    size={24}
                  />
                  <span className="group-hover:text-green-300 transition-colors duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>

            <div className="border border-green-400/30 bg-black/50 backdrop-blur-sm p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 contact-form-container">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-cyan-400/5 animate-pulse" />

            {/* Digital rain effect */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 text-green-400 text-xs animate-digital-rain"
                  style={{
                    left: `${i * 5}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {Math.random().toString(2).substr(2, 8)}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-green-300 relative z-10 animate-slide-right">
              GET IN TOUCH
            </h3>
            <form className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
              {/* Honeypot field (should remain empty) */}
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 transform focus:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 transform focus:scale-105"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 transform focus:scale-105"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 resize-none transform focus:scale-105"
              />
              <button
                type="submit"
                disabled={sending}
                className={`contact-submit w-full ${sending ? 'bg-green-300/60 cursor-not-allowed' : 'bg-green-400 hover:bg-green-300'} text-black py-4 transition-all duration-500 font-bold tracking-wider relative overflow-hidden group transform hover:scale-105`}
              >
                <span className="relative z-10">{sending ? 'SENDING…' : 'SEND MESSAGE'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
