import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetail({
  todoDetail,
  openDialogue,
  setOpenDialogue,
}) {
  return (
    <Fragment>
      <Dialog
        onClose={() => setOpenDialogue(false)}
        open={openDialogue}
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: 2,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: 2,
          }}
        >
          {todoDetail?.todo || "Todo Details"}
        </DialogTitle>
       
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingTop: 2,
          }}
        >
          <Button
            onClick={() => setOpenDialogue(false)}
            variant="contained"
            sx={{
              background: "#1976d2",
              color: "white",
              textTransform: "capitalize",
              fontSize: "0.9rem",
              fontWeight: 500,
              "&:hover": {
                background: "#145ea8",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
