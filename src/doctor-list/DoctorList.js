import SearchBar from "material-ui-search-bar";
import DoctorCard from "./doctor-card";
import { autocompleteClasses, Grid } from "@mui/material";
const DoctorList = () => {
    const doctors = [{"id":1,"first_name":"Ferdinand","last_name":"Angrave","specialization":"Cardiolog"},
    {"id":2,"first_name":"Hale","last_name":"Gould","specialization":"Cardiolog"},
    {"id":3,"first_name":"Marylou","last_name":"Picott","specialization":"Medic Generalist"},
    {"id":4,"first_name":"Lyn","last_name":"Penrith","specialization":"Ortoped"},
    {"id":5,"first_name":"Grete","last_name":"Alyonov","specialization":"Urolog"},
    {"id":6,"first_name":"Mattheus","last_name":"Codd","specialization":"Cardiolog"}]
    
    return (
        <div>
            <SearchBar
        // onChange={(newValue) => { setSearchStr(newValue) }}
        // onRequestSearch={() => handleSearch()}
        //value={searchStr}
        style={{
            width: '50%',
            marginLeft: '15%',
            marginBottom: '50px'
        }}
    />
    <div
        style={{
            marginTop: '50px',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "50px"
        }}>
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <DoctorCard {...doctor} />
            </div>
          ))}
          
    </div>
    
    </div>
    
    )
}
export default DoctorList