import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(9.99);
  const [tenure, setTenure] = useState<number>(60);

  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && tenure > 0) {
      const p = loanAmount;
      const r = (interestRate / 12) / 100;
      const n = tenure;
      
      const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPaymentCalc = emiCalc * n;
      const totalInterestCalc = totalPaymentCalc - p;

      setEmi(Math.round(emiCalc));
      setTotalPayment(Math.round(totalPaymentCalc));
      setTotalInterest(Math.round(totalInterestCalc));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, tenure]);

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing. No Surprises.</h2>
          <p className="text-lg text-foreground/70">Plan your finances with our intuitive EMI calculator.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold text-foreground/80">Loan Amount</Label>
                <div className="bg-white/50 px-4 py-1.5 rounded-lg font-mono font-medium border border-white/60">
                  {formatCurrency(loanAmount)}
                </div>
              </div>
              <Slider 
                value={[loanAmount]} 
                onValueChange={(vals) => setLoanAmount(vals[0])} 
                max={900000} 
                min={10000} 
                step={10000}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-foreground/50 font-medium">
                <span>{formatCurrency(10000)}</span>
                <span>{formatCurrency(900000)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold text-foreground/80">Interest Rate (p.a)</Label>
                <div className="flex items-center bg-white/50 px-3 py-1 rounded-lg border border-white/60 w-24">
                  <Input 
                    type="number" 
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                    className="h-8 border-0 bg-transparent shadow-none focus-visible:ring-0 px-1 text-right font-mono font-medium"
                    step="0.01"
                  />
                  <span className="text-sm font-bold text-foreground/70">%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold text-foreground/80">Tenure (Months)</Label>
                <div className="bg-white/50 px-4 py-1.5 rounded-lg font-mono font-medium border border-white/60">
                  {tenure} mo
                </div>
              </div>
              <Slider 
                value={[tenure]} 
                onValueChange={(vals) => setTenure(vals[0])} 
                max={84} 
                min={6} 
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-foreground/50 font-medium">
                <span>6 Months</span>
                <span>84 Months</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wider text-sm">Monthly EMI</p>
                <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                  {formatCurrency(emi)}
                </h3>
              </div>

              <div className="h-px bg-primary-foreground/20 w-full"></div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-primary-foreground/70 font-medium text-sm mb-1">Principal Amount</p>
                  <p className="text-xl font-bold">{formatCurrency(loanAmount)}</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 font-medium text-sm mb-1">Total Interest</p>
                  <p className="text-xl font-bold">{formatCurrency(totalInterest)}</p>
                </div>
                <div className="col-span-2 pt-2">
                  <p className="text-primary-foreground/70 font-medium text-sm mb-1">Total Amount Payable</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalPayment)}</p>
                </div>
              </div>
              
              <div className="pt-4">
                 <p className="text-xs text-primary-foreground/60 leading-relaxed">
                   * This calculator is for illustrative purposes only. Actual rates and processing fees may vary based on your profile and documentation.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
