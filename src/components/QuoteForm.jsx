import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function QuoteForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'YOUR_SERVICE_ID',     // ← Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',    // ← Replace with your EmailJS Template ID
      data,
      'YOUR_USER_ID'         // ← Replace with your EmailJS User ID
    ).then(() => {
      alert('Quote request sent! We’ll contact you soon.');
      reset();
    }).catch(() => {
      alert('Error sending. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Name"
        className="w-full px-4 py-3 rounded bg-white text-gray-900"
      />
      {errors.name && <p className="text-red-300 text-sm">{errors.name.message}</p>}

      <input
        {...register('cell', { required: 'Cell number is required' })}
        placeholder="Cell Number"
        className="w-full px-4 py-3 rounded bg-white text-gray-900"
      />
      {errors.cell && <p className="text-red-300 text-sm">{errors.cell.message}</p>}

      <input
        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
        placeholder="Email"
        className="w-full px-4 py-3 rounded bg-white text-gray-900"
      />
      {errors.email && <p className="text-red-300 text-sm">{errors.email.message}</p>}

      <textarea
        {...register('message')}
        placeholder="Message"
        rows="4"
        className="w-full px-4 py-3 rounded bg-white text-gray-900"
      />

      <button type="submit" className="btn-primary w-full py-4 text-lg">
        Get Started
      </button>
    </form>
  );
}