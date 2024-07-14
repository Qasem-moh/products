export default function Items(props) {
  return (
    <div style={{ background: "red", 
    width: "150px",
    fontSize:"20px",
    padding:"25px",
     }}>
      <h3>{props.name}</h3>
    </div>
  );
}
