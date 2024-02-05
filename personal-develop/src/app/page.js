"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import aboutUs from "../../public/aboutUs.png";
import archana from "../../public/archna.png";
import arrow from "../../public/arrow.svg";
import development from "../../public/development.png";
import discover from "../../public/discover.png";
import galleryImage1 from "../../public/gallery-Image-1.png";
import galleryImage2 from "../../public/gallery-Image-2.png";
import galleryImage3 from "../../public/gallery-Image-3.png";
import galleryImage4 from "../../public/gallery-Image-4.png";
import galleryImage5 from "../../public/gallery-Image-5.png";
import galleryImage6 from "../../public/gallery-Image-6.png";
import galleryImage7 from "../../public/gallery-Image-7.png";
import girish from "../../public/girish.png";
import kamble from "../../public/kamble.png";
import karthikeyan from "../../public/karthikeyan.png";
import mahalingam from "../../public/mahalingam.png";
import mail from "../../public/mail.svg";
import location from "../../public/map-pin.svg";
import map from "../../public/map.png";
import misra from "../../public/misra.png";
import prasad from "../../public/parasad.png";
import phone from "../../public/phone.svg";
import pumpHouse from "../../public/pumpHouse.png";
import scrollImage1 from "../../public/scroll-image-1.png";
import scrollImage2 from "../../public/scroll-image-2.png";
import scrollImage3 from "../../public/scroll-image-3.png";
import scrollImage4 from "../../public/scroll-image-4.png";
import scrollImage5 from "../../public/scroll-image-5.png";
import scrollImage6 from "../../public/scroll-image-6.png";
import scrollImage7 from "../../public/scroll-image-7.png";
import scrollImage8 from "../../public/scroll-image-8.png";
import sweageTreatment from "../../public/sweage-Treatment.png";
import waterTreatment from "../../public/water-treatment-Plant.png";
import logo from "./svg-img/logo.svg";

export default function Home() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  const toggleContent = (section) => {
    switch (section) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("scroll-smooth");

    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
      document.body.classList.remove("scroll-smooth");
    };
  }, []);
  return (
    <div className="scroll-smooth ">
      {/* <------------------------------------------------- NAVBAR SECTIONS------------------------------------------------> */}
      <div className="block md:hidden">
      <nav className="bg-white border-gray-200 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="h-8" alt="Logo" />
          </a>
          <button
            onClick={toggleNavbar}
            className="inline-flex  md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={` w-full transition-max-height duration-300 ease-out overflow-hidden ${
              isNavbarActive ? 'block' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="#aboutus" className="block py-2 px-3 font-[400] " aria-current="page">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-[400]">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 font-[400]">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#faq" className="block py-2 px-3 font-[400]">
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-[400]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="hidden md:block">
        <nav className="bg-white border-gray-200 sticky top-0 z-">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} className="h-[60px]" alt="Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open  main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <a
                    href="#aboutus"
                    className="block py-2 px-3 font-[400] "
                    aria-current="page"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 font-[400]">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 font-[400]">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="block py-2 px-3 font-[400]">
                    FAQ&apos;s
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 font-[400]">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      {/* <------------------------------------------------- HEADER SECTIONS------------------------------------------------> */}
      <section className="lg:w-[55%] md:w-[75%] w-[85%] mx-auto">
        <h1 className="font-[700] lg:text-[60px] text-[30px] text-center lg:pt-[42px] pt-[21px]">
          Building a Better Tirupur Through Infrastructure Development
        </h1>
        <div className="lg:w-[75%] md:w-[85%] w-[95%] mx-auto">
          <p className="lg:py-[24px] py-[12px] text-center font-[400] lg:text-[14px] text-[8px]">
            New Tirupur Area Development Corporation Limited (NTADCL) is
            dedicated to developing essential infrastrucutre for Tirupur,
            ensuring a better quality of life for its residents. with a focus on
            water supply, sewerage facilities, and low cost sanitation, NtaDCL
            is committed to creating a sustainable and thriving city.
          </p>
        </div>
      </section>
      {/* <------------------------------------------------- IMAGE SCROLL SECTIONS------------------------------------------------> */}
      <section className="lg:pt-[50px] pt-[25px] ">
        <div className="flex overflow-hidden space-x-14">
          <div className="flex space-x-14 animate-loop-scroll">
            <Image
              loading="lazy"
              src={scrollImage1}
              className="max-w-none  "
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={scrollImage2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={scrollImage3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={scrollImage4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={scrollImage5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={scrollImage6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={scrollImage7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={scrollImage8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
          <div
            className="flex space-x-14 animate-loop-scroll"
            aria-hidden="true"
          >
            <Image
              loading="lazy"
              src={scrollImage1}
              className="max-w-none"
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={scrollImage2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={scrollImage3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={scrollImage4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={scrollImage5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={scrollImage6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={scrollImage7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={scrollImage8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
        </div>
        <div className="flex overflow-hidden space-x-14 pt-[25px]">
          <div className="flex space-x-14 animate-reverse-loop-scroll">
            <Image
              loading="lazy"
              src={scrollImage1}
              className="max-w-none"
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={scrollImage2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={scrollImage3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={scrollImage4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={scrollImage5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={scrollImage6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={scrollImage7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={scrollImage8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
          <div
            className="flex space-x-14 animate-reverse-loop-scroll"
            aria-hidden="true"
          >
            <Image
              loading="lazy"
              src={scrollImage1}
              className="max-w-none"
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={scrollImage2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={scrollImage3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={scrollImage4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={scrollImage5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={scrollImage6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={scrollImage7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={scrollImage8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
        </div>
      </section>
      <div className="lg:px-[100px] px-[30px]">
        {/* <------------------------------------------------- WATER TREATMENT-PLANT SECTIONS------------------------------------------------> */}
        <section className="lg:flex lg:justify-between lg:pt-[150px] pt-[70px] items-center ">
          <div className="lg:w-[40%]  ">
            <p className="font-[400] text-[15px] text-[#000000]">
              Infrastructure
            </p>
            <p className="lg:text-[32px] text-[16px] font-semibold pt-1">
              Water Treatment Plant – Lamella Clarifier
            </p>
            <p className="lg:pt-[37px] pt-[17px] text-[#000000] font-[400] py-1">
              The Water Treatment plant consists of Flash mixers, clarifiers,
              Dual media filters, back wash recirculation system and systems for
              adding various chemicals for water treatment with the sludge
              removal system. The process operations are executed by a local PLC
              and operator interface is provided for data acquisition and
              control of the various field Instruments.
            </p>
          </div>
          <div>
            <Image src={waterTreatment} alt="img"/>
          </div>
        </section>
        {/* <------------------------------------------------- GALLERY SECTIONS------------------------------------------------> */}
        <section className="lg:pt-[120px] pt-[60px] ">
          <p className="text-center lg:text-[32px] text-[17px] font-semibold">
            Gallery
          </p>
          <p className="text-center font-[400] lg:text-[15px] text-[12px] text-[#000000]">
            New Tirupur Area Development Corporation Limited
          </p>
          <div className="flex md:justify-between justify-around md:w-[80%] lg:w-[85%]  mx-auto lg:pt-[45px] pt-[22px]">
            <div>
              <Image
                src={galleryImage1}
                className="py-2 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] md:h-[180px] lg:h-[220px] h-[100px] w-[100px]"
                alt="img-1"
              />
              <Image
                src={galleryImage2}
                className="py-0 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] w-[100px] md:h-[180px] lg:h-[220px] h-[90px]"
                alt="img-2"
              />
            </div>
            <div>
              <Image
                src={galleryImage3}
                className="py-2 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] w-[100px] md:h-[180px] lg:h-[220px] h-[100px]"
                alt="img-3"
              />
              <Image
                src={galleryImage4}
                className="pb-2 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] w-[100px] md:h-[180px]  lg:h-[220px] h-[95px]"
                alt="img-4"
              />
              <Image
                src={galleryImage5}
                className="py-0 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] w-[100px] md:h-[220px]  lg:h-[220px] h-[95px]"
                alt="img-5"
              />
            </div>
            <div>
              <Image
                src={galleryImage6}
                className="py-2 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] w-[100px] md:h-[180px] lg:h-[220px] h-[100px]"
                alt="img-6"
              />
              <Image
                src={galleryImage7}
                className="py-0 md:w-[200px] lg:w-[250px] xl:w-[335px] 2xl:w-[390px] sm:w-[180px] sm:h-[135px] w-[100px] md:h-[180px] lg:h-[220px] h-[90px]"
                alt="img-7"
              />
            </div>
          </div>
        </section>
        {/* <------------------------------------------------- SWEAGE TREATMENT SECTIONS------------------------------------------------> */}
        <section className="lg:flex lg:justify-between lg:pt-[150px] pt-[70px] items-center ">
          <div className="lg:w-[40%] ">
            <p className="font-[400] lg:text-[15px] text-[12px] text-[#000000] ">
              Infrastructure
            </p>
            <p className="lg:text-[32px] text-[16px] font-semibold pt-1">
              15MLD Sewage treatment plant-Aeration Tank
            </p>
            <p className="lg:pt-[37px] pt-[16px] text-[12px] lg:text-[16px] text-[#000000] font-[400]">
              Our Sewage Treatment Plant (STP) is designed on extended Aeration
              with activated sludge process - ASP. Aeration is the heart of
              sewage treatment process; Aeration process supplies sufficient
              oxygen and is injected into water through partially submerged
              aerator.
            </p>
            <p className="pt-[17px] text-[12px] lg:text-[16px] text-[#000000] font-[400]">
              ASP concept provides low cost, less odour and nuisance-free STP
              that produces a high degree of treatment. Our extended aeration
              treatment plant is easy to operate and maintain. The amount of
              oxygen that the water can hold is dependent on the temperature of
              the water. The colder the water, more the oxygen transfer
              efficiency.
            </p>
          </div>
          <div className="flex lg:items-center justify-center">
            <Image src={sweageTreatment} alt="img"/>
          </div>
        </section>
        {/* <-------------------------------------------------DEVELOPMENT SECTIONS------------------------------------------------> */}
        <section className="lg:pt-[150px] pt-[70px]">
          <div className="lg:w-[40%] mx-auto ">
            <p className="text-center lg:text-[32px] text-[17px] font-semibold">
              Transforming Tirupur through development
            </p>
          </div>
          <div className="flex justify-center lg:pt-[40px] pt-[20px]">
            <Image src={development} alt="dev-img-1" />
          </div>
          <div className="flex justify-between pt-[20px] lg:w-[66%] mx-auto">
            <p className="font-[600px] lg:text-[18px] text-[12px] text-[#004693] w-[45%]">
              Raw Water Pump House – Converter Transformer
            </p>
            <p className="font-[400] text-[#000000] lg:text-[14px] text-[11px] w-[48%]">
              Converter transformer is a specially designed step-down
              transformer which step downs 11 KV to 415 V with additional
              outputs of Star and Delta for twelve pulse VFD input supply. The
              harmonics reduction takes place due to this phase angle
              displacement of Star & delta connection.
            </p>
          </div>
          <div className="flex justify-center lg:pt-[40px] pt-[20px]">
            <Image src={pumpHouse} alt="dev-img-1" />
          </div>
          <div className="flex justify-between lg:pt-[20px] pt-[12px] lg:w-[66%] mx-auto">
            <p className="font-[600px] lg:text-[18px] text-[12px] text-[#004693] w-[45%]">
              Master Balancing Reservoir – Pump house
            </p>
            <p className="font-[400] text-[#000000] lg:text-[14px] text-[11px] w-[48%]">
              Master Balancing Reservoir (MBR) is the main reservoir located in
              Tirupur. Storage capacity of 23ML and segregated as 2-cells for
              periodical maintenance and cleaning/disinfection purpose. Water
              from the reservoir is pumped to 36Nos of Water Distribution
              Stations (WDS) through three of feeder mains.
            </p>
          </div>
        </section>
        {/* <-------------------------------------------------ABOUT US SECTIONS------------------------------------------------> */}
        <section
          className="lg:flex  lg:justify-between lg:pt-[150px] pt-[70px] items-center lg:w-[85%] mx-auto"
          id="aboutus"
        >
          <div className="lg:w-[37%] ">
            <p className="font-[600] lg:text-[30px] text-[17px]">ABOUT US</p>

            <p className="pt-[17px] text-[#000000] font-[400] lg:text-[15px] text-[12px]">
              New Tirupur Area Development Corporation Limited (NTADCL) was
              incorporated in 1995. It was promoted by Tamilnadu Water
              Investment Company Limited (TWIC), Infrastructure Leasing and
              Financial Services Limited (IL&FS) and Tirupur Exporters
              Association as a Special Purpose Vehicle (SPV) to implement the
              Tirupur Area Development Programme (TADP)
            </p>
            <p className="pt-[17px] text-[#000000] font-[400] lg:text-[15px] text-[12px]">
              As part of the TADP, NTADCL has been mandated, through a
              concession by Government of Tamilnadu (GoTN), to develop,
              construct, operate and maintain a 185 million litre per day
              capacity water supply project and sewerage facility for about 60%
              population in Tirupur Municipality at a total cost of about 1023
              crores. The project also involves providing low cost sanitation
              facilities for slum areas in Tirupur
            </p>
            <p className="pt-[17px] text-[#000000] font-[400] lg:text-[15px] text-[12px]">
              The project of NTADCL is the first private water supply and
              sanitation project in the country and one of the largest private
              investments in urban infrastructure in the country. Moreover, this
              is the first water supply project to be financed commercially on a
              limited recourse basis.
            </p>
          </div>
          <div className="flex lg:items-center justify-center  pt-2">
            <Image src={aboutUs} alt="img"/>
          </div>
        </section>
        {/* <-------------------------------------------------BOARD OF DIRECTORS SECTIONS------------------------------------------------> */}
        <section className="lg:pt-[150px] pt-[70px] ">
          <div>
            <p className="text-center font-semibold lg:text-[30px] text-[17px]">
              Board Of Directors
            </p>
          </div>
          <div className="flex justify-between lg:pt-[50px] pt-[20px] lg:px-[100px]">
            <div className="w-[28%] ">
              <Image src={karthikeyan} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Dr. D. Karthikeyan, I.A.S.,
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] lg:w-[60%]">
                Chairman / Principal Secretary, Municipal Administration and
                Water Supply Departmnet, GoTN
              </p>
            </div>
            <div className="w-[28%] ">
              <Image src={kamble} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Dr. Chandrakant B Kamble, I.A.S.,
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] lg:w-[60%]">
                Additional Chief Secretary GoTN/ Managing Director
              </p>
            </div>
            <div className="w-[28%] ">
              <Image src={prasad} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Mr. Prashant M Wadnere, I.A.S.
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] lg:w-[60%]">
                Additional Secretary to Government , Finance Department, GoTN
              </p>
            </div>
          </div>
          <div className="flex justify-around pt-[35px] w-[65%]">
            <div className="w-[33%] ">
              <Image src={archana} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Mrs. Archana Patnaik, I.A.S.
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] ">
                Secretary to Government, Micro, Small and Medium Enterprises
                Department, GoTN
              </p>
            </div>
            <div className="w-[33%] ml-[45px]">
              <Image src={mahalingam} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Mr. G. Mahalingam
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] ">
                Nominee Director of IL & FS
              </p>
            </div>
          </div>
        </section>
        {/* <-------------------------------------------------SENIOR MANAGEMENT SECTIONS------------------------------------------------> */}
        <section className="pt-[50px] ">
          <div>
            <p className="text-center font-semibold text-[30px]">
              Senior Management
            </p>
          </div>

          <div className="flex justify-around pt-[55px] w-[65%]">
            <div className="w-[33%] ">
              <Image src={girish} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                CMA Girish Kumar N J R V
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] ">
                Mcom, FCMA, ACMA(UK),CGMA, FIII
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] ">
                CFO, NTADCL
              </p>
            </div>
            <div className="w-[33%] ml-[45px]">
              <Image src={misra} alt="img-1" />
              <p className="font-[500] text-[#004693] py-3 text-[10px] md:text-[16px]">
                Mr. Saurabh Misra
              </p>
              <p className="font-[400] lg:text-[15px] text-[8px] ">
                Company Secretary, NTADCL
              </p>
            </div>
          </div>
        </section>
        {/* <-------------------------------------------------FAQ'S SECTIONS------------------------------------------------> */}
        <section className="lg:pt-[100px] pt-[70px]" id="faq">
          <div className="lg:w-[48%]  mx-auto">
            <p className="font-[500] lg:text-[30px] text-center">
              Frequently Asked Question
            </p>
            <p className="font-[400] lg:text-[15px] text-[11px] text-center py-2">
              New Tirupur Area Development Corporation Limited (NTADCL) is
              dedicated to developing essential infrastrucutre for Tirupur,
              ensuring a better quality of life for its residents.
            </p>
          </div>

          <p className="h-[1px] bg-[#004693] w-full mt-[60px]"></p>
          {/* Section 1 */}
          <div>
            <div
              className="flex justify-between"
              onClick={() => toggleContent(1)}
              style={{ cursor: "pointer" }}
            >
              <p className="lg:text-[18px] text-[13px] font-[500] py-[35px]">
                What is TADP?
              </p>
              <Image
                src={arrow}
                alt="arrow-img"
                style={{
                  transition: "transform 0.5s ease",
                  transform: isOpen1 ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              />
            </div>
            <p
              className={`lg:w-[60%] text-[12px] lg:text-[16px] overflow-hidden transition-max-height ease-in-out duration-500 ${
                isOpen1 ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              New Tirupur Area Development Corporation Limited (NTADCL) is
              dedicated to developing essential infrastructure for Tirupur,
              ensuring a better quality of life for its residents. with a focus
              on water supply, sewerage facilities, and low-cost sanitation,
              NtaDCL is committed to creating a sustainable and thriving city.
            </p>
          </div>
          <p
            className={`h-[1px] bg-[#004693] w-full ${
              isOpen1 ? "mt-[30px]" : "mt-[0px]"
            }`}
          ></p>

          {/* Section 2 */}
          <div>
            <div
              className="flex justify-between"
              onClick={() => toggleContent(2)}
              style={{ cursor: "pointer" }}
            >
              <p className="lg:text-[18px] text-[13px] font-[500] py-[35px]">
                What is TADP?
              </p>
              <Image
                src={arrow}
                alt="arrow-img"
                style={{
                  transition: "transform 0.5s ease",
                  transform: isOpen2 ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              />
            </div>
            <p
              className={`lg:w-[60%] text-[12px] lg:text-[16px] overflow-hidden transition-max-height ease-in-out duration-500 ${
                isOpen2 ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              New Tirupur Area Development Corporation Limited (NTADCL) is
              dedicated to developing essential infrastructure for Tirupur,
              ensuring a better quality of life for its residents. with a focus
              on water supply, sewerage facilities, and low-cost sanitation,
              NtaDCL is committed to creating a sustainable and thriving city.
            </p>
          </div>
          <p
            className={`h-[1px] bg-[#004693] w-full ${
              isOpen2 ? "mt-[30px]" : "mt-[0px]"
            }`}
          ></p>

          {/* Section 3 */}
          <div>
            <div
              className="flex justify-between"
              onClick={() => toggleContent(3)}
              style={{ cursor: "pointer" }}
            >
              <p className="lg:text-[18px] text-[13px] font-[500] py-[35px]">
                What is TADP?
              </p>
              <Image
                src={arrow}
                alt="arrow-img"
                style={{
                  transition: "transform 0.5s ease",
                  transform: isOpen3 ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              />
            </div>
            <p
              className={`lg:w-[60%] text-[12px] lg:text-[16px] overflow-hidden transition-max-height ease-in-out duration-500 ${
                isOpen3 ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              New Tirupur Area Development Corporation Limited (NTADCL) is
              dedicated to developing essential infrastructure for Tirupur,
              ensuring a better quality of life for its residents. with a focus
              on water supply, sewerage facilities, and low-cost sanitation,
              NtaDCL is committed to creating a sustainable and thriving city.
            </p>
          </div>
          <p
            className={`h-[1px] bg-[#004693] w-full ${
              isOpen3 ? "mt-[30px]" : "mt-[0px]"
            }`}
          ></p>
        </section>
        {/* <-------------------------------------------------DISCOVER'S SECTIONS------------------------------------------------> */}
        <section className="flex justify-between lg:pt-[150px] pt-[70px] items-center">
          <div className="w-[40%]">
            <p className="lg:text-[32px] font-semibold w-[70%]">
              Discover Opportunities with NTADCL
            </p>
            <p className="lg:pt-[37px] pt-[16px] text-[#000000] text-[15px] font-[400]">
              New Tirupur Area Development Corporation Limited (NTADCL)
            </p>
            <div className="flex pb-2 lg:pb-[0px]">
              <div className="pt-[20px]">
                <button className="bg-[#004693]  w-[80px] p-[8px] text-white ">
                  Contact
                </button>
              </div>
              <div className="pt-[20px]">
                <button className="border-[#004693] border-[1px]  w-[80px] p-[7px] text-[#004693] mx-4">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image src={discover} alt="img"/>
          </div>
        </section>
        {/* <-------------------------------------------------CONTACT SECTIONS------------------------------------------------> */}
        <section
          className="flex justify-between lg:pt-[150px] pt-[70px] "
          id="contact"
        >
          <div className="lg:w-[40%] ">
            <p className="lg:text-[32px] text-[18px] font-semibold lg:w-[70%]">
              Contact NTADCL
            </p>

            <div className="flex items-center lg:pt-12 pt-3">
              <Image src={mail} alt="img" />
              <p className="font-[500] lg:text-[18px] text-[15px] px-2">
                newtirupur@gmail.com
              </p>
            </div>
            <div className="flex items-center lg:pt-12 pt-3">
              <Image src={phone} alt="img" />
              <p className="font-[500] lg:text-[18px] text-[15px] px-2">
                1234-456789
              </p>
            </div>
            <div className="flex items-center lg:pt-12 pt-3">
              <Image src={location} alt="img" />
              <p className="font-[500] lg:text-[18px] text-[15px] pb-4 lg:pb-[0px] px-2">
                123, Tirupur, Tamil Nadu, 640098
              </p>
            </div>
          </div>
          <div className="flex items-center ">
            <Image src={map}  className="w-[400px] lg:w-[586px]" alt="img"/>
          </div>
        </section>
        {/* <-------------------------------------------------ADDRESS SECTIONS------------------------------------------------> */}

        <section className="lg:flex lg:justify-between lg:pt-[150px] pt-[70px] ">
          <div className="lg:w-1/4">
            <p className="font-bold text-xl"> Corporate Office Address:</p>
            <p className="font-normal text-base pt-4">
            &quot;Polyhose Towers&quot;,<br></br> First Floor,No.86,Mount Road,<br></br> Guindy, Chennai
              600 032.<br></br> Phone: +91 44 2235 1890 / 91<br></br> Fax: +91 44 2235 1894 <br></br> Email:
              contactus@ntadcl.com <br></br> CIN: U91990TZ1995PLC005869.
            </p>
          </div>
          <div className="lg:w-1/4 pt-4 lg:pt-[0px]">
            <p className="font-bold text-xl"> Registered Office Address:</p>
            <p className="font-normal text-base pt-4">
              No.66, Appachi Nagar,<br></br> Main Road Kongu Nagar,<br></br>Tirupur 641 607. <br></br>Phone:
              + 91 421 2486864 / 2481165<br></br> Fax: +91 421 2486874
            </p>
          </div>
          <div className="lg:w-1/4 pt-4 lg:pt-[0px]">
            <p className="font-bold text-xl"> Tirupur Office Address:</p>
            <p className="font-normal text-base pt-4">
              Kumaran Commercial Complex,<br></br>First Floor, Kumaran Road,<br></br> Tirupur 641
              601 <br></br>Phone: + 91 421 2486864 / 2481165<br></br> Fax: +91 421 2486874<br></br> Email:
              tirupur@ntadcl.com
            </p>
          </div>
        </section>
        <section className="lg:pt-[150px] pt-[70px]">
          <div className="flex justify-center ">
            <Image src={logo} alt="img" className="h-[100px] w-[85px]" />
          </div>
        </section>
        <section className="flex justify-center lg:pt-[45px] pt-[23px]">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#aboutus"
                  className="block py-2 px-3 font-[400] "
                  aria-current="page"
                >
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-[400]">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 font-[400]">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#faq" className="block py-2 px-3 font-[400]">
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-[400]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p className="h-[1px] bg-[#004693] w-full mt-[40px]"></p>
        <p className="font-[400] lg:text-[14px] text-[11px] text-[#004693] pt-1 pb-[50px]">
          2023 New Tirupur Area Development Corporation Limited. All rights
          reserved.
        </p>
      </div>
    </div>
);
}
