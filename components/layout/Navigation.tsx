import Link from "next/link";

const menu = [
  { name: "텀블러기부", path: "/tumbler-donation" },
  { name: "파트너십", path: "/partnership" },
];

function Navigation() {
  return (
    <nav>
      <ul className="flex">
        {menu.map(({ name, path }) => (
          <li key={path} className="p-2 text-sm font-semibold text-primary">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;