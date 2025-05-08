
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-collagen-deep-purple mb-4">Collagène Extra</h3>
            <p className="text-gray-600 mb-4">
              La solution premium pour une peau visiblement plus jeune, plus hydratée et plus éclatante.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-500 hover:text-collagen-deep-purple transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Produit</h4>
            <ul className="space-y-2">
              {["Avantages", "Ingrédients", "Mode d'emploi", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-collagen-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {["À propos", "Contact", "Carrières", "Presse"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-collagen-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              {["Livraison", "Retours", "Politique de confidentialité", "Conditions générales"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-collagen-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Collagène Extra. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
