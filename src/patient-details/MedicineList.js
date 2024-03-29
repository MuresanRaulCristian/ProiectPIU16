import React, {useState} from 'react';
import {List, ListItem, TextField} from '@material-ui/core';
import {Checkbox} from '@mui/material';


function MedicineList() {
    const [medicines, setMedicines] = useState([
        {"name": "Acetaminophen", "dosage": "325-650 mg every 4-6 hours, up to 4g/day"}, {
            "name": "Ibuprofen",
            "dosage": "200-800 mg every 4-6 hours, up to 3.2g/day"
        }, {"name": "Aspirin", "dosage": "325-650 mg every 4-6 hours, up to 4g/day"}, {
            "name": "Naproxen",
            "dosage": "250-500 mg every 8-12 hours, up to 1.5g/day"
        }, {"name": "Amoxicillin", "dosage": "250-500 mg every 8 hours"}, {
            "name": "Metronidazole",
            "dosage": "250-500 mg every 8 hours"
        }, {"name": "Azithromycin", "dosage": "250-500 mg once a day for 3-5 days"}, {
            "name": "Ciprofloxacin",
            "dosage": "250-500 mg every 12 hours"
        }, {"name": "Clindamycin", "dosage": "150-450 mg every 6-8 hours"}, {
            "name": "Doxycycline",
            "dosage": "100 mg every 12 hours"
        }, {"name": "Erythromycin", "dosage": "250-500 mg every 6-12 hours"}, {
            "name": "Levofloxacin",
            "dosage": "250-750 mg once a day"
        }, {"name": "Omeprazole", "dosage": "20-40 mg once a day"}, {
            "name": "Lisinopril",
            "dosage": "10-40 mg once a day"
        }, {"name": "Metformin", "dosage": "500-1000 mg twice a day"}, {
            "name": "Simvastatin",
            "dosage": "10-40 mg once a day"
        }, {"name": "Atorvastatin", "dosage": "10-80 mg once a day"}, {
            "name": "Losartan",
            "dosage": "25-100 mg once a day"
        }, {"name": "Lipitor", "dosage": "10-80 mg once a day"}, {
            "name": "Propranolol",
            "dosage": "40-320 mg daily"
        }, {"name": "Amlodipine", "dosage": "2.5-10 mg once a day"}, {
            "name": "Furosemide",
            "dosage": "20-80 mg once a day"
        }, {"name": "Hydrochlorothiazide", "dosage": "12.5-50 mg once a day"}, {
            "name": "Captopril",
            "dosage": "12.5-150 mg 3-4 times daily"
        }, {"name": "Enalapril", "dosage": "2.5-40 mg once a day"},
    ]);


    const [searchTerm, setSearchTerm] = useState('');

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <TextField
                label="Search for a medicine"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
            />
            <List style={{height: "500px", overflowY: 'auto'}}>
                {filteredMedicines.map(medicine => (
                    <ListItem key={medicine.name}>
                        {medicine.name} - {medicine.dosage}
                        <Checkbox></Checkbox>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}


export default MedicineList;