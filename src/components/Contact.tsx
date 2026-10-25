const contacts = [
  { label: "E-posta", value: "berattunakaya08@gmail.com", href: "mailto:berattunakaya08@gmail.com" },
  { label: "Instagram", value: "@k.beratuna", href: "https://www.instagram.com/k.beratuna" },
  { label: "LinkedIn", value: "berattunakaya", href: "https://www.linkedin.com/in/berattunakaya" },
];

export default function Contact() {
  return (
    <section id="iletisim" className="py-16">
      <h2 className="text-3xl font-bold">İletişim</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Bir projeniz mi var? Bana ulaşın.
      </p>
      <ul className="mt-8 space-y-4">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <span className="inline-block w-24 text-zinc-500">{contact.label}</span>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
