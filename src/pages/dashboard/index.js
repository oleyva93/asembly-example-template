import HeaderContent from "@/components/common/header-content";
import Layout from "@/components/layout";
import queryClient from "@/config/query-client";
import { SETTINGS_KEYS } from "@/constants/dashboard";
import { capitalizeText } from "@/helpers/string";
import { prefetchKeySettings, useKeySettings } from "@/hooks/useDashboard";
import Container from "@/modules/dashboard/container";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { dehydrate } from "react-query";

export default function Dashboard() {
  const {
    data: liveMode,
    refetch,
    isFetching,
  } = useKeySettings(SETTINGS_KEYS.LIVE_MODE);

  const isEnable = liveMode?.value === "enable";

  return (
    <>
      <HeaderContent
        title="Dashboard"
        rightSection={
          <Typography className="dark:text-white" variant="subtitle1">
            Live Status:{" "}
            {!isFetching ? (
              <Tooltip title={capitalizeText(liveMode?.value)}>
                <IconButton
                  size="small"
                  className="rounded-md w-[25px] h-[25px] mb-1"
                  onClick={() => refetch()}
                >
                  {isEnable && !isFetching ? (
                    <CheckCircleIcon sx={{ color: "green" }} />
                  ) : (
                    <CancelIcon sx={{ color: "red" }} />
                  )}
                </IconButton>
              </Tooltip>
            ) : (
              <CircularProgress className="!w-[20px] !h-[20px] align-[-4px]" />
            )}
          </Typography>
        }
      />
      <Container />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const token = req?.cookies?.access_token;
  await prefetchKeySettings(token, SETTINGS_KEYS.LIVE_MODE);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout headerTitle="Dashboard">{page}</Layout>;
};
