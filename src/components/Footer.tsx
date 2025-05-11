
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-bold text-xl mb-4 block">
              Hispanic Business Chatbot
            </Link>
            <p className="text-gray-400 text-sm">
              Supporting Hispanic entrepreneurs with AI-powered guidance and personalized business solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-golden text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white text-sm">Dashboard</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-white text-sm">Tools & Guides</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white text-sm">Resources</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-terracotta text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Business Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Learning Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Hispanic Business Network</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-teal text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">support@hispanicbusinesschatbot.com</li>
              <li className="text-gray-300 text-sm">1-800-123-4567</li>
              <li className="text-gray-300 text-sm">123 Business Ave, Suite 100<br />San Diego, CA 92101</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Hispanic Business Chatbot. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
