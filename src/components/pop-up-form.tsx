'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  location: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  location?: string;
}

export function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (value.length < 2) return 'Name must be at least 2 characters long';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters';
        break;
      case 'mobile':
        if (!/^[6-9]\d{9}$/.test(value)) return 'Please enter a valid 10-digit mobile number';
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'location':
        if (value.length < 5) return 'Location must be at least 5 characters long';
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    console.log('Form Data:', formData);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl w-full max-w-md relative animate-in fade-in zoom-in duration-300 shadow-2xl border border-blue-100">
        <div className="absolute -top-3 -right-3">
          <button 
            onClick={() => setIsVisible(false)}
            className="bg-white rounded-full p-1.5 shadow-lg hover:bg-blue-50 transition-colors duration-300 group"
          >
            <X className="h-5 w-5 text-blue-600 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Let's Build Your Dream Home
            </h2>
            <p className="text-gray-600 mt-2">Share your details and we'll reach out to discuss your vision</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm",
                  "border-2 focus:ring-2 focus:ring-offset-0 outline-none",
                  errors.name 
                    ? "border-red-200 focus:border-red-300 focus:ring-red-100" 
                    : "border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                )}
                placeholder="Enter your full name"
              />
              {touched.name && errors.name && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1.5">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm",
                  "border-2 focus:ring-2 focus:ring-offset-0 outline-none",
                  errors.mobile 
                    ? "border-red-200 focus:border-red-300 focus:ring-red-100" 
                    : "border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                )}
                placeholder="Enter 10-digit mobile number"
              />
              {touched.mobile && errors.mobile && (
                <p className="mt-1.5 text-sm text-red-500">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm",
                  "border-2 focus:ring-2 focus:ring-offset-0 outline-none",
                  errors.email 
                    ? "border-red-200 focus:border-red-300 focus:ring-red-100" 
                    : "border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                )}
                placeholder="Enter your email address"
              />
              {touched.email && errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
                Plot Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm",
                  "border-2 focus:ring-2 focus:ring-offset-0 outline-none",
                  errors.location 
                    ? "border-red-200 focus:border-red-300 focus:ring-red-100" 
                    : "border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                )}
                placeholder="Enter plot location"
              />
              {touched.location && errors.location && (
                <p className="mt-1.5 text-sm text-red-500">{errors.location}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl
                hover:from-blue-700 hover:to-blue-800 transition-all duration-300
                font-medium mt-8 shadow-lg shadow-blue-200
                transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}