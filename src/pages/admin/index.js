import HeaderContent from "@/components/common/header-content";
import Layout from "@/components/layout";

export default function Admin() {
  return (
    <>
      <HeaderContent title="Admin " />
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return <Layout headerTitle="Admin">{page}</Layout>;
};
