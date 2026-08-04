import React from 'react'
import { PROJECT_BOULE_PATH, PROJECT_SOUL_PATH, PROJECT_STRIDE_PATH, SOCIAL_FACEBOOK_PATH, SOCIAL_GITHUB_PATH, SOCIAL_LINKEDIN_PATH } from '../../config/path'
import ImageBanner from '../sections/ImageBanner'

export default function Home() {
  return (
    <main id="main">
      <ImageBanner
        logoPNG="../public/img/logo.png"
        logoPNG="../public/img/logo.png"
        logoPNGTablet="../public/img/logo-tablet.png"
        avatar="../public/img/avatar-blur.png"
        avatarTablet="../public/img/avatar-blur-tablet.png"
        heading="Le gia huy"
        subheading="Front-end developer"
        description="Front-End Developer with 4 years of experience building and optimizing
          Shopify themes. Experienced in leading projects and managing small teams,
          with strong expertise in Shopify Liquid, HTML/HTML5,
          Javascript/TypeScript, CSS/SCSS and UX optimization. Focused on delivering
          scalable, high-performance and user-centric solutions."
      />

      <section className="main container-custom pt-[50px] pb-[50px]">
        <div className="detail-information border border-(--color-border)">
          {/* Selected projects */}
          <div className="selected-projects">
            <div className="section-header flex flex-col lg:flex-row lg:items-center lg:justify-between p-6">
              <h2 className="text-2xl heading uppercase inline-flex items-center">
                Selected projects whale
              </h2>
              <a
                href="/"
                className="button uppercase inline-flex items-center hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-lg lg:px-4 py-2.5 focus:outline-none"
              >
                View all projects
                <svg
                  className="w-6 h-6 ms-3 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.9168 12.8517H2.70834C2.45967 12.8517 2.25459 12.7709 2.09309 12.6092C1.93142 12.4476 1.85059 12.2445 1.85059 12C1.85059 11.7555 1.93142 11.5524 2.09309 11.3907C2.25459 11.2291 2.45967 11.1482 2.70834 11.1482H18.9108L14.3973 6.64074C14.2275 6.47074 14.1426 6.27082 14.1426 6.04099C14.1426 5.81115 14.2275 5.61124 14.3973 5.44124C14.5673 5.2714 14.7673 5.18749 14.9971 5.18949C15.2269 5.19149 15.4268 5.2774 15.5968 5.44724L21.5528 11.4032C21.6442 11.4946 21.7095 11.5889 21.7488 11.6862C21.788 11.7834 21.8076 11.89 21.8076 12.006C21.8076 12.118 21.788 12.2226 21.7488 12.3197C21.7095 12.4171 21.6442 12.5114 21.5528 12.6027L15.5968 18.5587C15.4268 18.7286 15.2269 18.8145 14.9971 18.8165C14.7673 18.8185 14.5673 18.7326 14.3973 18.5587C14.2275 18.3887 14.1426 18.1898 14.1426 17.962C14.1426 17.734 14.2275 17.5351 14.3973 17.3652L18.9168 12.8517Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div className="content-wrapper grid lg:grid-cols-2 xl:grid-cols-3">
              <div className="w-full min-w-sm p-6 border border-(--color-border)">
                <div className="flex items-center items-start space-x-3 mb-6">
                  <div className="number text-2xl md:text-5xl">01</div>
                  <a href={PROJECT_BOULE_PATH} target="_blank">
                    <h5 className="text-3xl font-semibold tracking-tight uppercase">
                      Boule Foods
                    </h5>
                    <p className="subheading text-xl">E-Commerce Website Design</p>
                  </a>
                </div>
                <div className="relative overflow-hidden">
                  <a
                    href={PROJECT_BOULE_PATH}
                    className="image-zoom-in"
                    target="_blank"
                  >
                    <img
                      className="rounded-base"
                      src="../public/img/project/project_4.webp"
                      srcSet="
                    ../public/img/project/project_tablet_4.jpg 768w,
                    ../public/img/project/project_4.webp 1200w
                  "
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      alt="product image"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center mt-[15px] gap-2">
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    UI/UX
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    E-Commerce
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    Web design
                  </span>
                </div>
              </div>
              <div className="w-full min-w-sm p-6 border border-(--color-border)">
                <div className="flex items-center items-start space-x-3 mb-6">
                  <div className="number text-2xl md:text-5xl">02</div>
                  <a href={PROJECT_STRIDE_PATH} target="_blank">
                    <h5 className="text-3xl font-semibold tracking-tight uppercase">
                      Stride Fashion
                    </h5>
                    <p className="subheading text-xl">E-Commerce Website Design</p>
                  </a>
                </div>
                <div className="relative overflow-hidden">
                  <a
                    href={PROJECT_STRIDE_PATH}
                    className="image-zoom-in"
                    target="_blank"
                  >
                    <img
                      className="rounded-base"
                      src="../public/img/project/project_3.webp"
                      srcSet="
                    ../public/img/project/project_tablet_3.jpg 768w,
                    ../public/img/project/project_3.webp 1200w
                  "
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      alt="product image"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center mt-[15px] gap-2">
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    UI/UX
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    E-Commerce
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    Web design
                  </span>
                </div>
              </div>
              <div className="w-full min-w-sm p-6 border border-(--color-border)">
                <div className="flex items-center items-start space-x-3 mb-6">
                  <div className="number text-2xl md:text-5xl">03</div>
                  <a href={PROJECT_SOUL_PATH} target="_blank">
                    <h5 className="text-3xl font-semibold tracking-tight uppercase">
                      Soul Elegant
                    </h5>
                    <p className="subheading text-xl">E-Commerce Website Design</p>
                  </a>
                </div>
                <div className="relative overflow-hidden">
                  <a
                    href={PROJECT_SOUL_PATH}
                    className="image-zoom-in"
                    target="_blank"
                  >
                    <img
                      className="rounded-base"
                      src="../public/img/project/project_1.webp"
                      srcSet="
                    ../public/img/project/project_tablet_1.jpg 768w,
                    ../public/img/project/project_1.webp 1200w
                  "
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      alt="product image"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center mt-[15px] gap-2">
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    UI/UX
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    E-Commerce
                  </span>
                  <span className="border text-base font-medium leading-none uppercase px-3.5 py-1.5 rounded">
                    Web design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 border-b border-(--color-border)">
            <div className="process w-full relative overflow-hidden col-span-2">
              <div className="section-header flex items-center justify-between p-6">
                <h2 className="text-2xl heading uppercase inline-flex items-center">
                  Work experiences whale
                </h2>
              </div>
              <div className="content-wrapper px-6 pt-1.5 pb-6">
                <div className="company-item flex flex-col md:flex-row items-center items-start mb-8 gap-[10px] md:gap-[30px]">
                  <div className="company-header uppercase flex px-[15px] py-[10px] text-center border rounded-2xl w-min min-w-[200px]">
                    <h2 className="text-2xl font-semibold">Halo Ecommerce</h2>
                  </div>
                  <div className="exp-info w-full">
                    <h5 className="text-2xl font-semibold tracking-tight uppercase mb-2 font-medium flex flex-col md:flex-row md:items-center md:justify-between">
                      Shopify Theme Developer / Project Leader
                      <span className="text-xl font-normal italic">
                        Jun 2021 - Present
                      </span>
                    </h5>
                    <ul className="list-disc list-inside text-xl">
                      <li>
                        Developed and optimized Shopify themes with a strong focus on
                        performance and UX.
                      </li>
                      <li>
                        Led and managed a small team of 4-5 developers, overseeing
                        task allocation, code quality and delivery timelines.
                      </li>
                      <li>
                        Managed end-to-end project execution, ensuring on-time
                        delivery and alignment with client requirements.
                      </li>
                      <li>
                        Customized and enhanced theme layouts based on client needs,
                        improving usability and conversion experience.
                      </li>
                      <li>
                        Implemented additional features and functionalities to extend
                        theme capabilities.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-item flex flex-col md:flex-row items-center items-start mb-8 gap-[10px] md:gap-[30px]">
                  <div className="company-header uppercase flex px-[15px] py-[10px] text-center border rounded-2xl w-min min-w-[200px]">
                    <h2 className="text-2xl font-semibold">Idgoden Technology</h2>
                  </div>
                  <div className="exp-info w-full">
                    <h5 className="text-2xl font-semibold tracking-tight uppercase mb-2 font-medium flex flex-col md:flex-row md:items-center md:justify-between">
                      Developer
                      <span className="text-xl font-normal italic">
                        Jun 2020 - Apr 2021
                      </span>
                    </h5>
                    <ul className="list-disc list-inside text-xl">
                      <li>
                        Developed responsive websites using HTML/HTML5,
                        JavaScript/TypeScript, and CSS3/SCSS.
                      </li>
                      <li>
                        Delivered projects on time while maintaining code quality and
                        consistency.
                      </li>
                      <li>
                        Translated design requirements into functional, user-friendly
                        interfaces.
                      </li>
                      <li>
                        Optimized mobile responsiveness to ensure a seamless UI/UX
                        across devices.
                      </li>
                      <li>
                        Debugged and tested features to improve performance and user
                        interaction.
                      </li>
                      <li>
                        Prepared clear and structured documentation for client
                        handover.
                      </li>
                      <li>
                        Contributed to multiple UI projects, including: Kundol, Revo
                        Coffee, Go.arch, Mono Bogo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tools w-full border-l border-(--color-border)">
              <div className="section-header flex items-center justify-between p-6">
                <h2 className="text-2xl font-medium heading uppercase inline-flex items-center">
                  Tools I use whale
                </h2>
              </div>
              <div className="content-wrapper grid grid-cols-2 px-6 pt-1.5 pb-6 gap-[10px] md:gap-[20px]">
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-figma.png"
                    loading="lazy"
                    decoding="async"
                    alt="Figma"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Figma</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-pts.png"
                    loading="lazy"
                    decoding="async"
                    alt="Photoshop"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Photoshop</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-claude.png"
                    loading="lazy"
                    decoding="async"
                    alt="Claude AI"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Claude AI</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-cursor.png"
                    loading="lazy"
                    decoding="async"
                    alt="Cursor AI"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Cursor AI</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-openai.png"
                    loading="lazy"
                    decoding="async"
                    alt="OpenAI GPT-5.5"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">OpenAI GPT-5.5</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-gemini.png"
                    loading="lazy"
                    decoding="async"
                    alt="Google Gemini"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Google Gemini</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-antigravity.png"
                    loading="lazy"
                    decoding="async"
                    alt="Antigravity"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Antigravity</h5>
                  </div>
                </div>
                <div className="tool-item flex items-center py-2.5 px-5 border rounded shadow-xs flex-row max-w-xl gap-[10px] md:gap-[15px]">
                  <img
                    className="object-cover rounded-base h-auto w-8 h-8"
                    src="../public/img/tools/logo-shopify.png"
                    loading="lazy"
                    decoding="async"
                    alt="Shopify"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-xl tracking-tight">Shopify</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-(--color-border)">
            <div className="skill-language">
              <div className="section-header flex items-center justify-between p-6">
                <h2 className="text-2xl heading uppercase inline-flex items-center">
                  Skill &amp; Languages whale
                </h2>
              </div>
              <div className="content-wrapper px-6 pt-1.5 pb-6">
                <p className="skill pb-2.5 text-xl">
                  <strong>Skills:</strong> ReactJS, Shopify, Liquid, HTML/HTML5,
                  JavaScript/TypeScript, CSS/SCSS, Tailwind, Git/Github, Responsive
                  Design.
                </p>
                <p className="languages text-xl">
                  <strong>Languages:</strong> Vietnamese, English.
                </p>
              </div>
            </div>
            <div className="education-level border-l border-(--color-border)">
              <div className="section-header flex items-center justify-between p-6">
                <h2 className="text-2xl heading uppercase inline-flex items-center">
                  Education level whale
                </h2>
              </div>
              <div className="content-wrapper px-6 pt-1.5 pb-6">
                <div className="course-item mb-4">
                  <h5 className="text-xl font-semibold tracking-tight uppercase mb-1 font-medium">
                    CFD Circle
                  </h5>
                  <div className="content-wrapper text-lg">
                    <p>ReactJS</p>
                    <span>2022 - 2023</span>
                  </div>
                </div>
                <div className="course-item">
                  <h5 className="text-xl font-semibold tracking-tight uppercase mb-1 font-medium">
                    Information Technology College
                  </h5>
                  <div className="content-wrapper text-lg">
                    <p>Web Design</p>
                    <span>2019 - 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="content-item max-lg:col-span-2 p-6">
              <h2 className="text-2xl md:text-4xl uppercase mb-4">
                Let's work together
              </h2>
              <p className="desc text-xl">
                Have a project in mind? I'd love to help bring your vision to life.
              </p>
            </div>
            <div className="social-item max-lg:col-span-2 border-l border-(--color-border) p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <svg
                  className="mail-icon w-8 h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 5.918a2 2 0 0 1-2.429 0L2.904 6.26l-.866-.65Z" />
                  <path d="M20.677 4.117A1.994 1.994 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.57L12 11.383 19.919 4.687l.758-.57Z" />
                </svg>
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span className="text-lg font-medium">hyunlee.gia@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <svg
                  className="phone-icon w-8 h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span className="text-lg font-medium">+84 765 350 611</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  className="location-icon w-8 h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.89 7.89 0 0 1-1.312 3.884.605.605 0 0 1-.059.086l-5.998 8.598a.75.75 0 0 1-1.254 0l-5.998-8.598a.605.605 0 0 1-.059-.086A7.89 7.89 0 0 1 3.904 10.415a8.002 8.002 0 0 1 8.002-8.421Zm.009 6.006a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span className="text-lg font-medium">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>
            </div>
            <div className="social-item max-lg:col-span-2 max-lg:border-t lg:border-l border-(--color-border) max-lg:flex  max-lg:items-center max-lg:justify-between max-md:flex-col max-md:items-start">
              <div className="section-header flex items-center justify-between p-6">
                <h2 className="text-2xl heading uppercase inline-flex items-center">
                  Education level whale
                </h2>
              </div>
              <div className="flex sm:justify-start rtl:space-x-reverse px-6 max-md:pb-6">
                <a
                  href={SOCIAL_FACEBOOK_PATH}
                  className="social-icon icon-facebook text-body hover:text-heading"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href={SOCIAL_LINKEDIN_PATH}
                  className="social-icon icon-linkedin text-body hover:text-heading ms-5"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="sr-only">Linkedin account</span>
                </a>
                <a
                  href={SOCIAL_GITHUB_PATH}
                  className="social-icon icon-github text-body hover:text-heading ms-5"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.793.576C20.566 21.797 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
