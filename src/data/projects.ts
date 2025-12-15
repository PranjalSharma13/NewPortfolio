import EulerityWebsite from "../assets/projects/Eulerity.png";
import DreamWay from "../assets/projects/DreamWay.png";
import PetGallery from "../assets/projects/petGallery.png";
import BadgeSystem from "../assets/projects/badgeSystem.png";
import RealEstate from  "../assets/projects/realEstate.png";
import Blume from  "../assets/projects/blume2.jpg";
import Skin from "../assets/projects/Skin.png";
import CarKart from "../assets/projects/CarKart.png";
import Portfolio from "../assets/projects/portfolio.png"
import type { TechId } from "./textIcons";

export type Project = {
  title: string;
  blurb: string;
  image: string;
  badges: TechId[];
  live?: string;
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Eulerity Website",
    blurb:
      "Developed Eulerity’s website with SEO-first considerations using Gatsby and Tailwind CSS.",
    image: EulerityWebsite,
    badges: ["gatsby", "tailwind", "gcp"],
    live: "https://eulerity.com/"
  },
  {
    title: "DreamWay WebSite",
    blurb:
      "Handled the website CMS using WordPress, Tailwind CSS, and PHP with a MySQL database.",
    image: DreamWay,
    badges: ["php", "wordpress", "tailwind", "mysql"],
    live: "https://dreamwaymedia.com/"
  },
  {
    title: "Pet Gallery Website",
    blurb:
      "Mini hackathon build: a React + TypeScript front end that GETs /pets via fetch and displays a responsive image gallery with titles, descriptions, and creation dates, plus interactive touches",
    image: PetGallery,
    badges: ["react", "typescript", "git"],
    repo:"https://github.com/PranjalSharma13/pet-gallery"
  },
  {
    title: "Badge System",
    blurb:
      "Built a Badge System app for MIU that streamlines attendance by replicating physical scanners, with role-based access control and OAuth secured sign-in—delivering fast, reliable tracking and strong data security",
    image: BadgeSystem,
    badges: ["java", "spring", "heroku","activeMq"],
    repo: "https://github.com/PranjalSharma13/Badge-System"
  },
  {
    title: "Real Estate Website",
    blurb:
      "Built a Real Estate app for exploring, buying, selling, and renting, featuring advanced search filters, interactive maps, and in-app valuation tools to help users price and discover properties fast",
    image: RealEstate,
    badges: ["java", "spring", "react","postgres","ngrok"],
    repo: "https://github.com/Sudean11/Moomin-RealStates"
  },
  {
    title: "Blume CarrierGo",
    blurb:
      "React Native supply-chain app delivering real-time tracking, proof-of-delivery (photo + signature), and Firebase push notifications for timely ops.",
    image: Blume,
    badges: ["firebase", "reactNative",],
    live:"https://play.google.com/store/apps/details?id=com.blumeglobal.carriergo.prod&hl=en_US"
  },
  {
    title: "Dr Dermo",
    blurb:
      "Built an Android Studio app for skin-disease detection using a CNN for the ML pipeline, XML for UI layouts letting users upload a lesion photo and get on-device predictions to support early triage.",
    image: Skin,
    badges: ["python", "xml",],
    repo:"https://github.com/PranjalSharma13/Dr-Dermo"
  },
  {
    title: "CarKart",
    blurb:
      "Built CarKart: Android + ML + AR app that classifies car images (Stanford Cars, 196 classes), renders life-size 3D previews, surfaces specs/videos, finds nearby showrooms/repair centers, manages service reminders, checks used-car availability/pricing, and connects users to dealers for end-to-end decision support.",
    image: CarKart,
    badges: ["python", "xml", "blender"],
    repo:"https://www.ijariit.com/manuscripts/v7i4/V7I4-1407.pdf"
  },
    {
    title: "Portfolio",
    blurb:
      "Built using React and modern JavaScript libraries, this site showcases my projects, professional experience, contact information, and provides access to my CV, all presented through a clean, responsive, and user-friendly interface.",
    image: Portfolio,
    badges: ["react", "typescript", "javascript"],
    repo:"https://github.com/PranjalSharma13/NewPortfolio"
  },

];
