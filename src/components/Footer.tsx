import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-secondary border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              ASA Personalizados
            </h3>
            <p className="text-sm text-muted-foreground">
              Transformando ideias em realidade digital
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={() => {
                const element = document.getElementById("hero");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} ASA Personalizados. Todos os direitos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
