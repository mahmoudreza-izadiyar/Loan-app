import React from "react";

interface Offer {
  name: string;
  monthlyRepayment: number;
  interestRate: number;
  fees: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
    <div className="p-4 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200 shadow-sm">
      <h3 className="text-lg font-semibold text-blue-600">{offer.name}</h3>
      <div className="mt-2 space-y-1">
        <p className="flex justify-between">
          <span className="text-gray-600">Monthly Payment:</span>
          <span className="font-medium">${offer.monthlyRepayment}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-600">Interest Rate:</span>
          <span className="font-medium">{offer.interestRate}% APR</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-600">Fees:</span>
          <span className="font-medium">{offer.fees}</span>
        </p>
      </div>
    </div>
  );
};

export default OfferCard;