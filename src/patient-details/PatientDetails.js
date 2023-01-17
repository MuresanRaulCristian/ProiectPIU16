import { TextField } from "@mui/material";
import MedicineList from "./MedicineList";

const PatientDetails  = () => {
const patient = {
    firstName: 'Ion',
    lastName: 'Popescu',
    gender: 'male',
    birthdate: '15.03.1985',
    marriageStatus: 'married',
    address: 'Str. Bucegi, Nr. 14A, Cluj-Napoca, Cluj, Romania',
    profession: 'Manager distributie depozit pe utilaj autopropulsat',
    company: 'Kaufland Romania SRL'
};

 
return(
<div class="container" style={{display: "flex", justifyContent:"space-around"}}>
<div class="fisa-medicala" style={{marginTop: "30px" ,width: "620px", background: "#990d0d"}}>
    <h1>Fisa Medicala</h1>
<div class="table" style={{display: "flex",
    flexDirection: "column"}}>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}} >
<span>Nume</span>
<span>{ patient.firstName }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Prenume</span>
<span>{ patient.firstName }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Sexul</span>
<span>{ patient.gender }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Data nasterii</span>
<span>{ patient.birthdate }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Starea civila</span>
<span>{ patient.marriageStatus }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Domiciliu</span>
<span>{ patient.address }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Ocupatia</span>
<span>{ patient.profession }</span>
</div>
<div class="row" style = {{
    display: "flex",
    justifyContent: "space-between"
}}>
<span>Locul de munca</span>
<span>{ patient.company }</span>
</div>
</div>
</div>

<div class="planTratament">
<h1>Plan tratament</h1>
<MedicineList></MedicineList>
<button>Transmite plan tratament</button>
</div>

</div>
);

}
export default PatientDetails;