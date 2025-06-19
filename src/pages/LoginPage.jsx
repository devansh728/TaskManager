import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/authService';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const { values, handleChange, reset } = useForm({ email: '', password: '' });
  const [error, setError] = useState('');
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await login(values);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: { email: values.email },
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        },
      });
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      reset();
      toast.success('Login successful!');
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-100 to-blue-300 
                    dark:from-gray-900 dark:to-gray-800 
                    p-4 w-full"> 
      
      <Toaster position="top-center" />

      {/* Form Container: Uses Framer Motion for animation, and Tailwind for responsive styling */}
      <motion.div
        className="w-full             
                   max-w-sm           
                   sm:max-w-md        
                   md:max-w-lg        
                   lg:max-w-xl        
                   
                   bg-white dark:bg-gray-800 
                   p-8 sm:p-10 lg:p-12 
                   rounded-xl shadow-2xl z-10 
                   mx-auto            
                   "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-blue-700 dark:text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <Input label="Email" name="email" value={values.email} onChange={handleChange} required type="email" />
          <Input label="Password" name="password" value={values.password} onChange={handleChange} required type="password" />
          <Button type="submit" className="w-full mt-6">Login</Button> 
        </form>
        {error && <p className="error text-red-500 mt-4 text-center text-sm">{error}</p>}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300 text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline font-medium">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}
