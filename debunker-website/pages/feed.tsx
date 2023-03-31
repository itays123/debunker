import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";
import PageHeader from "@/components/header/PageHeader";

export default function Source() {
  return (
    <>
      <DocumentHead
        title="פיד ניפוצים"
        description="This is the debunking feed page"
      />
      <div>
        <PageHeader title="פיד ניפוצים">
          <h2>יושק בקרוב!</h2>
        </PageHeader>
        <main>{/* Here will be the main dialoug */}</main>
        <Footer />
      </div>
    </>
  );
}
