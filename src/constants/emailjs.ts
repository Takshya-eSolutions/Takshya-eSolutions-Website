// EmailJS Configuration
// TODO: Replace these temporary values with actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Service ID from EmailJS dashboard
  SERVICE_ID: 'service_vov5ibb', // Replace with actual service ID
  
  // Template ID from EmailJS dashboard
  TEMPLATE_ID: 'template_c8fe955', // Replace with actual template ID
  
  // Public Key from EmailJS dashboard
  PUBLIC_KEY: '7Vj1Amq0zKVFAA0KH', // Replace with actual public key
  
  // User ID (optional, can be same as public key)
  USER_ID: '7Vj1Amq0zKVFAA0KH', // Replace with actual user ID
};

// Email template parameters mapping
export const EMAIL_TEMPLATE_PARAMS = {
  FROM_NAME: 'from_name',
  FROM_EMAIL: 'from_email', 
  COMPANY: 'company',
  MESSAGE: 'message',
  TO_NAME: 'to_name',
  TO_EMAIL: 'to_email',
};

// Default recipient information
export const DEFAULT_RECIPIENT = {
  name: 'Takshya eSolutions Team',
  email: 'takshya.esolutions@gmail.com', // Replace with actual contact email
};
