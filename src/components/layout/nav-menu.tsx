import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            render={
              <Link href={"/tjanster"} className="hover:text-primary">
                Våra tjänster
              </Link>
            }
          ></NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <div>
              <ParentLink href="/tjanster/design">Design</ParentLink>
              <SubLink href={"/tjanster/design/logotypdesign"}>
                Logotypdesign
              </SubLink>
              <SubLink href={"/tjanster/design/grafisk-profil"}>
                Grafisk profil
              </SubLink>
              <ParentLink href="/tjanster/marknadsföring">
                Marknadsföring
              </ParentLink>
              <SubLink href={"/tjanster/marknadsföring/seo"}>SEO</SubLink>
              <SubLink href={"/tjanster/marknadsföring/google-ads"}>
                Google Ads
              </SubLink>
              <SubLink href={"/tjanster/marknadsföring/sociala-medier"}>
                Sociala medier
              </SubLink>
              <SubLink href={"/tjanster/marknadsföring/paid-social"}>
                Paid social
              </SubLink>
            </div>
            <div>
              <ParentLink href="/tjanster/webb">Webb</ParentLink>
              <SubLink href={"/tjanster/webb/hemsidor"}>Hemsidor</SubLink>
              <SubLink href={"/tjanster/webb/e-handel"}>E-handel</SubLink>
              <SubLink href={"/tjanster/webb/hosting"}>Hosting</SubLink>
              <ParentLink href="/tjanster/content">Content</ParentLink>
              <SubLink href={"/tjanster/content/foto-film"}>
                Foto & Film
              </SubLink>
              <SubLink href={"/tjanster/content/tryckmeterial"}>
                Tryckmaterial
              </SubLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ParentLink href="/tjanster/kundcase">Kundcase</ParentLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ParentLink href="/tjanster/om-oss">Om oss</ParentLink>
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
        <Link href={href} className="hover:text-primary">
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
          className="text-muted-foreground hover:text-primary pl-5"
        >
          {children}
        </Link>
      }
    />
  );
};
