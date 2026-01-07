import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center bg-dark-950">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            4<span className="text-accent-500">0</span>4
          </h1>
          <h2 className="text-2xl md:text-4xl text-white mb-8">
            Page Not Found
          </h2>
          <p className="text-dark-300 max-w-lg mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-accent inline-flex items-center">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFoundPage;