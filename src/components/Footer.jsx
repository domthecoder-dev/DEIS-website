import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2025 DE Innovative Solutions. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          We value your privacy and promise to keep your information secure.
        </p>
        <div className="mt-4 flex justify-center space-x-4 text-sm">
          <Link to="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-accent">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}