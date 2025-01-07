import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
export default function TodoItems({ todo ,fetchTodoDetails }) {
  console.log(todo);

  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h5" color={"black"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions> 
        <Button onClick={()=>fetchTodoDetails(todo?.id)}
          sx={{
            background: "black",
            color: "white",
            opacity: ".75",
            "&:hover": {
              background: "white",
              color: "black",
              opacity: "1",
            },
          }}
        >
          show details
        </Button>
      </CardActions>
    </Card>
  );
}
