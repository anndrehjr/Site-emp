import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 18 99679-1377",
      action: () => window.open("https://wa.me/5518996791377", "_blank"),
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "anndreh01@gmail.com",
      action: () => window.location.href = "mailto:anndreh01@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em
            contato e vamos conversar sobre o seu projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-medium transition-all duration-300 cursor-pointer border-border" onClick={contact.action}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{contact.title}</h3>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-large">
            <CardContent className="pt-8 pb-8">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Prefere conversar agora?</h3>
              <p className="mb-6 opacity-90">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("https://wa.me/5518996791377", "_blank")}
                className="font-semibold"
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
