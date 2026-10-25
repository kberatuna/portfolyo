const services = [
  {
    title: "Tanıtım Sitesi",
    description: "İşletmenizi, hizmetlerinizi ve iletişim bilgilerinizi anlatan sade ve şık bir web sitesi.",
  },
  {
    title: "Mobil Uyumlu Tasarım",
    description: "Telefonda, tablette ve bilgisayarda düzgün görünen modern bir tasarım.",
  },
  {
    title: "Kolay İletişim",
    description: "Müşterilerinizin size e-posta, WhatsApp veya harita üzerinden kolayca ulaşması.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-16">
      <h2 className="text-3xl font-bold">Hizmetler</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Küçük işletmeler için web sitesi hazırlıyorum.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
