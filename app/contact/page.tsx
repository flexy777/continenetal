import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactPaths from "@/components/ContactPaths";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation, become a partner, or start a project inquiry with Continental Renewable Energy, Critical Infrastructure Resilience & Smart Security Solutions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something"
        highlight="resilient"
        subtitle="Whether you're scoping a project, exploring a partnership, or need expert guidance, our team is ready to help."
      />
      <ContactPaths />
      <Contact />
    </>
  );
}
