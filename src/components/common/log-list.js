import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function LogList({ title = "Logs", data = [] }) {
  return (
    <Box className="w-full bg-black rounded text-white">
      <Grid className="py-[10px] px-[15px] bg-[#4b5563] rounded">{title}</Grid>
      <List dense className="!overflow-y-auto max-h-[358px]">
        {data?.map((item, index) => (
          <ListItem key={index}>
            <b className="mr-3">~</b>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
