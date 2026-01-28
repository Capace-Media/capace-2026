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
          <NavigationMenuTrigger>Våra tjänster</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              render={<Link href="/tjanster/design">Design</Link>}
            />

            <SubLink href={"/tjanster/design/logotypdesign"}>
              Logotypdesign
            </SubLink>
            <SubLink href={"/tjanster/design/grafisk-profil"}>
              Grafisk profil
            </SubLink>
            <NavigationMenuLink
              render={
                <Link href="/tjanster/marknadsföring">Marknadsföring</Link>
              }
            />
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
            <NavigationMenuLink
              render={<Link href="/tjanster/webb">Webb</Link>}
            />
            <SubLink href={"/tjanster/webb/hemsidor"}>Hemsidor</SubLink>
            <SubLink href={"/tjanster/webb/e-handel"}>E-handel</SubLink>
            <SubLink href={"/tjanster/webb/hosting"}>Hosting</SubLink>
            <NavigationMenuLink
              render={<Link href="/tjanster/content">Content</Link>}
            />
            <SubLink href={"/tjanster/content/foto-film"}>Foto & Film</SubLink>
            <SubLink href={"/tjanster/content/tryckmeterial"}>
              Tryckmaterial
            </SubLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/tjanster/kundcase">Kundcase</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/tjanster/om-oss">Om oss</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
        <Link href={href} className="text-muted-foreground pl-5">
          {children}
        </Link>
      }
    />
  );
};
