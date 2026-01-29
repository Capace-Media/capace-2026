import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
export default function NavMenu() {
  return (
    <NavigationMenu className="frosted rounded-full border px-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
          // render={
          //   <Link
          //     href={"/tjanster"}
          //     className="hover:text-primary flex items-center gap-1"
          //   >
          //     Våra tjänster
          //     <ChevronDown className="size-3" />
          //   </Link>
          // }
          >
            Våra tjänster
          </NavigationMenuTrigger>

          <NavigationMenuContent className="z-50 flex gap-2">
            <div>
              <ParentLink href="/tjanster">Alla tjänster</ParentLink>
              <ParentLink href="/tjanster/design">Design</ParentLink>
              <SubLink href={"/tjanster/design/logotypdesign"}>
                Logotypdesign
              </SubLink>
              <SubLink href={"/tjanster/design/grafisk-profil"}>
                Grafisk profil
              </SubLink>
              <ParentLink href="/tjanster/marknadsforing">
                Marknadsföring
              </ParentLink>
              <SubLink href={"/tjanster/marknadsforing/seo"}>SEO</SubLink>
              <SubLink href={"/tjanster/marknadsforing/google-ads"}>
                Google Ads
              </SubLink>
              <SubLink href={"/tjanster/marknadsforing/sociala-medier"}>
                Sociala medier
              </SubLink>
              <SubLink href={"/tjanster/marknadsforing/paid-social"}>
                Paid social
              </SubLink>
            </div>
            <div>
              <ParentLink href="/tjanster/webb">Webb</ParentLink>
              <SubLink href={"/tjanster/webb/webbutveckling"}>Hemsidor</SubLink>
              <SubLink href={"/tjanster/webb/e-handel"}>E-handel</SubLink>
              <SubLink href={"/tjanster/webb/hosting"}>Hosting</SubLink>
              <ParentLink href="/tjanster/content">Content</ParentLink>
              <SubLink href={"/tjanster/content/foto-film"}>
                Foto & Film
              </SubLink>
              <SubLink href={"/tjanster/content/tryckmaterial"}>
                Tryckmaterial
              </SubLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ParentLink href="/kundcase">Kundcase</ParentLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ParentLink href="/nyheter">Nyheter</ParentLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ParentLink href="/om-oss">Om oss</ParentLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ParentLink = ({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuLink
      render={
        <Link href={href} className="hover:text-primary whitespace-nowrap">
          {children}
        </Link>
      }
    />
  );
};

const SubLink = ({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuLink
      render={
        <Link
          href={href}
          className="hover:text-primary text-muted-foreground text-xs"
        >
          {children}
        </Link>
      }
    />
  );
};
