import React, { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import './Contact.css';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: 'onTouched' });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const userName = useWatch({
    control,
    name: 'name',
    defaultValue: 'Someone',
  });

  useEffect(() => {
    setValue('subject', `${userName} sent a message from Website`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    try {
      setDisabled(true);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, access_key: 'ed1656a5-2642-4e90-b25f-f47e1044e976' }, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        e.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Client Error. Please check the console.log for more info');
      console.error(error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-header">Contact Form</h1>
        <p className="contact-msg">Feel free to reach out!</p>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="hidden" value="ed1656a5-2642-4e90-b25f-f47e1044e976" {...register('access_key')} />
            <input type="hidden" {...register('subject')} />
            <input type="hidden" value="Portfolio" {...register('from_name')} />

            <div className="formRow">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`formInput ${errors.name ? 'border-red-600' : 'border-gray-300'}`}
                {...register('name', {
                  required: 'Full name is required',
                  maxLength: 80,
                })}
              />
              {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            </div>

            <div className="formRow">
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className={`formInput ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
                {...register('email', {
                  required: 'Enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && <span className="errorMessage">{errors.email.message}</span>}
            </div>

            <div className="formRow">
              <input
                type="text"
                placeholder="Subject"
                autoComplete="false"
                className={`formInput ${errors.subjectLine ? 'border-red-600' : 'border-gray-300'}`}
                {...register('subjectLine', {
                  required: 'Enter your Subject',
                  maxLength: 100,
                })}
              />
              {errors.subjectLine && <span className="errorMessage">{errors.subjectLine.message}</span>}  
            </div>

            <div className="formRow">
              <textarea
                placeholder="Your Message"
                className={`formInput ${errors.message ? 'border-red-600' : 'border-gray-300'}`}
                {...register('message', { required: 'Enter your message' })}
              />
              {errors.message && <span className="errorMessage">{errors.message.message}</span>}
            </div>

            <button
              className="submit-button"
              disabled={disabled || isSubmitting}
              type="submit"
            >
              Send Message
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
          <div className="alert alert-success">
            <p>{message}</p>
          </div>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="alert alert-error">
              <p>Oops, Something went wrong!</p>
            </div>
          )}
      </div>
    </div>
  );
};
