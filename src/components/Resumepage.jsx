import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import image from './images/logo.png'


const styles={
    imagecss:{
        maxWidth: "100px"
    },
    paper: {
    padding: "5%",
    margin: "5%",
    border: "1px solid black",
    }
}

const Resumepage = () => {
    return(
        <>
        <Paper style={styles.paper} >
        <Stack direction="row" justifyContent="space-between" >
        <Stack>
        <img style={styles.imagecss} src={image} />
        </Stack>

        <Stack>
        <Typography>
        Your Full Name
        </Typography>
        <Typography>
        UG/PG  I/II / III / final yr
        </Typography>
        <Typography>
        SGSITS, Indore
        </Typography>
        <Typography>
        Date Of Birth
        </Typography>
        <Typography>
        Email ID : (Only Gmail ID)
        </Typography>
        </Stack>

        <Stack>
        <Typography textAlign="right" >
         Enrollment No.
        </Typography>
        <Typography textAlign="right" >
        Department
        </Typography>
        <Typography textAlign="right" >
        SGSITS, Indore
        </Typography>
        <Typography textAlign="right" >
        Specialization: None
        </Typography>
        <Typography textAlign="right" >
        Mobile # : +91 XXXXXXXXXX
        </Typography>
        </Stack>
        </Stack>    
        <br></br>
        <hr></hr>

        <br></br>
        <hr></hr>
        <Stack direction="row" justifyContent="space-between" >
        <Typography>
        Degree / Certificate
        </Typography>
        <Typography>
        University / Board
        </Typography>
        <Typography>
        Institute / School
        </Typography> 
        <Typography>
        Year of Passing
        </Typography> 
        <Typography>
        CGPA / Percentage
        </Typography>
        </Stack>
        <hr></hr>
        <Stack>
        <Typography>
        Post Graduation
        </Typography>

        </Stack>
        <hr></hr>
        <Stack>
        <Typography>
         Graduation
        </Typography>

        </Stack>
        <hr></hr>
        <Stack>
        <Typography>
        12th
        </Typography>

        </Stack>
        <hr></hr>
        <Stack>
        <Typography>
        Diploma Studies
        </Typography>

        </Stack>
        <hr></hr>
        <Stack>
        <Typography>
        10th
        </Typography>

        </Stack>
        <hr></hr>
        <br></br>

        <Typography><b>Scholastic Achievements</b></Typography>
        <hr></hr>
        <ul>
         <Stack direction="row" justifyContent="space-between" >
         <li>Description of Achievement</li>
         <Typography>Duration</Typography>
         </Stack>
         <Stack direction="row" justifyContent="space-between" >
         <li>Description of Achievement</li>
         <Typography>Duration</Typography>
         </Stack>
         <Stack direction="row" justifyContent="space-between" >
         <li>Description of Achievement</li>
         <Typography>Duration</Typography>
         </Stack>
         </ul>
        
        <br></br>
        <Typography>
        <b>Academic Projects</b>
        </Typography>
        <hr></hr>
        <br></br>

        <Stack>
   

        <Stack  direction="row" justifyContent="space-between" >
        <Typography>
        Project Title 1
        </Typography>
        <Typography>
        Duration
        </Typography>
        </Stack>

        <Stack  direction="row" justifyContent="space-between" >
        <Typography>
        Faculty Mentor???s Name
        </Typography>
        <Typography>
        Mentor???s Dept & Institute
        </Typography>
        </Stack>

        <ul>
            <li>Project Description</li>
            <li>Project Description</li>
        </ul>
     
        <Stack  direction="row" justifyContent="space-between" >
        <Typography>
        Project Title 2
        </Typography>
        <Typography>
        Duration
        </Typography>
        </Stack>

        <Stack  direction="row" justifyContent="space-between" >
        <Typography>
        Faculty Mentor???s Name
        </Typography>
        <Typography>
        Mentor???s Dept & Institute
        </Typography>
        </Stack>
        <ul>
            <li>Project Description</li>
            <li>Project Description</li>
        </ul>
     
        </Stack>
        <br></br>
        <br></br>
        <Typography><b>Technical</b> </Typography>
            <hr></hr>
        <Stack>
           
            <br></br>
            <Stack direction="row" justifyContent="space-between"  >
            <Typography>Project Title 1</Typography>
            <Typography>Duration</Typography>
            </Stack>
            <ul>
            <li>Project Description</li>
            <li>Project Description</li>
        </ul>
        </Stack>

        <br></br>
        <Typography><b>Platforms Worked</b></Typography>
            <hr></hr>
        <Stack>
     
            <br></br>
            <ul>
            <Stack direction="row" justifyContent="space-between" >
            <li>Operating Systems  &nbsp; &nbsp;:</li>
            <Typography>Project Description</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" >
            <li>Programming Skills &nbsp; &nbsp;:</li>
            <Typography>Project Description</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" >
            <li>Web Designing &nbsp; &nbsp;:</li>
            <Typography>Project Description</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" >
            <li>Software Skills  &nbsp; &nbsp;:</li>
            <Typography>Project Description</Typography>
            </Stack>
        </ul>
        </Stack>
        <br></br>
        <br></br>
        <Typography><b>Positions of Responsibility</b></Typography>
            <hr></hr>
            <br></br>
        <Stack>
         
            <Stack direction="row" justifyContent="space-between" >
            <Typography>Position</Typography>
            <Typography>Duration</Typography>
            </Stack>
            <ul>
                <li>Description</li>
            </ul>
            <Stack direction="row" justifyContent="space-between" >
            <Typography>Position</Typography>
            <Typography>Duration</Typography>
            </Stack>
            <ul>
                <li>Description</li>
            </ul>
        </Stack>

        <Typography><b>Extracurricular Activities</b></Typography>
            <hr></hr>
            <br></br>
        <Stack>
            <Stack direction="row" justifyContent="space-between" >
            <Typography>Event</Typography>
            <Typography>Duration</Typography>
            </Stack>
            <ul>
                <li>Description</li>
            </ul>
            <Stack direction="row" justifyContent="space-between" >
            <Typography>Event</Typography>
            <Typography>Duration</Typography>
            </Stack>
            <ul>
                <li>Description</li>
            </ul>
        </Stack>



    
        
         
        </Paper>
        </>
    )
}
export default Resumepage