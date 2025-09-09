export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p>Angelo&apos;s Pizza<br />
      Inhaber: Angelo Rossi<br />
      Musterstraße 42<br />
      12345 Berlin<br />
      Deutschland</p>

      <p className="mt-4">
        Telefon: +49 (0)30 1234567<br />
        E-Mail: info@angelos-pizza.de
      </p>

      <p className="mt-4">Umsatzsteuer-ID: DE123456789</p>

      <p className="mt-4">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
        Angelo Rossi, Musterstraße 42, 12345 Berlin
      </p>

      <p className="mt-4">
        Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: <br />
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>

      <p className="mt-4">
        Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </main>
  );
}
