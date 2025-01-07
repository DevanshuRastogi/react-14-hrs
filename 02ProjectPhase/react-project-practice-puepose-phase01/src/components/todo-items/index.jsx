import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function TodoItems({ todo, fetchTodoDetails }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 2,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent
        sx={{
          padding: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="text.primary">
          {todo?.todo || "Untitled Todo"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          padding: 2,
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Button
          onClick={() => fetchTodoDetails(todo?.id)}
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
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
}
