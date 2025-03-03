import { useState, useEffect } from "react";
import LoanResults from "@/components/organisms/LoanResults";
import CardContainer from "@/components/molecules/CardContainer";
import axios from "axios";

const LoanResultsPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/loan-offers").then((response) => {
      setOffers(response.data);
    });
  }, []);

  return (
    <div className="w-full">
      <CardContainer title="Lender Offers">
        <LoanResults offers={offers} />
      </CardContainer>
    </div>
  );
};

export default LoanResultsPage;