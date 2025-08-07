'use client'

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
    }
  };

//Todo: improve accessibility, validation, feedback

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor="name">Name</label>
        <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className='field'>
        <label htmlFor="email">Email</label>
        <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className='field'>
        <label htmlFor="subject">Subject</label>
        <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
      </div>

      <div className='field'>
        <label htmlFor="message">Message</label>
        <textarea required id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && <p className='success'>Message sent!</p>}
      {status === 'error' && <p className='success'>Something went wrong. Please try again.</p>}
    </form>
  );
}
