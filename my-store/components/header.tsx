import Link from "next/link";

const leftNavigation = [
  { href: "/", label: "TRANG CHỦ" },
  { href: "/thuc-don", label: "THỰC ĐƠN" },
  { href: "/cau-chuyen", label: "CÂU CHUYỆN" },
];

const rightNavigation = [
  { href: "/van-chuyen", label: "VẬN CHUYỂN" },
  { href: "/ban-tin", label: "BẢN TIN" },
  { href: "/lien-he", label: "LIÊN HỆ" },
];

const navigationLinkClass =
  "nav-link whitespace-nowrap text-lg font-normal text-foreground/85 transition-[color,text-shadow,transform] duration-200 hover:-translate-y-0.5 hover:text-primary";

function NavigationLinks({
  items,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
}) {
  return items.map((item) => (
    <Link key={item.href} href={item.href} className={navigationLinkClass}>
      {item.label}
    </Link>
  ));
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-[0_8px_24px_rgb(40_29_21_/_8%)] backdrop-blur-md">
      <div className="flex w-full flex-col px-2 sm:px-3 lg:px-4">
        <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 lg:grid">
          <nav
            aria-label="Điều hướng chính bên trái"
            className="flex items-center justify-evenly gap-3"
          ><NavigationLinks items={leftNavigation} />
          </nav>

          <Link
            href="/"
            aria-label="Bánh Mì Thảo Trang - Trang chủ"
            className="group flex min-w-64 flex-col items-center px-3 text-center"
          >
            <span className="font-display text-4xl font-bold leading-none text-foreground transition-colors group-hover:text-primary">
              Thảo Trang
            </span>
            <span className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-primary">
              Bánh mì gia truyền
            </span>
          </Link>

          <nav
            aria-label="Điều hướng chính bên phải"
            className="flex items-center justify-evenly gap-3"
          >
            <NavigationLinks items={rightNavigation} />
          </nav>
        </div>

        <div className="flex min-h-16 items-center justify-center lg:hidden">
          <Link
            href="/"
            aria-label="Bánh Mì Thảo Trang - Trang chủ"
            className="group flex flex-col items-center text-center"
          >
            <span className="font-display text-3xl font-bold leading-none text-foreground transition-colors group-hover:text-primary">
              Thảo Trang
            </span>
            <span className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Bánh mì gia truyền
            </span>
          </Link>
        </div>

        <nav
          aria-label="Điều hướng chính"
          className="flex justify-between gap-5 overflow-x-auto border-t border-border px-1 py-2.5 lg:hidden"
        ><NavigationLinks items={[...leftNavigation, ...rightNavigation]} />
        </nav>
      </div>
    </header>
  );
}
