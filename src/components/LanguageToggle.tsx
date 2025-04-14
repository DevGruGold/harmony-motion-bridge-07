
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-2 rounded-full">
      <Globe className="h-4 w-4 text-current" />
      <RadioGroup
        value={language}
        onValueChange={(value) => setLanguage(value as "en" | "cn")}
        className="flex items-center space-x-4"
      >
        <div className="flex items-center space-x-1">
          <RadioGroupItem value="en" id="language-en" />
          <Label htmlFor="language-en" className="text-sm cursor-pointer">
            EN
          </Label>
        </div>
        <div className="flex items-center space-x-1">
          <RadioGroupItem value="cn" id="language-cn" />
          <Label htmlFor="language-cn" className="text-sm cursor-pointer">
            中文
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default LanguageToggle;
