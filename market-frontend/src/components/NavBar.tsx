import Image from "next/image";
import { NavItem } from "./NavItem";
import { AptosConnect } from "./AptosConnect";

export function NavBar() {
          <NavItem href="/mint" title="Mint" />
          <NavItem href="/dashboard" title="Dashboard" />
        </ul>
      </div>
      <AptosConnect />
    </nav>
  );
}
