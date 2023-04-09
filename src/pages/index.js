export default function IndexPage() {
  return <>Unused content</>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
}
