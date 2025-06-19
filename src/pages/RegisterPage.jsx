import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/authService';
import { useForm } from '../hooks/useForm';
import Input from '../components/Input';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  const { values, handleChange, reset } = useForm({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(values);
      reset();
      toast.success('Registration successful! Please login.');
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-100 to-blue-300 
                    dark:from-gray-900 dark:to-gray-800 
                    p-4 w-full"> {/* p-4 provides a minimal padding around the form on small screens */}
      
      <Toaster position="top-center" />

      {/* Form Container: Uses Framer Motion for animation, and Tailwind for responsive styling */}
      <motion.div
        className="w-full             // Takes full width up to its max-width limit
                   max-w-sm           // Base max-width for very small screens (e.g., portrait phones)
                   sm:max-w-md        // Increases max-width on small breakpoints and up
                   md:max-w-lg        // Further increases on medium breakpoints and up
                   lg:max-w-xl        // Significantly wider on large breakpoints (desktops)
                   
                   bg-white dark:bg-gray-800 
                   p-8 sm:p-10 lg:p-12 // Increased padding inside the form card itself for more space
                   rounded-xl shadow-2xl z-10 
                   mx-auto            // Ensures horizontal centering within the parent when max-width applies
                   "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-blue-700 dark:text-white">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Input components: Ensure they apply 'w-full' internally if they don't by default */}
          <Input label="Username" name="username" value={values.username} onChange={handleChange} required />
          <Input label="Email" name="email" value={values.email} onChange={handleChange} required type="email" />
          <Input label="Password" name="password" value={values.password} onChange={handleChange} required type="password" />
          <Button type="submit" className="w-full mt-6">Register</Button> {/* Button takes full width */}
        </form>
        {error && <p className="error text-red-500 mt-4 text-center text-sm">{error}</p>}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
