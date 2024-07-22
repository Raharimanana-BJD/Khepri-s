"use client";

import { sendEmail } from "@/actions/sendEmail";
import { Typography } from "@/components";
import { SendIcon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
function ContactPage() {
  return (
    <div className="min-h-screen pt-[20vh]">
      <section className="container w-full p-8 md:p-16 flex flex-col items-center justify-center">
          <Typography
            variant="h1"
            className="text-secondary-500 dark:text-grey-100 mb-8"
          >
            Prenez Contact
          </Typography>
          <Form />
      </section>
    </div>
  );
}

export default ContactPage;

function Form() {
  return (
    <form
      action={async (formaData) => {
        const { data, error } = await sendEmail(formaData);
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email send successfully!");
      }}
      className="grid grid-cols-2 gap-4 grid-flow-dense"
    >
      <div className="flex col-span-2 md:col-span-1 flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Nom (Personnel, Entreprise, Société)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={500}
          placeholder="ex: Marc, Krepri, Facebook"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="email"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Mail
        </label>
        <input
          type="email"
          name="senderMail"
          id="email"
          required
          maxLength={500}
          placeholder="exemple@gmail.com"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="phone"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Numéros téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="ex: +261 00 00 000"
          className="placeholder:text-grey-500 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>

      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label
          htmlFor="subject"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="flex-1 px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        >
          <option value="default"></option>
          <option value="Demande_de_stage">Demande de stage</option>
          <option value="Demande_d_information">
            Demande d&apos; information
          </option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 col-span-2">
        <label
          htmlFor="message"
          className="text-sm uppercase text-secondary-500 dark:text-grey-100 font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Écrire un message..."
          className="placeholder:text-grey-500 min-h-[30vh] text-start px-4 py-2 rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-full outline-none bg-inherit"
        />
      </div>
      <div className="flex justify-end col-span-2">
        <SubmitButton />
      </div>
    </form>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="p-2 disabled:scale-100 disabled:bg-opacity-65 rounded-lg bg-primary text-secondary-500 w-full md:w-fit min-w-[224px] max-w-[384px] mt-4 uppercase flex items-center justify-center space-x-4"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-secondary-500"></div>
      ) : (
        <>
          <Typography variant="small">Evoyer</Typography>
          <SendIcon size={24} />
        </>
      )}
    </button>
  );
}
