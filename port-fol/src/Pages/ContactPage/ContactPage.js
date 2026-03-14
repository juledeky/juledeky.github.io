import './ContactPage.css';
import { useState } from 'react';

const ACCESS_KEY = '83c609ab-697a-4392-bc9c-94d8ba474ff9';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const SUBJECTS = [
  'Software development',
  'Geluidskunst',
  'Samenwerking',
  'Iets anders',
];
 

export default function ContactPage() {
const [fields, setFields] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');
 
  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!fields.name.trim() || !fields.email.trim()) {
      setErrMsg('Vul je naam en e-mailadres in.');
      setTimeout(() => setErrMsg(''), 2500);
      return;
    }
 
    setStatus('loading');
 
 try {
      const formData = new FormData();
      formData.append('access_key', ACCESS_KEY);
      formData.append('name', fields.name);
      formData.append('email', fields.email);
      formData.append('subject', fields.subject || 'Nieuw contactbericht');
      formData.append('message', fields.message);
 
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
 
      const data = await res.json();
 
      if (data.success) {
        setStatus('success');
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus('error');
    }
  };
 
  return (
    <div className="ContactPage">
    <div className="contact-page">
 
      {/* ── Header ── */}
      <div className="contact-header">
        <h1 className="contact-title">Contact</h1>
        <hr className="contact-divider" />
        <p className="contact-intro">
          Heb je een vraag, een project in gedachten, of wil je gewoon kennismaken?
          Stuur me een bericht en ik neem zo snel mogelijk contact op.
        </p>
      </div>
 
      {/* ── Card ── */}
      <div className="contact-body">
        <div className="contact-card">
    
            {status === 'success' ? (
            <div className="contact-success">
                <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                </div>
                <h3>Bericht verstuurd.</h3>
                <p>Bedankt! Ik neem zo snel mogelijk contact met je op.</p>
            </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
        
                    <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Naam</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jule Dekyvere"
                        value={fields.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mailadres</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jouw@email.com"
                        value={fields.email}
                        onChange={handleChange}
                        />
                    </div>
                    </div>
        
                    <div className="form-group">
                    <label htmlFor="subject">Onderwerp</label>
                    <select
                        id="subject"
                        name="subject"
                        value={fields.subject}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Kies een onderwerp</option>
                        {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                    </div>
        
                    <div className="form-group">
                    <label htmlFor="message">Bericht</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Vertel me meer..."
                        value={fields.message}
                        onChange={handleChange}
                    />
                    <span className="char-count">{fields.message.length} / 500</span>
                    </div>
        
                    {errMsg && (
                    <p className="form-error">{errMsg}</p>
                    )}
        
                    {status === 'error' && (
                    <p className="form-error">
                        Er ging iets mis. Probeer het opnieuw of mail me rechtstreeks op{' '}
                        <a href="mailto:jule.dekyvere@protonmail.com">jule.dekyvere@protonmail.com</a>.
                    </p>
                    )}
        
                    <button
                    type="submit"
                    className="contact-submit"
                    disabled={status === 'loading'}
                    >
                    {status === 'loading' ? 'Versturen...' : 'Verstuur bericht →'}
                    </button>
        
                </form>
            )}
        </div>
        </div>
    </div>
    </div>
  );
}