import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";
import PageHeader from "@/components/header/PageHeader";

export default function Home() {
  return (
    <>
      <DocumentHead />
      <div>
        <PageHeader>
          <h2 className="text-xl">נלחמים בתופעת הפייק!</h2>
        </PageHeader>
        <main>{/* Here will be the main dialoug */}</main>
        <Footer />
      </div>
    </>
  );
}
