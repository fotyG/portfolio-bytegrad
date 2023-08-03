"use client";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "@/components/submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:gogimaster@inbox.lv"
        >
          pengu@kingoficeberg.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          required
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
