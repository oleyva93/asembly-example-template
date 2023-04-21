import HeaderContent from "@/components/common/header-content";
import Layout from "@/components/layout";
import Container from "@/modules/logs/container";

export default function Logs() {
  return (
    <>
      <HeaderContent title="Logs" />
      <Container />
    </>
  );
}

Logs.getLayout = function getLayout(page) {
  return <Layout headerTitle="Logs">{page}</Layout>;
};
