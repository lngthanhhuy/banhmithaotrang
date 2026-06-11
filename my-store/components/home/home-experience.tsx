"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Clock3,
  PackageCheck,
  Snowflake,
  Sparkles,
  Truck,
  Wheat,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ingredients = [
  "Pate nhà làm",
  "Chả lụa",
  "Chà bông",
  "Đồ chua",
  "Rau thơm",
  "Ớt tươi",
];

const businessFeatures = [
  {
    icon: Building2,
    title: "Đơn hàng số lượng lớn",
    description:
      "Phục vụ trường học, doanh nghiệp, căn tin và các sự kiện theo nhu cầu thực tế.",
  },
  {
    icon: Clock3,
    title: "Giao trong 5 giờ",
    description:
      "Quy trình chuẩn bị rõ ràng giúp đơn hàng lớn vẫn giữ được độ nóng giòn.",
  },
  {
    icon: PackageCheck,
    title: "Đóng gói linh hoạt",
    description:
      "Có phương án đóng gói và vận chuyển phù hợp cho từng quy mô đơn hàng.",
  },
];

export default function HomeExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const breadRef = useRef<HTMLDivElement>(null);
  const breadInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const bread = breadRef.current;
      const breadInner = breadInnerRef.current;

      if (!root || !bread || !breadInner) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(bread, {
          position: "absolute",
          left: "auto",
          right: "-10vw",
          top: "20rem",
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 0.8,
          rotation: -3,
          autoAlpha: 1,
        });
        return;
      }

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        gsap.set(bread, {
          xPercent: -50,
          yPercent: -50,
          x: () => window.innerWidth * 0.25,
          y: () => window.innerHeight * 0.02,
          scale: 0.82,
          rotation: -2,
          autoAlpha: 1,
        });

        const floating = gsap.to(breadInner, {
          y: -12,
          rotation: 1.5,
          duration: 2.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        const createTransition = (
          sectionId: string,
          from: gsap.TweenVars,
          to: gsap.TweenVars,
        ) =>
          gsap.fromTo(bread, from, {
            ...to,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: `#${sectionId}`,
              start: "top 92%",
              end: "top 58%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

        const transitions = [
          createTransition(
            "hanh-trinh",
            {
              x: () => window.innerWidth * 0.25,
              y: () => window.innerHeight * 0.02,
              scale: 0.82,
              rotation: -2,
            },
            {
              x: () => -window.innerWidth * 0.27,
              y: () => window.innerHeight * 0.05,
              scale: 0.64,
              rotation: 6,
            },
          ),
          createTransition(
            "nguyen-lieu",
            {
              x: () => -window.innerWidth * 0.27,
              y: () => window.innerHeight * 0.05,
              scale: 0.64,
              rotation: 6,
            },
            {
              x: () => window.innerWidth * 0.27,
              y: () => -window.innerHeight * 0.03,
              scale: 0.7,
              rotation: -7,
            },
          ),
          createTransition(
            "don-hang-lon",
            {
              x: () => window.innerWidth * 0.27,
              y: () => -window.innerHeight * 0.03,
              scale: 0.7,
              rotation: -7,
            },
            {
              x: () => -window.innerWidth * 0.25,
              y: () => window.innerHeight * 0.06,
              scale: 0.58,
              rotation: 4,
            },
          ),
          createTransition(
            "giao-hang",
            {
              x: () => -window.innerWidth * 0.25,
              y: () => window.innerHeight * 0.06,
              scale: 0.58,
              rotation: 4,
            },
            {
              x: 0,
              y: () => window.innerHeight * 0.24,
              scale: 0.72,
              rotation: 0,
            },
          ),
        ];

        const fadeOut = gsap.to(bread, {
          autoAlpha: 0,
          scale: 0.64,
          ease: "none",
          scrollTrigger: {
            trigger: "#giao-hang",
            start: "top 48%",
            end: "top 28%",
            scrub: 1,
          },
        });

        return () => {
          floating.kill();
          transitions.forEach((transition) => {
            transition.scrollTrigger?.kill();
            transition.kill();
          });
          fadeOut.scrollTrigger?.kill();
          fadeOut.kill();
        };
      });

      media.add("(max-width: 1023px)", () => {
        gsap.set(bread, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          top: "84%",
          y: 0,
          scale: 0.88,
          rotation: -3,
          autoAlpha: 1,
        });

        const floating = gsap.to(breadInner, {
          y: -8,
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        const createTransition = (
          sectionId: string,
          from: gsap.TweenVars,
          to: gsap.TweenVars,
        ) =>
          gsap.fromTo(bread, from, {
            ...to,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: `#${sectionId}`,
              start: "top 94%",
              end: "top 55%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });

        const transitions = [
          createTransition(
            "hanh-trinh",
            { x: 0, top: "84%", scale: 0.88, rotation: -3 },
            {
              x: () => window.innerWidth * 0.12,
              top: "78%",
              scale: 0.72,
              rotation: 4,
            },
          ),
          createTransition(
            "nguyen-lieu",
            {
              x: () => window.innerWidth * 0.12,
              top: "78%",
              scale: 0.72,
              rotation: 4,
            },
            {
              x: () => -window.innerWidth * 0.12,
              top: "78%",
              scale: 0.65,
              rotation: -5,
            },
          ),
          createTransition(
            "don-hang-lon",
            {
              x: () => -window.innerWidth * 0.12,
              top: "78%",
              scale: 0.65,
              rotation: -5,
            },
            {
              x: () => window.innerWidth * 0.1,
              top: "80%",
              scale: 0.62,
              rotation: 3,
            },
          ),
          createTransition(
            "giao-hang",
            {
              x: () => window.innerWidth * 0.1,
              top: "80%",
              scale: 0.62,
              rotation: 3,
            },
            { x: 0, top: "82%", scale: 0.7, rotation: 0 },
          ),
        ];

        const fadeOut = gsap.to(bread, {
          autoAlpha: 0,
          scale: 0.58,
          ease: "none",
          scrollTrigger: {
            trigger: "#giao-hang",
            start: "top 50%",
            end: "top 30%",
            scrub: 0.8,
          },
        });

        return () => {
          floating.kill();
          transitions.forEach((transition) => {
            transition.scrollTrigger?.kill();
            transition.kill();
          });
          fadeOut.scrollTrigger?.kill();
          fadeOut.kill();
        };
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <main
      ref={rootRef}
      className="relative isolate overflow-clip bg-background text-foreground"
    >
      <div
        ref={breadRef}
        className="pointer-events-none fixed left-1/2 top-1/2 z-30 w-[min(48vw,46rem)] max-lg:w-[72vw]"
        aria-hidden="true"
      >
        <div ref={breadInnerRef}>
          <Image
            src="/images/banh-mi-journey.png"
            alt=""
            width={928}
            height={340}
            priority
            sizes="(max-width: 1023px) 72vw, 48vw"
            className="h-auto w-full drop-shadow-[0_28px_24px_rgba(82,44,15,0.22)]"
          />
        </div>
      </div>

      <section
        id="trang-chu"
        className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center px-4 py-20 max-sm:min-h-[110svh] max-sm:items-start max-sm:pb-64 max-sm:pt-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_36%,rgba(244,163,0,0.2),transparent_32%),radial-gradient(circle_at_14%_14%,rgba(255,106,0,0.12),transparent_25%)]" />
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          <div className="relative z-40 min-w-0 max-w-3xl lg:col-span-5">
            <div className="mb-6 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] shadow-[4px_4px_0_var(--foreground)]">
              <Sparkles className="size-4 text-primary" />
              Lò bánh gia đình hơn 20 năm
            </div>
            <h1 className="font-nav text-[clamp(4.2rem,9vw,9rem)] leading-[0.9] uppercase tracking-[-0.025em] text-primary [text-shadow:4px_4px_0_var(--secondary-foreground)] max-sm:text-[3.7rem]">
              Bánh mì
              <span className="block text-primary">Thảo Trang</span>
            </h1>
            <p className="mt-10 max-w-xl text-base font-medium leading-8 text-foreground/75 sm:text-lg">
              Từ lò bánh gia đình đến những ổ bánh nóng giòn mỗi ngày. Giữ
              trọn hương vị truyền thống, sẵn sàng phục vụ từ bữa sáng thân
              quen đến đơn hàng hàng nghìn phần.
            </p>
            <div className="mt-10 flex flex-wrap gap-5 max-sm:flex-col max-sm:items-start">
              <Link
                href="/thuc-don"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-[5px_5px_0_var(--foreground)] transition-transform hover:-translate-y-1"
              >
                Xem thực đơn
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3 font-bold transition-colors hover:bg-secondary"
              >
                Đặt số lượng lớn
              </Link>
            </div>
          </div>
          <div
            className="relative min-h-[25rem] lg:col-span-7 lg:min-h-[36rem]"
            aria-hidden="true"
          />
        </div>
      </section>

      <section
        id="hanh-trinh"
        className="relative flex min-h-screen scroll-mt-20 items-center bg-secondary px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(var(--secondary-foreground)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid w-full max-w-[92rem] items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          <div
            className="relative order-2 min-h-[24rem] lg:order-1 lg:col-span-6 lg:min-h-[34rem]"
            aria-hidden="true"
          />
          <div className="relative z-40 order-1 max-w-2xl lg:order-2 lg:col-span-6 lg:justify-self-end">
            <p className="font-nav text-2xl uppercase tracking-wide text-foreground">
              Chuyện bắt đầu từ
            </p>
            <h2 className="mt-4 font-nav text-[clamp(4rem,7vw,7.5rem)] leading-[0.96] uppercase text-primary">
              Một lò bánh nhỏ
            </h2>
            <div className="mt-10 border-l-4 border-primary pl-6">
              <p className="text-lg font-semibold leading-8 text-secondary-foreground/80">
                Hơn hai thập kỷ làm bánh không chỉ tạo nên kinh nghiệm. Đó còn
                là thói quen chọn nguyên liệu kỹ, canh từng mẻ nướng và trao ổ
                bánh đến tay khách khi còn thơm nóng.
              </p>
            </div>
            <Link
              href="/cau-chuyen"
              className="mt-10 inline-flex items-center gap-3 font-bold text-secondary-foreground underline decoration-primary decoration-4 underline-offset-8"
            >
              Đọc câu chuyện 20 năm
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="nguyen-lieu"
        className="relative flex min-h-screen scroll-mt-20 items-center px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute -left-20 top-24 size-64 rounded-full border-[3rem] border-primary/10" />
        <div className="relative mx-auto grid w-full max-w-[92rem] items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          <div className="relative z-40 max-w-2xl lg:col-span-5">
            <div className="flex items-center gap-3 text-primary">
              <Wheat className="size-7" />
              <p className="font-bold uppercase tracking-[0.18em]">
                Làm nên một ổ bánh ngon
              </p>
            </div>
            <h2 className="mt-6 font-nav text-[clamp(4rem,7vw,7rem)] leading-[0.96] uppercase text-primary">
              Đầy đặn từng lớp nhân
            </h2>
            <p className="mt-9 max-w-xl text-lg leading-8 text-foreground/70">
              Vỏ bánh giòn, ruột mềm và phần nhân cân bằng giữa vị béo, mặn,
              chua, cay. Mỗi thành phần đều có vai trò riêng, không có lớp nào
              chỉ để cho đầy.
            </p>
            <div className="mt-10 flex max-w-xl flex-wrap gap-4">
              {ingredients.map((ingredient, index) => (
                <span
                  key={ingredient}
                  className={`rounded-full border-2 border-foreground px-4 py-2 text-sm font-bold shadow-[3px_3px_0_var(--foreground)] ${
                    index % 2 === 0
                      ? "rotate-[-2deg] bg-primary text-primary-foreground"
                      : "rotate-[2deg] bg-secondary text-secondary-foreground"
                  }`}
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          <div
            className="relative min-h-[24rem] lg:col-span-7 lg:min-h-[34rem]"
            aria-hidden="true"
          />
        </div>
      </section>

      <section
        id="don-hang-lon"
        className="relative flex min-h-screen scroll-mt-20 items-center bg-accent px-4 py-24 text-accent-foreground sm:px-6 lg:px-8"
      >
        <div className="absolute inset-x-0 top-0 h-5 bg-[linear-gradient(135deg,var(--background)_50%,transparent_50%),linear-gradient(225deg,var(--background)_50%,transparent_50%)] bg-[length:28px_28px]" />
        <div className="relative mx-auto grid w-full max-w-[92rem] items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          <div
            className="relative order-2 min-h-[24rem] lg:order-1 lg:col-span-5 lg:min-h-[35rem]"
            aria-hidden="true"
          />
          <div className="relative z-40 order-1 min-w-0 lg:order-2 lg:col-span-7 lg:justify-self-end">
            <p className="font-bold uppercase tracking-[0.18em] text-foreground">
              Năng lực phục vụ B2B
            </p>
            <h2 className="mt-5 max-w-4xl font-nav text-[clamp(3.8rem,6vw,6.6rem)] leading-[0.96] uppercase text-primary">
              Một ổ hay một nghìn ổ, đều làm cho chỉn chu
            </h2>
            <div className="mt-11 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {businessFeatures.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border-2 border-accent-foreground/20 bg-background/90 p-5 text-foreground shadow-[6px_6px_0_rgba(58,31,8,0.22)]"
                >
                  <Icon className="size-8 text-primary" strokeWidth={2.4} />
                  <h3 className="mt-5 font-nav text-2xl uppercase leading-[1.05]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="giao-hang"
        className="relative flex min-h-screen scroll-mt-20 items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,183,3,0.24),transparent_42%)]" />
        <div className="relative z-40 mx-auto max-w-4xl">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-2 font-bold text-secondary-foreground">
            <Truck className="size-5" />
            Sẵn sàng đi xa hơn
          </div>
          <h2 className="mt-8 font-nav text-[clamp(3.8rem,7vw,7rem)] leading-[0.94] uppercase text-primary">
            Từ lò bánh đến mọi điểm hẹn
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-lg leading-8 text-foreground/70">
            Giao trong ngày cho khu vực phù hợp, có giải pháp vận chuyển xa và
            cấp đông để hương vị Thảo Trang có thể đến nhiều nơi hơn.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-5">
            <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 font-bold">
              <CalendarCheck2 className="size-5 text-primary" />
              Mở cửa hằng ngày
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 font-bold">
              <Snowflake className="size-5 text-primary" />
              Giải pháp cấp đông
            </div>
          </div>
          <Link
            href="/van-chuyen"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-[6px_6px_0_var(--foreground)] transition-transform hover:-translate-y-1"
          >
            Xem giải pháp vận chuyển
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
