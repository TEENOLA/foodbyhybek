import QuoteForm from "../components/sections/QuoteForm";
import usePageTitle from "../hooks/usePageTitle";

export default function QuotePage() {
  usePageTitle("Request a Quote", "Request a custom catering quote from FOODBYHYBEK for your event in Edmonton.");

  return <QuoteForm />;
}
