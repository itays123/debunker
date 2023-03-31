import DataItem from "@/components/dataItem";
import Footer from "@/components/footer";
import DocumentHead from "@/components/head/DocumentHead";
import PageHeader from "@/components/header/PageHeader";
import { DataSource } from "@/interfaces";
import GithubDataInjector from "@/utilities/data/GithubDataInjector";
import { generateDataSource } from "@/utilities/data/itemSplitter";
import { GetServerSidePropsContext } from "next";

export interface ISourceProps {
  source: DataSource;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const injector = new GithubDataInjector();
  const rawSource = await injector.getData();
  const source = generateDataSource(rawSource);
  return {
    props: { source } as ISourceProps, // will be passed to the page component as props
  };
}

export default function Source({ source }: ISourceProps) {
  return (
    <>
      <DocumentHead
        title="מקורות מידע"
        description="This is the data used to debunk statements"
      />
      <div>
        <PageHeader title="מקורות מידע" />
        <main className="pb-16 px-8 space-y-4">
          {source.map(({ content, subitems }, pIndex) => (
            <>
              <DataItem content={content} index={pIndex} key={pIndex} />
              {subitems.map((subitem, index) => (
                <DataItem
                  content={subitem}
                  index={index}
                  parentIndex={pIndex}
                  key={`${pIndex}-${index}`}
                />
              ))}
            </>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}
