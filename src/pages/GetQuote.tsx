import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Home, MapPin, Package, Truck } from 'lucide-react';

const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    moveType: '',
    fromAddress: '',
    toAddress: '',
    moveDate: '',
    propertySize: '',
    specialItems: [] as string[],
    name: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecialItems = (item: string) => {
    setFormData(prev => ({
      ...prev,
      specialItems: prev.specialItems.includes(item)
        ? prev.specialItems.filter(i => i !== item)
        : [...prev.specialItems, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Quote
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tell us about your move and we'll provide a detailed quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex-1">
                  <div
                    className={`h-2 ${
                      num === 1 ? 'rounded-l-full' : num === 3 ? 'rounded-r-full' : ''
                    } ${
                      step >= num
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                  <div className="mt-2 text-center text-sm">
                    {num === 1
                      ? 'Move Details'
                      : num === 2
                      ? 'Inventory'
                      : 'Contact Info'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Move Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Move Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Residential', 'Commercial'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, moveType: type })}
                          className={`p-4 border rounded-lg flex items-center justify-center space-x-2 ${
                            formData.moveType === type
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/50'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {type === 'Residential' ? (
                            <Home className="h-5 w-5" />
                          ) : (
                            <Package className="h-5 w-5" />
                          )}
                          <span>{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fromAddress" className="block text-sm font-medium mb-2">
                      Moving From
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="fromAddress"
                        name="fromAddress"
                        value={formData.fromAddress}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                        placeholder="Enter current address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="toAddress" className="block text-sm font-medium mb-2">
                      Moving To
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="toAddress"
                        name="toAddress"
                        value={formData.toAddress}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                        placeholder="Enter destination address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="moveDate" className="block text-sm font-medium mb-2">
                      Preferred Move Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="moveDate"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Inventory */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="propertySize" className="block text-sm font-medium mb-2">
                      Property Size
                    </label>
                    <select
                      id="propertySize"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="studio">Studio</option>
                      <option value="1bed">1 Bedroom</option>
                      <option value="2bed">2 Bedrooms</option>
                      <option value="3bed">3 Bedrooms</option>
                      <option value="4bed">4+ Bedrooms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Items
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        'Piano',
                        'Artwork',
                        'Antiques',
                        'Safe',
                        'Pool Table',
                        'Exercise Equipment',
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleSpecialItems(item)}
                          className={`p-4 border rounded-lg text-left ${
                            formData.specialItems.includes(item)
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/50'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Get Quote
                    <Truck className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;