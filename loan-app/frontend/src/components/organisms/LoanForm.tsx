import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
import LoanField from "../molecules/LoanField";
import FormRow from "../molecules/FormRow";
import Button from "../atoms/Button";
import { useState } from "react";

const loanSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  employmentStatus: z.enum(["Employed", "Self-Employed", "Unemployed"]),
  loanPurpose: z.enum(["Vehicle", "Home Improvement"]),
  amount: z.coerce.number().min(2000, "Minimum amount is $2000"),
  deposit: z.coerce.number().min(0, "Minimum deposit is $0"),
  term: z.coerce.number().min(1).max(7, "Loan term must be between 1-7 years"),
});

type LoanFormData = z.infer<typeof loanSchema>;

const LoanForm = ({ onResults }: { onResults: (data: any) => void }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanFormData>({
    resolver: zodResolver(loanSchema),
  });

  const onSubmit = async (data: LoanFormData) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/api/loan-application", data);
      onResults(response.data);
    } catch (error) {
      console.error("Error submitting loan application:", error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <FormRow columns={2}>
        <LoanField 
          label="First Name" 
          name="firstName" 
          register={register} 
          error={errors.firstName?.message} 
        />
        <LoanField 
          label="Last Name" 
          name="lastName" 
          register={register} 
          error={errors.lastName?.message} 
        />
      </FormRow>
      
      <FormRow columns={1}>
        <LoanField 
          label="Email" 
          name="email" 
          register={register} 
          error={errors.email?.message} 
        />
      </FormRow>
      
      <FormRow columns={2}>
        <LoanField 
          label="Employment Status" 
          name="employmentStatus" 
          options={["Employed", "Self-Employed", "Unemployed"]} 
          register={register} 
        />
        <LoanField 
          label="Loan Purpose" 
          name="loanPurpose" 
          options={["Vehicle", "Home Improvement"]} 
          register={register} 
        />
      </FormRow>
      
      <FormRow columns={3}>
        <LoanField 
          label="Amount" 
          name="amount" 
          type="number" 
          register={register} 
          error={errors.amount?.message} 
        />
        <LoanField 
          label="Deposit" 
          name="deposit" 
          type="number" 
          register={register} 
          error={errors.deposit?.message} 
        />
        <LoanField 
          label="Loan Term (years)" 
          name="term" 
          type="number" 
          register={register} 
          error={errors.term?.message} 
        />
      </FormRow>

      <div className="flex justify-center mt-6">
        <Button type="submit" label={loading ? "Submitting..." : "Apply"} disabled={loading} />
      </div>
    </form>
  );
};

export default LoanForm;