import React, { useState } from 'react';
import Modal from './Modal';

const DonationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    amount: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow digits and limit to 12 characters
    if (name === 'phoneNumber') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 12) {
        setFormData({ ...formData, [name]: cleaned });
      }
      return;
    }
    
    // For amount, only allow numbers
    if (name === 'amount') {
      const cleaned = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: cleaned });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: Integrate with M-Pesa Daraja API
    console.log('Processing donation:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Show success message or handle response
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            Make a Donation
          </h2>
          <p className="text-gray-600 mb-6">
            Your support helps us make a difference
          </p>
        </div>

        {/* M-Pesa Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/mpesa-logo.png"
            alt="M-Pesa"
            className="h-12"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              M-Pesa Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">+254</span>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                required
                className="block w-full pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="7XX XXX XXX"
                value={formData.phoneNumber}
                onChange={handleChange}
                maxLength="12"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Enter your M-Pesa registered phone number
            </p>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount (KES)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">KES</span>
              </div>
              <input
                type="text"
                name="amount"
                id="amount"
                required
                className="block w-full pl-14 pr-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="1000"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Minimum donation amount: KES 10
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">How it works:</h3>
            <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
              <li>Enter your M-Pesa registered phone number</li>
              <li>Enter the amount you wish to donate</li>
              <li>Click "Donate Now" to proceed</li>
              <li>You will receive an M-Pesa prompt on your phone</li>
              <li>Enter your M-Pesa PIN to complete the donation</li>
            </ol>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Donate Now'
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Your donation will help us continue our mission to help those in need.</p>
          <p className="mt-1">
            For any issues, please contact us at{' '}
            <a href="mailto:support@Kosodo.org" className="text-orange-500 hover:text-orange-600">
              support@Kosodo.org
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default DonationModal;
