
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Last Updated: May 5, 2023
              </p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2>2. Reservation and Payment</h2>
              <p>
                Reservations are confirmed upon receipt of the required deposit. The deposit amount varies based on the length of stay and season. Full payment is required 30 days prior to check-in. Payments can be made by credit card, bank transfer, or other methods specified at the time of booking.
              </p>
              
              <h2>3. Cancellation Policy</h2>
              <p>
                Our cancellation policy is as follows:
              </p>
              <ul>
                <li>Cancellations made 60 days or more before check-in: Full refund minus a 10% administrative fee.</li>
                <li>Cancellations made 30-59 days before check-in: 50% refund.</li>
                <li>Cancellations made less than 30 days before check-in: No refund.</li>
                <li>We recommend purchasing travel insurance to protect against unforeseen circumstances.</li>
              </ul>
              
              <h2>4. Check-In and Check-Out</h2>
              <p>
                Check-in time is 3:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request and is subject to availability and additional fees.
              </p>
              
              <h2>5. House Rules</h2>
              <p>
                During your stay, you agree to:
              </p>
              <ul>
                <li>Not exceed the maximum occupancy of the houseboat.</li>
                <li>Respect noise restrictions between 10:00 PM and 8:00 AM.</li>
                <li>Not smoke inside the houseboat (smoking is permitted only in designated outdoor areas).</li>
                <li>Not bring pets unless specifically arranged and approved in advance.</li>
                <li>Return all equipment and accessories in the same condition as received.</li>
                <li>Report any damages or issues promptly.</li>
              </ul>
              
              <h2>6. Liability and Insurance</h2>
              <p>
                Houseboat Haven is not responsible for any injuries, accidents, losses, or damages that occur during your stay. We strongly recommend guests have appropriate travel and personal insurance coverage. You will be responsible for any damage to the houseboat or its contents during your stay.
              </p>
              
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted on this page with the updated revision date.
              </p>
              
              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at: info@houseboathaven.com or (555) 123-4567.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
