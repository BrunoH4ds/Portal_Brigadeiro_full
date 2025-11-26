import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

export default function Social() {
  return(
    <div className="flex gap-5 justify-center">
          <Link
            href="https://www.instagram.com/eebrigadeiroeduardo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-blue-900/40 p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors "
          >
            <IconBrandInstagram size={40} />
          </Link>
          <Link
            href="https://www.facebook.com/EE.BrigadeiroEduardoGomes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-blue-900/40 p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
          >
            <IconBrandFacebook size={40} />
          </Link>
        </div>
  )
};