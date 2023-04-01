import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";
import PageHeader from "@/components/header/PageHeader";
import debunkerProxy, { fetchCorrections } from "@/stores/debunker";
import { useSnapshot } from "valtio";

export default function Home() {
  const { corrections, status, statement } = useSnapshot(debunkerProxy);
  return (
    <>
      <DocumentHead />
      <div>
        <PageHeader>
          <h2 className="text-xl">נלחמים בתופעת הפייק!</h2>
        </PageHeader>
        <main>
          <p>{statement}</p>
          {status === "IDLE" && (
            <button onClick={() => fetchCorrections()}>Click me</button>
          )}
          {status === "LOADING" && <p>Loading...</p>}
          {status === "DEBUNKED" && <p>{JSON.stringify(corrections)}</p>}
        </main>
        <Footer />
      </div>
    </>
  );
}
