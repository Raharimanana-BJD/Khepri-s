"use client"

import {sendEmail} from "@/actions/sendEmail"
import Image from "next/image";
import { home_1, home_2, home_3 } from "../asset";
import { CTA, CardBlog, CardService, Typography } from "../components";
import { Check, Phone, AppWindowMacIcon, SendIcon } from "lucide-react";
import { stylesIcon } from "../lib/utils";
import { CardBlogs, CardServices } from "../lib/constant";
import Link from "next/link";
import { useFormStatus } from "react-dom";

const iconMap={
  AppWindowMacIcon
}

export default function Home() {
  return (
    <main>
      <Heros/>
      <Service/>
      <Produit/>
      <Apropos/>
      <Blog/>
      <Contact/>
    </main>
  );
}

function Heros(){
  return(
    <section className="container">
      <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6 md:py-8 pt-[20vh] md:h-[100vh] h-[90vh] flex flex-col justify-center items-center md:items-start">
        <Typography variant="small" className="text-grey-500 uppercase mb-2">Acceille</Typography>
        <Typography variant="h1" className="text-secondary-500 md:text-start text-center">
          Nous somme la pour <br/> concretiser votre projet de <br/> reve.
        </Typography>
        <Typography variant="p" className="text-secondary-100 md:text-start text-center">
          L&apos;agence propose une gamme complete de services <br/> comprenant des 
          competences techniques du design et <br/> une comprehension du monde des affaires.
        </Typography>
        
        <div className="flex items-center gap-4 mt-4 md:flex-row flex-col">
          <CTA url="/Service" className="bg-primary text-secondary-500 h-full w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
            <Typography variant="small" className="uppercase text-[12px] font-bold">Comment nous travaillon</Typography>
          </CTA>
          <CTA url="/Contact" className="flex items-center justify-center space-x-2 md:space-x-4 border border-secondary-500 text-secondary-500 h-full w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
            <Typography variant="small" className="uppercase text-[12px] font-bold">Contactez-nous</Typography>
            <Phone fill={`${stylesIcon.black}`} strokeWidth={0}/>
          </CTA>
        </div>
      </div>

        <div className="col-span-12 md:col-span-6 py-8 flex items-start md:items-end justify-center md:justify-end">
          <Image src={home_1} alt="Heros" priority width={450}/>
        </div>
      </div>
    </section>
  )
}

function Service(){
  return(
    <section className="container">
      <div className="flex items-end justify-center md:justify-between flex-wrap">
        <div className="flex flex-col">
          <Typography variant="small" className="text-grey-500 md:text-start text-center uppercase mb-2">Service</Typography>
          <Typography variant="h1" className="text-secondary-500 md:text-start text-center">
            Comment notre agence<br /> peut vous aider
          </Typography>
        </div>
        <CTA url="/Service" className="bg-primary hidden md:flex text-secondary-500 w-fit min-w-[224px] mt-4">
          <Typography variant="small" className="uppercase text-[12px] font-bold">Decouvrir tout</Typography>
        </CTA>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
      {
          CardServices.slice(0, 3).map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
              <CardService
                className={`${index >= CardServices.length - (CardServices.length - 1) ? 'hidden md:block' : ''}`}
                key={index}
              >
                <div className="p-4 rounded-full h-16 w-16 bg-secondary-500 text-primary flex items-center justify-center">
                  <IconComponent size={42} />
                </div>
                <Typography variant="h3" className="font-bold mt-2">{card.title}</Typography>
                <Typography variant="p" className="text-grey-500 [&:not(:first-child)]:mt-2">{card.description}</Typography>
              </CardService>
            );
          })
        }
        <CTA url="/Service" className="bg-primary flex md:hidden text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
          <Typography variant="small" className="uppercase text-[12px] font-bold">Decouvrir tout</Typography>
        </CTA>
      </div>
    </section>
  )
}

function Produit(){
  return(
    <section className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 py-8 h-auto md:h-[100vh] flex flex-col justify-center items-center md:items-start">
          <Typography variant="small" className="text-grey-500 uppercase mb-2">Produit</Typography>
          <Typography variant="h1" className="text-secondary-500 md:text-start text-center">
            Les differents type de<br/> produits
          </Typography>
          <Typography variant="p" className="text-secondary-100 md:text-start text-center">
            Une equipe pour SMIC. Competences techniques, design,<br/> capacite a se mettre a la place du commercant
          </Typography>

          <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex items-center gap-2">
              <span className="bg-secondary-500 text-primary rounded-full p-1"><Check/></span>
              <Typography variant="small" className="text-secondary-100">Formule freelance a la cardte sans engagement</Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary-500 text-primary rounded-full p-1"><Check/></span>
              <Typography variant="small" className="text-secondary-100">Corporate (8h de disponibilite)</Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary-500 text-primary rounded-full p-1"><Check/></span>
              <Typography variant="small" className="text-secondary-100">Formule startup (avec 4h de permanence)</Typography>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 py-8 flex items-center justify-center md:justify-end">
          <Image src={home_2} alt="Produit" priority width={450}/>
        </div>
      </div>
    </section>
  )
}

function Apropos(){
  return(
    <section className="container">
    <div className="grid grid-cols-12">
      <div className="order-2 md:order-1 col-span-12 md:col-span-6 py-8 flex items-start md:items-center justify-center md:justify-start">
        <Image src={home_3} alt="Apropos" priority width={450}/>
      </div>

      <div className="order-1 md:order-2 col-span-12 md:col-span-6 py-8 h-auto md:h-[100vh] flex flex-col justify-center items-center md:items-start">
          <Typography variant="small" className="text-grey-500 uppercase mb-2">A Proppos</Typography>
          <Typography variant="h1" className="text-secondary-500 md:text-start text-center">
            Innovation agile pour <br/>Solution web et<br/> Mobile
          </Typography>
          <Typography variant="p" className="text-secondary-100 md:text-start text-center">
            Collaboration Profonde avec les commercant, pour un<br/>Partenariat a long terme et un travail en equipe
          </Typography>
          
            <CTA url="/Apropos" className="bg-primary text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
              <Typography variant="small" className="uppercase text-[12px] font-bold">A propos de nous</Typography>
            </CTA>
        </div>
    </div>
  </section>
  )
}

function Blog() {
  return (
    <section className="container">
      <div className="flex items-end justify-center md:justify-between flex-wrap">
        <div className="flex flex-col">
          <Typography variant="small" className="text-grey-500 md:text-start text-center uppercase mb-2">Blog</Typography>
          <Typography variant="h1" className="text-secondary-500 md:text-start text-center">
            Les derniers<br /> articles de notre blog
          </Typography>
        </div>
        <CTA url="/Blog" className="bg-primary hidden md:flex text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
          <Typography variant="small" className="uppercase text-[12px] font-bold">Decouvrir tout</Typography>
        </CTA>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
        {
          CardBlogs.slice(0, 3).map((card) => (
            <Link href={`/Blog/${card.id}`} key={card.id}>
              <CardBlog>
                <Image src={card.img} alt={card.title} priority className="object-cover w-full h-44" />
                <div className="p-5 flex flex-col justify-start">
                  <Typography variant="small" className="mb-3 text-xs font-semibold tracking-wide uppercase">{card.title}</Typography>
                  <Typography variant="h3" className="font-bold leading-5">{card.cathegorie}</Typography>
                  <Typography variant="p" className="text-grey-500 [&:not(:first-child)]:mt-4 line-clamp-2">{card.description}</Typography>
                  <Typography variant="small" className="[&:not(:first-child)]:mt-4">{card.date}</Typography>
                </div>
              </CardBlog>
            </Link>
          ))
        }
        <CTA url="/Blog" className="bg-primary flex md:hidden text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
          <Typography variant="small" className="uppercase text-[12px] font-bold">Decouvrir tout</Typography>
        </CTA>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section className="w-full p-8 md:p-16 bg-primary flex items-center justify-center">
      <div className="container px-8 py-4 bg-grey-100 rounded-lg">
        <Typography variant="h3" className="text-secondary-500 mb-8">
          Prenez Contact
        </Typography>
        <Form/>
      </div>
    </section>
  );
}

function Form(){
  return(
    <form 
    action={async (formaData) =>{ 
     await sendEmail(formaData)
    }}
     className="grid grid-cols-2 gap-4 grid-flow-dense">
      <div className="flex col-span-2 md:col-span-1 flex-col gap-2">
        <label htmlFor="name" className="text-sm uppercase text-secondary-500 font-semibold">
          Nom (Personnel, Entreprise, Société)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={500}
          placeholder="ex: Marc, Krepri, Facebook"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 border-secondary-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label htmlFor="email" className="text-sm uppercase text-secondary-500 font-semibold">
          Mail
        </label>
        <input
          type="email"
          name="senderMail"
          id="email"
          required
          maxLength={500}
          placeholder="exemple@gmail.com"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 border-secondary-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label htmlFor="phone" className="text-sm uppercase text-secondary-500 font-semibold">
          Numéros téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="ex: +261 00 00 000"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 border-secondary-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label htmlFor="subject" className="text-sm uppercase text-secondary-500 font-semibold">
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="px-4 py-2 rounded-lg border text-secondary-500 border-secondary-100 w-full outline-none bg-inherit"
        >
          <option value="default"></option>
          <option value="Demande_de_stage">Demande de stage</option>
          <option value="Demande_d_information">Demande d&apos; information</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="message" className="text-sm uppercase text-secondary-500 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Écrire un message..."
          className="placeholder:text-grey-500 min-h-[30vh] text-start px-4 py-2 rounded-lg border text-secondary-500 border-secondary-100 w-full outline-none bg-inherit"
        />
      </div>
      <div className="flex justify-end col-span-2">
        <SubmitButton/>
      </div>
    </form>
  )
}

function SubmitButton(){
  const {pending} = useFormStatus()
  return(
    <button type="submit" className="p-2 rounded-lg bg-primary text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4 uppercase flex items-center justify-center space-x-4">
      <Typography variant="small">
        Evoyer
      </Typography>
      <SendIcon size={24}/>
    </button>
  )
}