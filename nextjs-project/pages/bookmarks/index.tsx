import { GetServerSideProps } from "next";

interface HomeProps {
  titles: string[];
}
export default function Home({titles}: HomeProps) {
    return (
      <div>
          <h1>Bookmarks</h1>
          { titles.map(title => <h2>{title}</h2>) }
      </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { 
      titles : ['1', '2', '3']
    }
  }
}