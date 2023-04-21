import HeaderContent from "@/components/common/header-content";
import Layout from "@/components/layout";
import Container from "@/modules/statics-logs/container";

export default function StaticLogs() {
  return (
    <>
      <HeaderContent title="Static Logs" />
      <Container />
    </>
  );
}

StaticLogs.getLayout = function getLayout(page) {
  return <Layout headerTitle="Static Logs">{page}</Layout>;
};
