import { useEffect } from "react";

const SITE_NAME = "FOODBYHYBEK";
const HOME_TITLE = "FOODBYHYBEK | Nigerian & Ghanaian Catering in Edmonton";

/**
 * Gives each page its own browser-tab title and search description.
 * Pass an empty pageName for the home page.
 */
export default function usePageTitle(pageName, description) {
  useEffect(() => {
    document.title = pageName ? `${pageName} | ${SITE_NAME}` : HOME_TITLE;

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [pageName, description]);
}
