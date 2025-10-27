import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a digital credit passport?",
      answer: "A digital credit passport is a blockchain-verified NFT that represents your creditworthiness score. It's stored on the Algorand blockchain and can be shared with lenders to prove your credit profile without traditional KYC requirements."
    },
    {
      question: "How does AI calculate my credit score?",
      answer: "Our AI analyzes multiple data points from your submitted documents including payment history, invoice patterns, utility bill payments, and business transactions. It uses machine learning algorithms to assess risk patterns and generate a comprehensive credit score."
    },
    {
      question: "Is KYC (Know Your Customer) needed?",
      answer: "No, our platform uses non-KYC based scoring. We rely on proof-of-data from your business operations rather than traditional identity verification. This makes the process faster and more accessible while maintaining security through blockchain verification."
    },
    {
      question: "How is my data kept private?",
      answer: "Your sensitive documents are hashed and only the hash is stored on-chain. This means the actual data never leaves your control. Lenders can verify the authenticity of your score without accessing your raw business data."
    },
    {
      question: "What documents can I submit for scoring?",
      answer: "You can submit various proof-of-data documents including invoices, utility bills, bank statements, tax returns, and loan payment histories. The more diverse your documentation, the more accurate your credit score will be."
    },
    {
      question: "How long does it take to get my credit score?",
      answer: "Once you submit your documents, our AI typically processes them within 2-5 minutes. You'll receive a notification when your score is ready, and you can then mint your digital credit passport NFT."
    },
    {
      question: "Can I update my credit score?",
      answer: "Yes, you can submit new documents at any time to update your credit profile. Each submission will generate a new score, and you can mint a new NFT passport to reflect your improved creditworthiness."
    },
    {
      question: "How do lenders verify my passport?",
      answer: "Lenders can verify your digital passport by entering your NFT ID or wallet address in our verification system. The blockchain ensures the authenticity of your score, and lenders can see your verified credit profile instantly."
    },
    {
      question: "What is Algorand and why do you use it?",
      answer: "Algorand is a high-performance blockchain known for its speed, security, and low transaction costs. We use it because it provides instant finality for transactions, making credit passport verification immediate and reliable."
    },
    {
      question: "Is there a fee for minting my credit passport?",
      answer: "The platform itself is free to use. However, there are minimal blockchain transaction fees (gas fees) when minting your NFT passport on the Algorand network. These fees are typically very small, usually less than $0.01."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about CreditChain
            </p>
          </div>

          <Card className="p-8 glass-card">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
