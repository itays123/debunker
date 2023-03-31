import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";

export default function Home() {
  return (
    <>
      <DocumentHead
        title="מקורות מידע"
        description="This is the data used to debunk statements"
      />
      <div>
        <header className="py-12 text-center space-y-4">
          <h1 className="font-bold text-2xl dir-ltr">
            Debunker · מנפץ הפייקים
          </h1>
          <h2 className="text-xl">נלחמים בתופעת הפייק!</h2>
        </header>
        <main>{/* Here will be the main dialoug */}</main>
        <Footer />
      </div>
    </>
  );
}
