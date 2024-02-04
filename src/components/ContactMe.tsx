"use client";
import { useForm } from "react-hook-form";
import SectionHeading from "./SectionHeading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ContactValidation } from "@/lib/contact-vadliation";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const ContactMe = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactValidation>) => {
    console.log(values);
    const params = { ...values };

    // emailjs
    //   .send(
    //     process.env.EMAIL_SERVICE!,
    //     process.env.EMAIL_TEMPLATE!,
    //     params,
    //     process.env.EMAIL_KEY!
    //   )
    //   .then(
    //     (result) => {
    //       alert("Thank you for the email! I will get back to you soon. :)");
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       alert(
    //         "It seems like there was an error. You can email me directly at jvariara@gmail.com"
    //       );
    //       console.log(error.text);
    //     }
    //   );
    let title = `New message from ${params.user_name} <${params.user_email}>`;
    window.location.href = `mailto:jvariara@gmail.com?subject=${title}&body=${params.message}`;
    router.refresh();
  };

  return (
    <section id="contact">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 sm:gap-x-4 md:gap-x-6">
        <SectionHeading
          title={`<>Contact Me</>`}
          subtitle="Let's get to talking!"
        />

        <div className="flex items-center justify-center max-w-full rounded-3xl border border-primary/20 bg-gradient-to-bl from-primary to-primary/40 p-2.5 mt-6">
          <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/20 bg-muted w-full p-2.5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-y-4"
              >
                <div className="flex items-center justify-between gap-x-6 w-full">
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="user_name"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="border border-primary bg-inherit text-base-regular text-white outline-none w-full"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>

                  {/* email */}
                  <FormField
                    control={form.control}
                    name="user_email"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="border border-primary bg-inherit text-base-regular text-white outline-none w-full"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={8}
                          className="border border-primary bg-inherit text-base-regular text-white outline-none w-full"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit">Send it my way!</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
