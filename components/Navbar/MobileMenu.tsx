import React from "react";
import NavItem from "./NavItem";

interface MobileMenuProps {
  links: [];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavItem href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
