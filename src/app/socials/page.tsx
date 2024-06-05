import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My Accounts</H2>
        <p>
          I am not super active on any social medias but feel free to follow and
          possibly reach out!
        </p>
        <p>Links to some of my accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.instagram.com/dpowell.31/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dawsonpowell007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dawsonpowell07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Get in contact</H2>
        <p>
          The best way to get in contact with me is either through LinkedIn or
          contacting the email below feel free to reach out for any
          opportunites or if you want to get in touch.
        </p>
        <li>
            <a
              href="mailto:dawsonpowell07@gmail.com"
              className="text-primary hover:underline"
            >
              My Email
            </a>
          </li>
        <hr className="border-muted" />
      </section>
    </section>
  );
}
