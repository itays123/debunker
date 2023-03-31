import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";
import PageHeader from "@/components/header/PageHeader";

export default function Source() {
  return (
    <>
      <DocumentHead
        title="מקורות מידע"
        description="This is the data used to debunk statements"
      />
      <div>
        <PageHeader title="מקורות מידע" />
        <main>{/* Here will be the main dialoug */}</main>
        <Footer />
      </div>
    </>
  );
}
