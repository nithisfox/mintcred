import { motion } from "framer-motion";
import { Zap, FileText, CalendarClock, Briefcase } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Approval in < 10 Minutes",
      description: "Our proprietary algorithm evaluates your business data instantly to provide lightning-fast decisions."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Minimal Documentation",
      description: "No physical paperwork. Connect your bank account or upload digital statements and you're done."
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-primary" />,
      title: "Flexible EMI",
      description: "Choose repayment terms that align with your cash flow. Up to 84 months of flexible tenure."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Designed for Self-Employed",
      description: "We understand that business income isn't always linear. Our models are built for real entrepreneurs."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-[#F4F9E8]/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Capital That Moves at Your Speed
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            Traditional banks look at where you've been. We look at where you're going.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
