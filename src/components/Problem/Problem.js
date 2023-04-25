import WorkTitle from "../UI/WorkTitle/WorkTitle";
import "./Problem.scss";

export default function Problem() {
  return (
    <div className="container problem__container">
      <WorkTitle title='defining the problem' />      
      <div className="problem__text">
        Designing a product that helps new startups setup their business in a
        coworking space with budget constraints.
      </div>
    </div>
  );
}
