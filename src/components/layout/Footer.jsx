import { PLACEHOLDERS, navLinksLeft, navLinksRight } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import Logo from "../ui/Logo";
import SmartLink from "../ui/SmartLink";

const exploreLinks = [...navLinksLeft, ...navLinksRight, { label: "Request a Quote", to: "/quote" }];

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A24B]/20 bg-black px-6 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 pb-16 text-center md:grid-cols-3 md:text-left">
        <div className="flex justify-center md:justify-start">
          <Logo variant="full" />
        </div>

        <div>
          <h3 className={`${SERIF} text-2xl font-semibold text-[#F3EEE3]`}>Contact</h3>
          <span className="mx-auto mt-3 block h-px w-10 bg-[#C9A24B] md:mx-0" aria-hidden="true" />
          <ul className={`${SANS} mt-6 space-y-2 text-sm text-[#F3EEE3]/75`}>
            <li><a href={PLACEHOLDERS.phoneHref}>{PLACEHOLDERS.phoneDisplay}</a></li>
            <li><a href={`mailto:${PLACEHOLDERS.email}`}>{PLACEHOLDERS.email}</a></li>
            <li>{PLACEHOLDERS.address}</li>
          </ul>
          <div className={`${SANS} mt-5 flex justify-center gap-5 text-sm md:justify-start ${GOLD}`}>
            <SmartLink href={PLACEHOLDERS.instagramUrl}>Instagram</SmartLink>
            {PLACEHOLDERS.facebookUrl !== "#" && <SmartLink href={PLACEHOLDERS.facebookUrl}>Facebook</SmartLink>}
          </div>
        </div>

        <div>
          <h3 className={`${SERIF} text-2xl font-semibold text-[#F3EEE3]`}>Explore</h3>
          <span className="mx-auto mt-3 block h-px w-10 bg-[#C9A24B] md:mx-0" aria-hidden="true" />
          <ul className={`${SANS} mt-6 space-y-2 text-sm text-[#F3EEE3]/75`}>
            {exploreLinks.map((link) => (
              <li key={link.to}>
                <SmartLink href={link.to} className="hover:text-[#C9A24B]">{link.label}</SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${SANS} border-t border-[#F3EEE3]/10 py-6 text-center text-xs ${GOLD}`}>
        © {new Date().getFullYear()} {PLACEHOLDERS.businessName}. Website by deolustudio.
      </div>
    </footer>
  );
}
