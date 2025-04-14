
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: t("Message Sent!", "消息已发送!"),
        description: t("We'll get back to you as soon as possible.", "我们会尽快回复您。"),
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("Contact Us", "联系我们")}</h1>
            <p className="text-xl">
              {t(
                "Let's start a conversation about how we can work together to create amazing cross-cultural animation.",
                "让我们开始讨论如何共同创作精彩的跨文化动画。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-harmony-blue">{t("Get In Touch", "联系我们")}</h2>
              <p className="text-lg mb-8">
                {t(
                  "Whether you're interested in partnering with us, have questions about our services, or simply want to learn more about cross-cultural animation collaboration, we'd love to hear from you.",
                  "无论您是希望与我们合作，对我们的服务有疑问，还是只是想了解更多关于跨文化动画合作的信息，我们都很乐意听取您的意见。"
                )}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-harmony-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-harmony-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("Location", "位置")}</h3>
                    <p>{t("La Fortuna, Costa Rica", "哥斯达黎加 拉福图纳")}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-harmony-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-harmony-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("Email", "电子邮件")}</h3>
                    <a href="mailto:harmonymotionstudios@gmail.com" className="text-harmony-blue hover:underline">
                      harmonymotionstudios@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-harmony-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-harmony-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("Phone", "电话")}</h3>
                    <p>+50661500559</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">{t("Connect With Us", "与我们连接")}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-harmony-blue/10 hover:bg-harmony-blue hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-harmony-blue/10 hover:bg-harmony-blue hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-harmony-blue/10 hover:bg-harmony-blue hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-harmony-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{t("Send Us a Message", "给我们发送消息")}</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">{t("Name", "姓名")}</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("Your name", "您的姓名")}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">{t("Email", "电子邮件")}</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("your.email@example.com", "您的邮箱@example.com")}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-2 font-medium">{t("Company", "公司")}</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t("Your company name", "您的公司名称")}
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block mb-2 font-medium">
                      {t("I'm interested in", "我对以下内容感兴趣")}
                    </label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("Select an option", "选择一个选项")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">{t("Partnership Opportunities", "合作机会")}</SelectItem>
                        <SelectItem value="services">{t("Services Inquiry", "服务咨询")}</SelectItem>
                        <SelectItem value="consulting">{t("Cultural Consulting", "文化咨询")}</SelectItem>
                        <SelectItem value="general">{t("General Information", "一般信息")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">{t("Message", "消息")}</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("Tell us about your project or inquiry", "告诉我们您的项目或咨询")}
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-harmony-blue hover:bg-harmony-blue/80 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        {t("Sending...", "发送中...")}
                        <svg className="animate-spin ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t("Send Message", "发送消息")}
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
