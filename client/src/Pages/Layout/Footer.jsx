import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={16} />, href: "#" },
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
    { icon: <Linkedin size={16} />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
  ];

  const menuLinks = [
    { title: "Menu", links: ["About", "Blog", "Contact", "Pages"] },
    { title: "Blog", links: ["Quote", "Post", "Video Post", "Gallery"] },
    { title: "Company", links: ["Select", "Services", "Payment"] },
    { title: "Services", links: ["Option", "Privling Page", "Account"] },
  ];

  return (
    <section className="bg-[#22324a] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left sm:text-left">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="font-bold text-2xl">Easy Frontend</h2>
            <div className="mt-3">
              <p className="opacity-50 max-w-xs mx-auto sm:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <h5 className="mt-8 lg:mt-10 mb-3 text-lg font-medium">Follow Us</h5>
            <ul className="flex justify-left sm:justify-start gap-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="w-8 h-8 bg-[#2e2f41] flex items-center justify-center rounded-full 
                    hover:bg-blue-600 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Columns */}
          {menuLinks.map((menu, index) => (
            <div key={index} className="lg:col-span-2">
              <h5 className="mb-3 text-lg font-medium">{menu.title}</h5>
              <ul className="flex flex-col gap-2">
                {menu.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#!"
                      className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-600" />

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="opacity-50 text-center md:text-left">
              Copyright © Easy Frontend, All rights reserved
            </p>
          </div>
          <div>
            <ul className="flex justify-center md:justify-end gap-4">
              {["Privacy", "Security", "Terms"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#!"
                    className="opacity-50 hover:opacity-80 transition-opacity duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;