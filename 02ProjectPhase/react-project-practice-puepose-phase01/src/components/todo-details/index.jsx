import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetail({
  todoDetail,
  openDialogue,
  setOpenDialogue,
}) {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialogue()} open={openDialogue}>
        <DialogTitle>{todoDetail?.todo}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialogue(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
