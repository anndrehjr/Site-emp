import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Criatividade",
      description: "Cada projeto é único e desenvolvido com atenção aos detalhes.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Soluções que agregam valor e impulsionam seu negócio.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Suporte dedicado em todas as etapas do projeto.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A ASA Personalizados é especializada em criar soluções digitais que
            transformam ideias em realidade. Com experiência em design e
            desenvolvimento, oferecemos serviços personalizados para atender às
            necessidades únicas de cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-xl p-8 shadow-medium hover:shadow-large transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
