import { React, useState} from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      toggleAlert('Email was successfuly sent!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Oops, something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
      <h1 className="contact-header">Contact Form</h1>
      <p className="contact-msg">Feel free to reach out!</p>
        <form
          id='contact-form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
        <div className="formRow"> 
          <input
            type='text'
            name='name'
            {...register('name', {
              required: {
                value: true,
                message: 'Please enter your name',
              },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less',
              },
            })}
            className='formInput'
            placeholder='Name'
          ></input>
          {errors.name && (
            <span className='errorMessage'>
              {errors.name.message}
            </span>
          )}
        </div>  
        <div className="formRow">
          <input
            type='email'
            name='email'
            {...register('email', {
              required: true,
              pattern:
                 /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className='formInput'
            placeholder='Email address'
          ></input>
          {errors.email && (
            <span className='errorMessage'>
                Please enter a valid email address
              </span>
          )}
        </div>
        <div className="formRow">
        <input
          type='text'
          name='subject'
          {...register('subject', {
            required: {
              value: true,
              message: 'Please enter a subject',
            },
          })}
          className='formInput'
          placeholder='Subject'
          ></input>
          {errors.subject && (
            <span className='errorMessage'>
              {errors.subject.message}
            </span>
          )}
        </div>
        <div className="formRow">
          <textarea
            rows={3}
            name='message'
            {...register('message', {
              required: true,
            })}
            className='formInput'
            placeholder='Message'
          ></textarea>
          {errors.message && (
            <span className='errorMessage'>
              Please enter a message
            </span>
          )}
        </div>
        <button
          className="submit-button"
          disabled={disabled}
          type='submit'
        >
          Submit
        </button>  
        </form>
        {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
        )}
      </div>
      <div className="contact-spacing"></div>
      <div className="contact-box">
        <div className="contact-header">Contact Information</div>
          <p className="contact-list">ozbirdett@gmail.com</p>
          <p className="contact-list">817-559-5284</p>
        <div className="contact-header">Links</div>
          <a className="link" href="https://www.linkedin.com/in/ozbirdett/">
            <p className="contact-list">LinkedIn</p>
          </a>
          <a className="link" href="https://github.com/OzBirdog">
            <p className="contact-list">Github</p>
          </a>

      </div>
    </div>
  )
}