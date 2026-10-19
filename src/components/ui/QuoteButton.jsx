import PrimaryButton from "./PrimaryButton";

export default function QuoteButton({ className = "" }) {
  return (
    <PrimaryButton href="/quote" className={className}>
      Request a Quote
    </PrimaryButton>
  );
}
