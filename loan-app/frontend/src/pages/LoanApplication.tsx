import { useState } from "react";
import LoanForm from "@/components/organisms/LoanForm";
import LoanResults from "@/components/organisms/LoanResults";
import CardContainer from "@/components/molecules/CardContainer";

const LoanApplication = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="w-full">
      <CardContainer title="Apply for a Loan">
        <LoanForm onResults={setResults} />
        {results.length > 0 && <LoanResults offers={results} />}
      </CardContainer>
    </div>
  );
};

export default LoanApplication;