import ProfileCard from "../components/ProfileCard";

function PropsDemo() {
  return (
    <>
      <h2>Props Demo</h2>

      <ProfileCard
        name="Sakshi Pathare"
        role="React Learner"
        experience={1}
        isActive={true}
      />

      <ProfileCard
        name="sarthak pathare"
        role="Frontend Intern"
        experience={0}
        isActive={false}
      />
    </>
  );
}

export default PropsDemo;
