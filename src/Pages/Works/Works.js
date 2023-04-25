import Case from "../../components/Case/Case";
import Conclusion from "../../components/Conclusion/Conclusion";
import Covibe from "../../components/Covibe/Covibe";
import Lounch from "../../components/Lounch/Lounch";
import Problem from "../../components/Problem/Problem";
import Solution from "../../components/Solution/Solution";
import WorkImage from "../../components/WorkImage/WorkImage";

export default function Works() {
  return (
    <>      
      <WorkImage />
      <Covibe />
      <Problem />
      <Lounch />
      <Solution />
      <Conclusion />
      <Case />
    </>
  )
}