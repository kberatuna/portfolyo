export default function Hero() {
  return (
    <section id="tanitim" className="py-24">
      <p className="text-sm font-medium text-blue-600">Merhaba, ben</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Berat Tuna Kaya
      </h1>
      <ul className="mt-8 space-y-3 text-lg text-zinc-600 dark:text-zinc-400">
        <li>🎓 İTÜ Cevher Hazırlama Mühendisliği 4. sınıf öğrencisiyim.</li>
        <li>⚽ 11 kez düzenlenen uluslararası bir gençlik futbol turnuvasının organizatörüyüm.</li>
        <li>💻 Web geliştirme öğreniyorum.</li>
      </ul>
      <a
        href="#iletisim"
        className="mt-10 inline-block rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Benimle iletişime geç
      </a>
    </section>
  );
}
