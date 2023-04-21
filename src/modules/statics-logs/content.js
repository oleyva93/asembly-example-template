import { useLogsAndTemporalLogs } from "@/hooks/useLogs";
import { Grid } from "@mui/material";
import { memo } from "react";
import { useStaticLogsCtx } from "./container";
import useEvent from "@/hooks/useEvent";
import LogList from "@/components/common/log-list";

const logSectionBp = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 };

const StaticLogsContent = () => {
  const [, setState] = useStaticLogsCtx();

  const storeLogs = useEvent((key, data) => {
    setState({
      [key]: data,
    });
  });

  const [logs, tempLogs] = useLogsAndTemporalLogs(storeLogs);

  return (
    <Grid container spacing={2} className="mt-5">
      <Grid item {...logSectionBp}>
        <LogList title="Logs" data={logs.data} />
      </Grid>
      <Grid item {...logSectionBp}>
        <LogList title="Temp Logs" data={tempLogs.data} />
      </Grid>
    </Grid>
  );
};

export default memo(StaticLogsContent);
