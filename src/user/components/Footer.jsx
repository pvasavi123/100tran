import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const serviceLinks = [
  { name: "Credential Evaluation", path: "/services" },
  { name: "Certificates", path: "/services" },
  { name: "Verifications", path: "/services" },
];

const companyLinks = [
  { name: "Careers", path: "#" },
  { name: "Contact Us", path: "/contact" },
  { name: "Become a partner", path: "#" },
  { name: "Discussions", path: "#" },
  { name: "Terms & Conditions", path: "#" },
  { name: "Privacy, Refund & Cancellation", path: "#" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/100Transcripts/",
    icon: <FaFacebookF />,
    bg: "hover:bg-blue-600",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@100transcriptsllp",
    icon: <FaYoutube />,
    bg: "hover:bg-red-500",
  },
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=%2B919941991402&text=Hi&type=phone_number&app_absent=0",
    icon: <FaWhatsapp />,
    bg: "hover:bg-green-500",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/100-transcripts-llp/",
    icon: <FaLinkedinIn />,
    bg: "hover:bg-sky-600",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#243b5a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                <span className="text-blue-400">100</span>{" "}
                <span className="text-white">Transcripts</span>
              </h2>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/85">
              Delivers fast, secure Indian university educational documents for
              global evaluations.
            </p>

            <div className="mt-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${item.bg}`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-blue-100/85">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-blue-100/85">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Contact Us
            </h4>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 p-3">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/10">
                    <FiMapPin className="text-sm text-blue-300" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      100 Transcripts LLP
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-100/80">
                      Plot No: 801, Mathrusree Nagar, Hyderabad, 500049
                    </p>
                  </div>
                </div>

                <div className="mt-3 space-y-2 text-xs text-blue-100/85">
                  <a
                    href="tel:+919941991402"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <FiPhone className="text-blue-300" />
                    <span>+91 994 199 1402</span>
                  </a>

                  <a
                    href="mailto:support@100Transcripts.com"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <FiMail className="text-blue-300" />
                    <span>support@100Transcripts.com</span>
                  </a>
                </div>
              </div>

              <div className="p-2">
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    title="100 Transcripts Location"
                    src="https://www.google.com/maps?q=Mathrusree%20Nagar,%20Hyderabad%20500049&output=embed"
                    className="h-24 w-full border-0"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=100+Transcripts+LLP+Plot+No+801+Mathrusree+Nagar+Hyderabad+500049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-blue-200 transition hover:text-white"
                >
                  Open in Google Maps
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 text-xs text-blue-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} 100 Transcripts LLP. All rights reserved.</p>

          <div className="flex gap-4">
            <Link to="#" className="transition hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="#" className="transition hover:text-white">
              Privacy, Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Mobile Responsiveness Styles */
const FooterMobileStyles = `
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2rem !important;
  }
  
  .footer-section {
    text-align: center !important;
  }
  
  .footer-links {
    justify-content: center !important;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  
  .footer-section {
    text-align: center !important;
  }
  
  .footer-title {
    font-size: 1.25rem !important;
  }
  
  .footer-description {
    font-size: 0.85rem !important;
    margin: 0 auto !important;
  }
  
  .contact-links {
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .office-map {
    height: 150px !important;
  }
  
  .footer-bottom {
    flex-direction: column !important;
    text-align: center !important;
    gap: 1rem !important;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 1rem !important;
  }
  
  .footer-title {
    font-size: 1.1rem !important;
  }
  
  .footer-description {
    font-size: 0.8rem !important;
  }
  
  .contact-link {
    padding: 0.75rem 1rem !important;
    font-size: 0.85rem !important;
  }
  
  .office-map {
    height: 120px !important;
  }
  
  .footer-bottom-links {
    flex-direction: column !important;
    gap: 0.5rem !important;
  }
}
`;

// Inject mobile styles into the document
if (typeof window !== 'undefined') {
  const styleId = 'footer-mobile-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = FooterMobileStyles;
    document.head.appendChild(style);
  }
}

export default Footer;
