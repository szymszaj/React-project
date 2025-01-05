import Link from "next/link";

const TitlesNav = ({ sections }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-2 z-10">
      <ul className="flex gap-4 list-none">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="text-blue-500 hover:underline"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { TitlesNav };
