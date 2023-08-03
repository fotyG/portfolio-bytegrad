"use server";

import { Resend } from "resend";
import { ContactFormEmail } from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender message",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      // text: message as string,
      to: "giorgadze@inbox.lv",
      reply_to: senderEmail as string,
      subject: "Message from contact form",
      from: "Contact Form <onboarding@resend.dev>",
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      // react: (
      //   <ContactFormEmail
      //     message={message}
      //     senderEmail={senderEmail}
      //   />
      // ),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
