
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-harmony-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Harmony Motion Studios", "和谐动画工作室")}</h3>
            <p className="mb-4">{t("Bridging Cultures, Crafting Stories", "连接文化，创造故事")}</p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Linkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-harmony-gold transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Quick Links", "快速链接")}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-harmony-gold transition-colors">{t("Home", "首页")}</Link></li>
              <li><Link to="/about" className="hover:text-harmony-gold transition-colors">{t("About Us", "关于我们")}</Link></li>
              <li><Link to="/portfolio" className="hover:text-harmony-gold transition-colors">{t("Portfolio", "作品集")}</Link></li>
              <li><Link to="/services" className="hover:text-harmony-gold transition-colors">{t("Services", "服务")}</Link></li>
              <li><Link to="/partner" className="hover:text-harmony-gold transition-colors">{t("Partner With Us", "与我们合作")}</Link></li>
              <li><Link to="/blog" className="hover:text-harmony-gold transition-colors">{t("Blog", "博客")}</Link></li>
              <li><Link to="/contact" className="hover:text-harmony-gold transition-colors">{t("Contact", "联系我们")}</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Contact Us", "联系我们")}</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{t("La Fortuna, Costa Rica", "哥斯达黎加 拉福图纳")}</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:harmonymotionstudios@gmail.com" className="hover:text-harmony-gold transition-colors">
                  harmonymotionstudios@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+50661500559</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>&copy; {currentYear} {t("Harmony Motion Studios. All rights reserved.", "和谐动画工作室。版权所有。")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
