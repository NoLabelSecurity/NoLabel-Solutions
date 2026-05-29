/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronRight, Calculator, RefreshCw } from 'lucide-react';
import { QuoteRequest } from '../types';

interface ContactViewProps {
  onNavigate: (page: string) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  // Configured inputs
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    servicesNeeded: [],
    budgetRange: 'Medium ($2.5k - $5k)',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Available checkbox items requested by the user
  const serviceOptions = [
    { label: 'Website Development', value: 'Website Development', costVal: 2500 },
    { label: 'Branding & Identity', value: 'Branding', costVal: 1200 },
    { label: 'Logo Design', value: 'Logo Design', costVal: 600 },
    { label: 'Business Cards', value: 'Business Cards', costVal: 400 },
    { label: 'Social Media Assets', value: 'Social Media', costVal: 800 },
    { label: 'Local search engine optimization (SEO)', value: 'SEO', costVal: 1000 },
    { label: 'Other Automation Tools', value: 'Other', costVal: 500 }
  ];

  // Estimated Calculator helper
  const calculateEstimate = () => {
    let base = 0;
    formData.servicesNeeded.forEach(srvVal => {
      const option = serviceOptions.find(o => o.value === srvVal);
      if (option) {
        base += option.costVal;
      }
    });
    return base;
  };

  const handleCheckboxChange = (serviceValue: string) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(serviceValue);
      const updated = exists 
        ? prev.servicesNeeded.filter(v => v !== serviceValue)
        : [...prev.servicesNeeded, serviceValue];
      return { ...prev, servicesNeeded: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email) {
      alert('Please fill out your Name and Email address so we can route details to you.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1400);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      servicesNeeded: [],
      budgetRange: 'Medium ($2.5k - $5k)',
      projectDetails: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <div className="space-y-16 pb-20 text-left">
      {/* HEADER HERO */}
      <section className="relative pt-12 md:pt-16 pb-4">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-cyan-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs font-mono text-[#00D9FF] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Work Request
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-none" id="contact-title">
              Let's Map Out Your Digital Roadmap
            </h1>
            <p className="text-gray-400 text-sm sm:text-md font-light leading-relaxed">
              Fill out the digital design workbook below to request a tailored quote. We review incoming project structures within 12 hours and supply clear layout specs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE WORK GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-[#121923] border border-[#1A2433] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl relative"
                  id="quote-request-form"
                >
                  <h3 className="text-xl font-display font-medium text-white border-b border-[#1A2433] pb-4">
                    Project Configuration Workbook
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0B0F14] border border-[#1A2433] focus:border-cyan-400 rounded-lg p-3 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                        id="form-input-name"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Anchor Trades LLC"
                        className="w-full bg-[#0B0F14] border border-[#1A2433] focus:border-cyan-400 rounded-lg p-3 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                        id="form-input-business"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@anchortrades.com"
                        className="w-full bg-[#0B0F14] border border-[#1A2433] focus:border-cyan-400 rounded-lg p-3 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                        id="form-input-email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 304-2041"
                        className="w-full bg-[#0B0F14] border border-[#1A2433] focus:border-cyan-400 rounded-lg p-3 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                        id="form-input-phone"
                      />
                    </div>
                  </div>

                  {/* Checkbox Selections requested by user */}
                  <div className="space-y-2 text-left pt-2">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                      Select Required Services (Check all that apply)
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2" id="form-checkboxes">
                      {serviceOptions.map((opt) => {
                        const isChecked = formData.servicesNeeded.includes(opt.value);
                        return (
                          <div 
                            key={opt.value}
                            onClick={() => handleCheckboxChange(opt.value)}
                            className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                              isChecked 
                                ? 'bg-cyan-500/10 border-cyan-400 text-white' 
                                : 'bg-[#0B0F14] border-[#1A2433] text-gray-400 hover:border-gray-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              className="accent-cyan-400 pointer-events-none"
                            />
                            <span className="text-xs">{opt.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Ranges Selection */}
                  <div className="space-y-1.5 text-left pt-2">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                      Project Budget Target Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#0B0F14] border border-[#1A2433] focus:outline-none focus:border-cyan-400 rounded-lg p-3 text-xs text-white"
                      id="form-budget-select"
                    >
                      <option value="Starter (Under $2.5k)">Starter (Under $2,500)</option>
                      <option value="Medium ($2.5k - $5k)">Medium ($2,500 - $5,000)</option>
                      <option value="Premium ($5k - $10k)">Premium ($5,000 - $10,000)</option>
                      <option value="Enterprise ($10k+)">Enterprise ($10,000+)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5 text-left pt-2">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-medium">
                      Project Context & Requirements
                    </label>
                    <textarea
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please describe your trade, current offline standing, desired booking features, brand notes, and targets..."
                      className="w-full bg-[#0B0F14] border border-[#1A2433] focus:outline-none focus:border-cyan-400 rounded-lg p-3 text-xs text-white placeholder-gray-600 transition-colors"
                      id="form-textarea-details"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Verifying workbook specs...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Proposal Request</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#121923] border border-green-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl"
                  id="form-success-alert"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-bold text-white">Workbook Blueprint Received!</h3>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
                      Thank you for submitting, <span className="text-white font-semibold">{formData.name}</span>. Julian Hayes (Lead Developer) will verify <span className="text-[#00D9FF]">{formData.businessName || 'your business'}</span> details within 12 hours.
                    </p>
                  </div>

                  {/* Summary copy card */}
                  <div className="bg-[#0B0F14]/70 border border-[#1A2433] rounded-xl p-4 text-left max-w-md mx-auto text-xs font-mono text-gray-300 space-y-2">
                    <p className="text-gray-500 text-[10px] uppercase border-b border-[#1A2433] pb-1.5 mb-2">SYSTEM TRANSMISSION SUMMARY</p>
                    <p><span className="text-[#00D9FF]">Client:</span> {formData.name}</p>
                    <p><span className="text-[#00D9FF]">Contact:</span> {formData.email}</p>
                    <p><span className="text-[#00D9FF]">Required:</span> {formData.servicesNeeded.join(', ') || 'General Consultation'}</p>
                    <p><span className="text-[#00D9FF]">Budget:</span> {formData.budgetRange}</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-[#0B0F14] border border-[#1A2433] hover:border-gray-500 text-gray-400 hover:text-white rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      Reset Workbook Link
                    </button>
                    <button
                      onClick={() => onNavigate('projects')}
                      className="px-6 py-2.5 bg-green-500 hover:bg-green-400 text-black font-display font-semibold rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      Browse Case Studies
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Map Placeholder & Coordinates Column */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Live Interactive Quote Estimator Calculator Tool */}
            <motion.div 
              whileHover={{ y: -3, borderColor: 'rgba(0, 217, 255, 0.25)', boxShadow: '0 8px 24px -10px rgba(0, 217, 255, 0.04)' }}
              className="bg-[#121923] border border-[#1A2433] rounded-3xl p-6 space-y-4 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-[#00D9FF] border-b border-[#1A2433] pb-3">
                <Calculator className="w-5 h-5" />
                <h4 className="font-display font-medium text-sm text-white">Live Cost Blueprint Estimator</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Select items in the workbook list on the left to see an instant estimates model. All quotes include design, secure SSL hosting, and analytics setups in standard scopes.
              </p>
              
              <div className="space-y-2.5 bg-[#0B0F14] p-4 rounded-xl border border-[#1A2433] font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Selected Items:</span>
                  <span className="text-white font-bold">{formData.servicesNeeded.length}</span>
                </div>
                
                <div className="flex justify-between border-t border-[#1A2433]/70 pt-2.5">
                  <span className="text-gray-500 uppercase">Estimated Budget:</span>
                  <span className="text-[#00D9FF] font-bold">
                    {calculateEstimate() === 0 ? 'Select services' : `$${calculateEstimate().toLocaleString()}`}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 italic">Estimates are based on average contractor scopes and standard 4-week delivery timelines.</p>
            </motion.div>

            {/* Locator Ordnance container with Google Maps embed centering Upstate SC */}
            <div className="space-y-2" id="locator-ordnance-container">
              <span className="text-[10px] font-mono text-gray-500 block uppercase">Locator Ordnance container</span>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden border border-[#1A2433] bg-[#0B0F14] p-1 shadow-md transition-all duration-300"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Oconee%20County%20South%20Carolina&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>

            {/* Contact details / Business Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-[#121923] border border-[#1A2433] p-4 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-300" 
                id="business-hours"
              >
                <div className="flex items-center gap-2 border-b border-[#1A2433] pb-2 text-[#00D9FF]">
                  <Clock className="w-4 h-4" />
                  <span className="font-display font-medium text-xs text-white">Business Hours</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 space-y-1.5">
                  <div className="flex justify-between">
                    <span>MON - FRI:</span>
                    <span className="text-white">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SATURDAY:</span>
                    <span className="text-white">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SUNDAY:</span>
                    <span className="text-red-400 font-bold">CLOSED</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-[#121923] border border-[#1A2433] p-4 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-300" 
                id="direct-contacts"
              >
                <div className="flex items-center gap-2 border-b border-[#1A2433] pb-2 text-[#00D9FF]">
                  <Phone className="w-4 h-4" />
                  <span className="font-display font-medium text-xs text-white">Direct Connect</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 space-y-1.5 leading-snug">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-white hover:text-cyan-400 cursor-pointer">hello@nolabel.dev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-white">+1 (555) 304-2041</span>
                  </div>
                  <p className="text-[9px] text-gray-500 pt-1 border-t border-[#1A2433] uppercase">No cold calls or solicitation please.</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
}
