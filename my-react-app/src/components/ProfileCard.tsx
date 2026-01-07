type ProfileProps = {
  name: string;
  role: string;
  experience: number;
  isActive: boolean;
};

function ProfileCard({ name, role, experience, isActive }: ProfileProps) {
  return (
    <div
      style={{
        border: "2px solid purple",
        padding: "15px",
        borderRadius: "8px",
        width: "250px",
        margin: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Experience: {experience} year(s)</p>
      <p>Status: {isActive ? "Active ✅" : "Inactive ❌"}</p>
    </div>
  );
}

export default ProfileCard;
