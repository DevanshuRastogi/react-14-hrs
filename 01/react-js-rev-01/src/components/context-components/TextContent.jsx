import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TextContent() {
  const {theme} = useContext(GlobalContext);

  return <h1 style={{backgroundColor:theme=="light"?"red":"blue"}}>Hello devanshu </h1>;
}
