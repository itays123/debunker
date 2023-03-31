import Head from "next/head";

export interface IHeadProps {
  title?: string;
  description?: string;
}

export default function DocumentHead({
  title = "Debunker · נלחמים בפייק",
  description = "Denunking fake statements using GPT",
}: IHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
