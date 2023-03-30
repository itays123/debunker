import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Icon } from "../icons";

const ICON_SIZE = 28;

export interface NavLinkProps {
  icon: Icon;
  label: string;
  to: string;
}

export default function NavLink({ icon: Icon, label, to }: NavLinkProps) {
  const router = useRouter();
  const active = useMemo(() => router.pathname == to, [router.pathname, to]);
  return (
    <Link href={to} passHref legacyBehavior>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer ${
          active ? "text-accent-500" : "text-gray-700"
        }`}
      >
        <Icon width={ICON_SIZE} height={ICON_SIZE} />
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </Link>
  );
}
