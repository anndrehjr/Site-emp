import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Megaphone, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Design Gráfico",
      description: "Criação de logotipos, identidades visuais, materiais promocionais e muito mais.",
      features: ["Logotipos", "Identidade Visual", "Material Promocional", "Branding"],
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados para todos os dispositivos.",
      features: ["Sites Responsivos", "E-commerce", "Landing Pages", "Aplicações Web"],
    },
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Estratégias personalizadas para aumentar sua presença online em todas plataformas.",
      features: ["Redes Sociais", "SEO", "Anúncios", "Conteúdo"],
    },
    {
      icon: Package,
      title: "Pacotes Completos",
      description: "Soluções integradas que combinam design, desenvolvimento e marketing.",
      features: ["Consultoria", "Manutenção", "Suporte", "Treinamento"],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5518996791377", "_blank");
  };

  return (
    <section id="services" className="py-24 px-4 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços personalizados para atender às
            necessidades do seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-large transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
