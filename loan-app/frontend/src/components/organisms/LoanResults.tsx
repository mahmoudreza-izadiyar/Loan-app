import React from "react";
import OfferCard from "../molecules/OfferCard";

interface Offer {
  name: string;
  monthlyRepayment: number;
  interestRate: number;
  fees: string;
}

const LoanResults: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  return (
    <div className="w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Lender Offers</h2>
      {offers.length === 0 ? (
        <p className="text-gray-600 text-center">No offers available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer, index) => (
            <OfferCard key={index} offer={offer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoanResults;