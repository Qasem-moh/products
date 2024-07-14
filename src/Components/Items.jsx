export default function Items(props) {
  return (
    <div style={{ background: "red", 
    width: "150px",
    fontSize:"20px",
    padding:"25px",
    margin:"40px",
    border:"1px solid",
    borderRadius:"22px"
     }}>
      <h3>{props.name}</h3>
      <h3>{props.email}</h3>
      <h3>{props.children}</h3>
    </div>
  );
}
