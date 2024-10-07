import Link from "next/link";
import "./breadcrumbs.scss";

interface Breadcrumb {
  active?: boolean;
  label: string;
  href: string;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={
              breadcrumb.active
                ? `breadcrumbs-list__item-active`
                : `breadcrumbs-list__item`
            }
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="breadcrumbs-list__item--separator">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
