import LogList from "@/components/common/log-list";
import { LOG_TYPES } from "@/constants";
import { useLogLive } from "@/hooks/useLogs";
import { Grid } from "@mui/material";
import { memo, useCallback } from "react";
import { useLogsCtx } from "./container";

const logSectionBp = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 };

const LogsContent = () => {
  const [, setState] = useLogsCtx();

  const storeLogs = useCallback(
    (key) => (data) => {
      setState({
        [key]: data,
      });
    },
    [setState]
  );

  const { logs } = useLogLive(`${LOG_TYPES.LOG_SOCKET}`, storeLogs("logs"));
  const { logs: tempLogs } = useLogLive(
    `${LOG_TYPES.LOG_TEMP_SOCKET}`,
    storeLogs("tempLogs")
  );

  return (
    <Grid container spacing={2} className="mt-5">
      <Grid item {...logSectionBp}>
        <LogList title="Logs" data={logs} />
      </Grid>
      <Grid item {...logSectionBp}>
        <LogList title="Temp Logs" data={tempLogs} />
      </Grid>
    </Grid>
  );
};

export default memo(LogsContent);
