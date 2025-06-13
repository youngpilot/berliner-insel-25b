
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-32 flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="text-houseboat-blue hover:text-houseboat-darkblue transition-colors">
                &larr; Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Last Updated: May 5, 2023
              </p>
              
              <h2>1. Introduction</h2>
              <p>
                Houseboat Haven ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This privacy policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our website, including:
              </p>
              <ul>
                <li>Personal information such as name, postal address, email address, telephone number, and payment information when you book our houseboat or contact us.</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                <li>Non-personal information such as browser type, language preference, referring site, and the date and time of each visitor request.</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use information that we collect about you or that you provide to us:
              </p>
              <ul>
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To notify you about changes to our website or any products or services we offer.</li>
                <li>In any other way we may describe when you provide the information.</li>
              </ul>
              
              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may disclose aggregated information about our users without restriction. We may disclose personal information:
              </p>
              <ul>
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
              
              <h2>6. Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page.
              </p>
              
              <h2>7. Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@houseboathaven.com or (555) 123-4567.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
