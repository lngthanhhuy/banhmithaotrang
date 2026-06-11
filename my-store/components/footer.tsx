import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const CONTACT = {
  address: "18A Nguyễn Văn Bứa, Xuân Thới Sơn, Hồ Chí Minh, Vietnam",
  phoneDisplay: "0938948472",
  phoneHref: "tel:+84938948472",
  email: "hi@thaotrang.vn",
  openingHours:
    "Mở cửa hằng ngày\n05:00 - 12:00: Bánh mì thịt với đầy đủ các loại nhân\n12:00 - 19:00: Bánh mì không, các loại chả và chà bông",
  facebook: "https://www.facebook.com/banhmithaotrang",
  instagram: "https://www.instagram.com/banhmithaotrang",
  zalo: "https://zalo.me/0938948472",
};

const facebookPluginUrl =
  "https://www.facebook.com/plugins/page.php?" +
  new URLSearchParams({
    href: CONTACT.facebook,
    tabs: "timeline",
    width: "500",
    height: "360",
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  }).toString();

const googleMapsUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0905576458395!2d106.58026957504332!3d10.88071668927442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a7fcfea299b%3A0xdd7d77681476bd3a!2zTMOyIELDoW5oIE3DrCBUaOG6o28gVHJhbmc!5e0!3m2!1sen!2s!4v1781163313640!5m2!1sen!2s";

const googleMapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=10.88071668927442%2C106.58026957504332";

const contactItems = [
  {
    icon: MapPin,
    label: CONTACT.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      CONTACT.address,
    )}`,
  },
  {
    icon: Phone,
    label: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: Clock3,
    label: CONTACT.openingHours,
  },
  {
    icon: Mail,
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: CONTACT.facebook,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: CONTACT.instagram,
  },
  {
    icon: SiZalo,
    label: "Zalo",
    href: CONTACT.zalo,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-background text-foreground">
      <div className="grid w-full gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_1fr_1.15fr] lg:gap-8 lg:px-8 xl:gap-12 xl:px-12">
        <section aria-labelledby="footer-brand">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Lò bánh gia đình 20 năm
          </p>
          <h2
            id="footer-brand"
            className="font-display text-4xl font-bold leading-none text-foreground sm:text-5xl"
          >
            Bánh Mì Thảo Trang
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-foreground/70">
            Gìn giữ hương vị bánh mì truyền thống và phục vụ tận tâm từ những
            mẻ bánh nóng mỗi ngày.
          </p>

          <address className="mt-7 space-y-4 not-italic">
            {contactItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                  </span>
                  <span className="whitespace-pre-line">{label}</span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex w-fit items-center gap-3 text-sm leading-6 text-foreground/75 transition-colors hover:text-primary"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm leading-6 text-foreground/75"
                >
                  {content}
                </div>
              );
            })}
          </address>

          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-[color,background-color,border-color,transform] hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon aria-hidden="true" size={20} />
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="footer-fanpage">
          <h2
            id="footer-fanpage"
            className="mb-5 font-nav text-2xl text-foreground"
          >
            Fanpage
          </h2>
          <div className="h-90 overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_45px_rgb(40_29_21_/_12%)]">
            <iframe
              title="Fanpage Bánh Mì Thảo Trang"
              src={facebookPluginUrl}
              width="500"
              height="360"
              loading="lazy"
              className="h-full w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <FaFacebookF aria-hidden="true" size={16} />
            Xem fanpage trên Facebook
          </a>
        </section>

        <section aria-labelledby="footer-map">
          <h2
            id="footer-map"
            className="mb-5 font-nav text-2xl text-foreground"
          >
            Google Maps
          </h2>
          <div className="h-90 overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_18px_45px_rgb(40_29_21_/_12%)]">
            <iframe
              title="Bản đồ Bánh Mì Thảo Trang"
              src={googleMapsUrl}
              width="600"
              height="360"
              loading="lazy"
              className="h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <MapPin aria-hidden="true" size={17} />
            Mở chỉ đường trên Google Maps
          </a>
        </section>
      </div>

      <div className="copyright-dough relative mt-12 bg-primary">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -top-14 left-0 h-16 w-full text-primary"
        >
          <path
            fill="currentColor"
            d="M0 66C138 17 247 80 393 53C555 23 658 4 812 45C981 90 1093 22 1236 38C1326 48 1389 67 1440 52V90H0V66Z"
          />
        </svg>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="footer-flour-dust absolute inset-0" />
          <div className="footer-dough-ring footer-dough-ring-left" />
          <div className="footer-dough-ring footer-dough-ring-right" />
        </div>

        <div className="relative z-10 px-4 py-6 text-center text-xs text-primary-foreground/85 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Bánh Mì Thảo Trang. Giữ trọn hương vị gia
          truyền.
        </div>
      </div>
    </footer>
  );
}
