import { Link } from "react-router-dom";

/**
 * One link component for everything:
 * - "/menu" style paths use the router (no page reload)
 * - "https://..." links open in a new tab
 * - tel:, mailto: and "#" stay plain anchors
 */
export default function SmartLink({ href, children, ...anchorProps }) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const opensNewTab = href.startsWith("http");
  return (
    <a href={href} {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...anchorProps}>
      {children}
    </a>
  );
}
