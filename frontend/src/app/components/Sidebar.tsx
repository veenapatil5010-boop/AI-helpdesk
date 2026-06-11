import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/jsw-logo.svg";

interface SidebarProps {
  links?: {
    to: string;
    icon: any;
    label: string;
  }[];
}

export function Sidebar({ links = [] }: SidebarProps) {

  const location = useLocation();

  return (

    <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-800 flex justify-center">

        <img
          src={logo}
          alt="JSW Logo"
          className="w-36"
        />

      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">

        {links.map((link, index) => {

          const Icon = link.icon;

          const isActive =
            location.pathname === link.to;

          return (

            <Link
              key={index}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >

              <Icon className="w-5 h-5" />

              <span>{link.label}</span>

            </Link>

          );

        })}

      </div>

    </div>

  );

}