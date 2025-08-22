'use client';

import { useState } from 'react';
import { Eye, EyeOff, LogIn, Cpu, Github, Twitter, Mail, Key } from 'lucide-react';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import Loader from '@/app/components/Loader/Loader';
import { notifyError, notifySuccess } from '@/utilities/ReactHotToast';

const page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const { email, password } = formData
    // Handle login logic here
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: new URLSearchParams(window.location.search).get('callbackUrl') || '/products'
    })
    if (!result.ok) {
      notifyError("invalid credential")
      setIsLoading(false)
    }
    else {
      setIsLoading(false)
      notifySuccess("Login Successful")
      window.location.href = result.url || "/products";
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Midnight Mist Background */}
      <div
        className="absolute inset-0 pointer-events-none midnight-mist-bg"
      />

      <div className="w-full max-w-md z-10">


        {/* Login Card */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-800/50 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></div>
              <p className="text-indigo-300 text-sm font-medium">Secure Access</p>
            </div>
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-3 transition-colors duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-indigo-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-indigo-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700/50"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full disabled:cursor-not-allowed flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                {
                  isLoading
                    ? <Loader />
                    : <>
                      <LogIn className="w-5 h-5 mr-2" />
                      Sign in
                    </>
                }


              </button>
            </div>
          </form>

          {/* Social Login Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 ">
              <button
                className="w-full inline-flex justify-center items-center py-2 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-sm font-medium text-gray-300 border border-gray-700 hover:border-indigo-500 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link href="/register" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GadgetSphere. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;