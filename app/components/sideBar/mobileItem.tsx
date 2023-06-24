"use client";

import clsx from "clsx";
import { on } from "events";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handelClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `
      group
      flex
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      justify-center
      p-4
      text-gray-500
      hover:text-black
      hover:bg-gray-100
    `,
        active && "bg-gray-100 text-black",
        label == "Logout" && "text-rose-600"
      )}
    >
      <Icon className="h-6 w-6 " />
    </Link>
  );
};

export default MobileItem;
