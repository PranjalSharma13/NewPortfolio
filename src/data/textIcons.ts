// src/data/techIcons.ts
import ReactIcon from "../assets/icons/react.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import JavaScriptIcon from "../assets/icons/react.svg";
import GatsbyIcon from "../assets/icons/gatsby.svg";
import TailwindIcon from "../assets/icons/tailwind.svg"
import GCPIcon from "../assets/icons/gcp.svg"
import PHPIcon from "../assets/icons/php.svg"
import WordpressIcon from "../assets/icons/wordpress.svg"
import MySqlIcon from "../assets/icons/mysql.svg"
import GitIcon from "../assets/icons/git.svg"
import JavaIcon from "../assets/icons/java.svg"
import SpringIcon from "../assets/icons/spring.svg"
import HerkouIcon from "../assets/icons/heroku.svg"
import ActiveMQIcon from "../assets/icons/activemq.svg"
import PostgresIcon from "../assets/icons/postgres.svg"
import NgrokIcon from "../assets/icons/ngrok.svg"
import FirebaseIcon from "../assets/icons/firebase.png"
import BlenderIcon from "../assets/icons/blender.svg"
import PythonIcon from "../assets/icons/python.svg"
import XMLIcon from "../assets/icons/xml.svg"

export type TechId =
  | "react"
  | "typescript"
  | "javascript"
  | "git"
  | "github"
  | "spring"
  | "java"
  | "styled-components"
  | "gatsby"
  | "tailwind"
  | "gcp"
  | "php"
  | "wordpress"
  | "mysql"
  | "heroku"
  | "activeMq"
  | "postgres"
  | "ngrok"
  | "reactNative"
  | "firebase"
  | "python"
  |"xml"
  |"blender";

export const TECHS: Record<TechId, { label: string; icon: string }> = {
  react: { label: "React", icon: ReactIcon },
  typescript: { label: "TypeScript", icon: TypeScriptIcon },
  javascript: { label: "JavaScript", icon: JavaScriptIcon },
  git: { label: "Git", icon: GitIcon },
  github: { label: "GitHub", icon: JavaScriptIcon },
  spring: { label: "Spring Framework", icon: SpringIcon },
  java: { label: "Java", icon: JavaIcon },
  gatsby: { label: "Gatsby", icon: GatsbyIcon },
  tailwind: { label: "Tailwind", icon: TailwindIcon },
  gcp: { label: "GCP", icon: GCPIcon },
  "styled-components": { label: "styled-components", icon: JavaScriptIcon },
  php: { label: "PHP", icon: PHPIcon },
  wordpress: { label: "Wordpress", icon: WordpressIcon },
  mysql: { label: "MySql", icon: MySqlIcon },
  heroku: { label: "Heroku", icon: HerkouIcon },
  activeMq: { label: "ActiveMQ", icon: ActiveMQIcon },
  postgres: { label: "Postgres", icon: PostgresIcon },
  ngrok: { label: "Ngrok", icon: NgrokIcon },
  reactNative: { label: "React Native", icon: ReactIcon },
  firebase: { label: "Firebase", icon: FirebaseIcon },
  python: { label: "Python", icon: PythonIcon },
  xml: { label: "XML", icon: XMLIcon },
  blender: { label: "Blender", icon: BlenderIcon },
};
