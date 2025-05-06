
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-afriroots-cream/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have questions about our products or want to collaborate? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-afriroots-green-dark mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-afriroots-green/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-afriroots-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">hello@afriroots.com</p>
                  <p className="text-gray-600">support@afriroots.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-afriroots-green/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-afriroots-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+234 (0) 123 456 7890</p>
                  <p className="text-gray-600">Mon-Fri, 9am-5pm GMT</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-afriroots-green/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-afriroots-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Visit Us</h4>
                  <p className="text-gray-600">123 Healthy Street</p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-bold text-afriroots-green-dark mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-afriroots-green hover:bg-afriroots-green-dark text-white p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-afriroots-green hover:bg-afriroots-green-dark text-white p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-afriroots-green hover:bg-afriroots-green-dark text-white p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-afriroots-green hover:bg-afriroots-green-dark text-white p-3 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-afriroots-green-dark mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this regarding?" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
