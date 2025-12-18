import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Instagram, Send, AlertCircle } from 'lucide-react';
import { ContactBackground } from './ContactBackground';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Popular country codes
  const countryCodes = [
    { code: '+93', country: 'Afghanistan' },
    { code: '+355', country: 'Albania' },
    { code: '+213', country: 'Algeria' },
    { code: '+376', country: 'Andorra' },
    { code: '+244', country: 'Angola' },
    { code: '+1-268', country: 'Antigua and Barbuda' },
    { code: '+54', country: 'Argentina' },
    { code: '+374', country: 'Armenia' },
    { code: '+61', country: 'Australia' },
    { code: '+43', country: 'Austria' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+1-242', country: 'Bahamas' },
    { code: '+973', country: 'Bahrain' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+1-246', country: 'Barbados' },
    { code: '+375', country: 'Belarus' },
    { code: '+32', country: 'Belgium' },
    { code: '+501', country: 'Belize' },
    { code: '+229', country: 'Benin' },
    { code: '+975', country: 'Bhutan' },
    { code: '+591', country: 'Bolivia' },
    { code: '+387', country: 'Bosnia and Herzegovina' },
    { code: '+267', country: 'Botswana' },
    { code: '+55', country: 'Brazil' },
    { code: '+673', country: 'Brunei' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+257', country: 'Burundi' },
    { code: '+855', country: 'Cambodia' },
    { code: '+237', country: 'Cameroon' },
    { code: '+1', country: 'Canada' },
    { code: '+238', country: 'Cape Verde' },
    { code: '+236', country: 'Central African Republic' },
    { code: '+235', country: 'Chad' },
    { code: '+56', country: 'Chile' },
    { code: '+86', country: 'China' },
    { code: '+57', country: 'Colombia' },
    { code: '+269', country: 'Comoros' },
    { code: '+242', country: 'Congo (Republic of the)' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+385', country: 'Croatia' },
    { code: '+53', country: 'Cuba' },
    { code: '+357', country: 'Cyprus' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+45', country: 'Denmark' },
    { code: '+253', country: 'Djibouti' },
    { code: '+1-767', country: 'Dominica' },
    { code: '+1-809', country: 'Dominican Republic' },
    { code: '+593', country: 'Ecuador' },
    { code: '+20', country: 'Egypt' },
    { code: '+503', country: 'El Salvador' },
    { code: '+240', country: 'Equatorial Guinea' },
    { code: '+291', country: 'Eritrea' },
    { code: '+372', country: 'Estonia' },
    { code: '+268', country: 'Eswatini' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+679', country: 'Fiji' },
    { code: '+358', country: 'Finland' },
    { code: '+33', country: 'France' },
    { code: '+241', country: 'Gabon' },
    { code: '+220', country: 'Gambia' },
    { code: '+995', country: 'Georgia' },
    { code: '+49', country: 'Germany' },
    { code: '+233', country: 'Ghana' },
    { code: '+30', country: 'Greece' },
    { code: '+1-473', country: 'Grenada' },
    { code: '+502', country: 'Guatemala' },
    { code: '+224', country: 'Guinea' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+592', country: 'Guyana' },
    { code: '+509', country: 'Haiti' },
    { code: '+504', country: 'Honduras' },
    { code: '+36', country: 'Hungary' },
    { code: '+354', country: 'Iceland' },
    { code: '+91', country: 'India' },
    { code: '+62', country: 'Indonesia' },
    { code: '+98', country: 'Iran' },
    { code: '+964', country: 'Iraq' },
    { code: '+353', country: 'Ireland' },
    { code: '+972', country: 'Israel' },
    { code: '+39', country: 'Italy' },
    { code: '+1-876', country: 'Jamaica' },
    { code: '+81', country: 'Japan' },
    { code: '+962', country: 'Jordan' },
    { code: '+7', country: 'Kazakhstan' },
    { code: '+254', country: 'Kenya' },
    { code: '+686', country: 'Kiribati' },
    { code: '+965', country: 'Kuwait' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+856', country: 'Laos' },
    { code: '+371', country: 'Latvia' },
    { code: '+961', country: 'Lebanon' },
    { code: '+266', country: 'Lesotho' },
    { code: '+231', country: 'Liberia' },
    { code: '+218', country: 'Libya' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+370', country: 'Lithuania' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+261', country: 'Madagascar' },
    { code: '+265', country: 'Malawi' },
    { code: '+60', country: 'Malaysia' },
    { code: '+960', country: 'Maldives' },
    { code: '+223', country: 'Mali' },
    { code: '+356', country: 'Malta' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+222', country: 'Mauritania' },
    { code: '+230', country: 'Mauritius' },
    { code: '+52', country: 'Mexico' },
    { code: '+691', country: 'Micronesia' },
    { code: '+373', country: 'Moldova' },
    { code: '+377', country: 'Monaco' },
    { code: '+976', country: 'Mongolia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+212', country: 'Morocco' },
    { code: '+258', country: 'Mozambique' },
    { code: '+95', country: 'Myanmar' },
    { code: '+264', country: 'Namibia' },
    { code: '+674', country: 'Nauru' },
    { code: '+977', country: 'Nepal' },
    { code: '+31', country: 'Netherlands' },
    { code: '+64', country: 'New Zealand' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+227', country: 'Niger' },
    { code: '+234', country: 'Nigeria' },
    { code: '+850', country: 'North Korea' },
    { code: '+389', country: 'North Macedonia' },
    { code: '+47', country: 'Norway' },
    { code: '+968', country: 'Oman' },
    { code: '+92', country: 'Pakistan' },
    { code: '+680', country: 'Palau' },
    { code: '+507', country: 'Panama' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+595', country: 'Paraguay' },
    { code: '+51', country: 'Peru' },
    { code: '+63', country: 'Philippines' },
    { code: '+48', country: 'Poland' },
    { code: '+351', country: 'Portugal' },
    { code: '+974', country: 'Qatar' },
    { code: '+40', country: 'Romania' },
    { code: '+7', country: 'Russia' },
    { code: '+250', country: 'Rwanda' },
    { code: '+1-869', country: 'Saint Kitts and Nevis' },
    { code: '+1-758', country: 'Saint Lucia' },
    { code: '+1-784', country: 'Saint Vincent and the Grenadines' },
    { code: '+685', country: 'Samoa' },
    { code: '+378', country: 'San Marino' },
    { code: '+239', country: 'Sao Tome and Principe' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+221', country: 'Senegal' },
    { code: '+381', country: 'Serbia' },
    { code: '+248', country: 'Seychelles' },
    { code: '+232', country: 'Sierra Leone' },
    { code: '+65', country: 'Singapore' },
    { code: '+421', country: 'Slovakia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+252', country: 'Somalia' },
    { code: '+27', country: 'South Africa' },
    { code: '+211', country: 'South Sudan' },
    { code: '+34', country: 'Spain' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+249', country: 'Sudan' },
    { code: '+597', country: 'Suriname' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+963', country: 'Syria' },
    { code: '+886', country: 'Taiwan' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+255', country: 'Tanzania' },
    { code: '+66', country: 'Thailand' },
    { code: '+670', country: 'Timor-Leste' },
    { code: '+228', country: 'Togo' },
    { code: '+676', country: 'Tonga' },
    { code: '+1-868', country: 'Trinidad and Tobago' },
    { code: '+216', country: 'Tunisia' },
    { code: '+90', country: 'Turkey' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+256', country: 'Uganda' },
    { code: '+380', country: 'Ukraine' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+1', country: 'United States' },
    { code: '+598', country: 'Uruguay' },
    { code: '+998', country: 'Uzbekistan' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+379', country: 'Vatican City' },
    { code: '+58', country: 'Venezuela' },
    { code: '+84', country: 'Vietnam' },
    { code: '+967', country: 'Yemen' },
    { code: '+260', country: 'Zambia' },
    { code: '+263', country: 'Zimbabwe' },
  ];

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation with country-specific rules
  const getPhoneValidation = (countryCode: string, phone: string) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if phone contains only digits
    if (phone && !/^\d+$/.test(phone)) {
      return { valid: false, error: 'Phone number must contain only digits (no letters or special characters)' };
    }
    
    if (!phone) {
      return { valid: true, error: '' }; // Empty is valid (optional field)
    }
    
    // Country-specific validation rules
    const validationRules: { [key: string]: { min: number; max: number; typical: number } } = {
      '+1': { min: 10, max: 10, typical: 10 },           // US, Canada
      '+44': { min: 10, max: 10, typical: 10 },          // UK
      '+91': { min: 10, max: 10, typical: 10 },          // India
      '+61': { min: 9, max: 9, typical: 9 },             // Australia
      '+81': { min: 10, max: 10, typical: 10 },          // Japan
      '+86': { min: 11, max: 11, typical: 11 },          // China
      '+33': { min: 9, max: 9, typical: 9 },             // France
      '+49': { min: 10, max: 11, typical: 10 },          // Germany
      '+39': { min: 9, max: 10, typical: 10 },           // Italy
      '+34': { min: 9, max: 9, typical: 9 },             // Spain
      '+7': { min: 10, max: 10, typical: 10 },           // Russia, Kazakhstan
      '+55': { min: 10, max: 11, typical: 11 },          // Brazil
      '+52': { min: 10, max: 10, typical: 10 },          // Mexico
      '+27': { min: 9, max: 9, typical: 9 },             // South Africa
      '+971': { min: 9, max: 9, typical: 9 },            // UAE
      '+966': { min: 9, max: 9, typical: 9 },            // Saudi Arabia
      '+65': { min: 8, max: 8, typical: 8 },             // Singapore
      '+82': { min: 9, max: 10, typical: 10 },           // South Korea
      '+60': { min: 9, max: 10, typical: 10 },           // Malaysia
      '+62': { min: 9, max: 12, typical: 10 },           // Indonesia
      '+63': { min: 10, max: 10, typical: 10 },          // Philippines
      '+64': { min: 8, max: 10, typical: 9 },            // New Zealand
      '+92': { min: 10, max: 10, typical: 10 },          // Pakistan
      '+880': { min: 10, max: 10, typical: 10 },         // Bangladesh
      '+94': { min: 9, max: 9, typical: 9 },             // Sri Lanka
    };
    
    // Get validation rule for the country code
    const rule = validationRules[countryCode] || { min: 7, max: 15, typical: 10 }; // Default rule
    
    const length = cleanPhone.length;
    
    if (length < rule.min) {
      return { 
        valid: false, 
        error: `Phone number must be at least ${rule.min} digits for ${countryCode}` 
      };
    }
    
    if (length > rule.max) {
      return { 
        valid: false, 
        error: `Phone number must be at most ${rule.max} digits for ${countryCode}` 
      };
    }
    
    return { valid: true, error: '' };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      setFormData({
        ...formData,
        [name]: value,
      });
      
      // Validate email on change
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    } else if (name === 'phone') {
      setFormData({
        ...formData,
        [name]: value,
      });
      
      // Validate phone on change
      const validation = getPhoneValidation(formData.countryCode, value);
      if (validation.error) {
        setPhoneError(validation.error);
      } else {
        setPhoneError('');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final email validation before submit
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Final phone validation before submit
    const phoneValidation = getPhoneValidation(formData.countryCode, formData.phone);
    if (phoneValidation.error) {
      setPhoneError(phoneValidation.error);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Integration - Sending email to bhaanugali@gmail.com
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: formData.message,
        to_email: 'bhaanugali@gmail.com',  // Recipient email
        reply_to: formData.email,  // For easy replies
      };

      await emailjs.send(
        'service_8tgsieq',      // EmailJS Service ID
        'template_6a860s1',     // EmailJS Template ID
        templateParams,
        'oNXugRmlSnKr0Iqzx'     // EmailJS Public Key
      );
      
      console.log('✅ Email sent successfully to bhaanugali@gmail.com');
      console.log('Form Data:', {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: formData.message,
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Bhaanugali@gmail.com',
      href: 'mailto:bhaanugali@gmail.com',
      color: '#4CC9F0',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8897337687',
      href: 'tel:+918897337687',
      color: '#0E3A84',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhaanu-gali',
      color: '#0077B5',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/BhaanuG',
      color: '#333',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/g_bhaanu_sai',
      color: '#E4405F',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <ContactBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 mb-4"
          >
            <Send className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Contact</span>
          </motion.div>
          <h2 className="text-white mb-4">Let's Connect</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm">
              <h3 className="text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#0A1A3F]/30 hover:bg-[#0A1A3F]/50 transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-lg bg-gradient-to-br from-[#4CC9F0]/20 to-[#0E3A84]/20"
                    >
                      <info.icon className="text-[#4CC9F0]" size={24} />
                    </motion.div>
                    <div>
                      <div className="text-white/60 mb-1">{info.label}</div>
                      <div className="text-white group-hover:text-[#4CC9F0] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm"
            >
              <h3 className="text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + 0.1 * index,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-[#4CC9F0]/20 to-[#0E3A84]/20 hover:from-[#4CC9F0]/30 hover:to-[#0E3A84]/30 transition-all"
                  >
                    <social.icon className="text-[#4CC9F0]" size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm flex flex-col justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              className="text-6xl mb-6 text-center"
            >
              👨‍💻
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white text-center mb-4"
            >
              Gali Bhaanu
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#4CC9F0] text-center mb-4"
            >
              AI & Cloud Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/70 text-center mb-6"
            >
              B.Tech CSE Student at KL University
              <br />
              Srikalahasti, Andhra Pradesh
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-2"
            >
              <div className="p-3 rounded-lg bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-center text-white/80">
                🤖 Generative AI
              </div>
              <div className="p-3 rounded-lg bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-center text-white/80">
                ☁️ Cloud Computing
              </div>
              <div className="p-3 rounded-lg bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-center text-white/80">
                🌐 Web Development
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Form - Full Width at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm">
            <h3 className="text-white mb-6 text-center">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A1A3F]/50 border border-[#4CC9F0]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#4CC9F0] focus:ring-1 focus:ring-[#4CC9F0] transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A1A3F]/50 border border-[#4CC9F0]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#4CC9F0] focus:ring-1 focus:ring-[#4CC9F0] transition-all"
                    placeholder="your.email@example.com"
                  />
                  {emailError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2 mt-1 text-sm text-red-500"
                    >
                      <AlertCircle size={16} className="inline-block mr-1" />
                      {emailError}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="grid grid-cols-[180px_1fr] gap-4">
                <div>
                  <label htmlFor="countryCode" className="block text-white/80 mb-2">
                    Country Code
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-lg bg-[#0A1A3F]/50 border border-[#4CC9F0]/30 text-white focus:outline-none focus:border-[#4CC9F0] focus:ring-1 focus:ring-[#4CC9F0] transition-all"
                  >
                    {countryCodes.map((code) => (
                      <option key={code.code + code.country} value={code.code} className="bg-[#0A1A3F]">
                        {code.code} ({code.country})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A1A3F]/50 border border-[#4CC9F0]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#4CC9F0] focus:ring-1 focus:ring-[#4CC9F0] transition-all"
                    placeholder="1234567890"
                  />
                  {phoneError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2 mt-1 text-sm text-red-500"
                    >
                      <AlertCircle size={16} className="inline-block mr-1" />
                      {phoneError}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1A3F]/50 border border-[#4CC9F0]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#4CC9F0] focus:ring-1 focus:ring-[#4CC9F0] transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#4CC9F0] to-[#0E3A84] text-white flex items-center justify-center gap-2 transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#4CC9F0]/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300"
                >
                  ✗ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50">
            © 2025 Gali Bhaanu. Built with Passion and Dedication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}