import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Debunker · נלחמים בפייק</title>
        <meta
          name="description"
          content="Denunking fake statements using GPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="py-12 text-center space-y-4">
          <h1 className="font-bold text-2xl dir-ltr">
            Debunker · מנפץ הפייקים
          </h1>
          <h2 className="text-xl">נלחמים בתופעת הפייק!</h2>
        </header>
        <main>{/* Here will be the main dialoug */}</main>
        {/* Here will be the application footer */}
      </div>
    </>
  );
}
