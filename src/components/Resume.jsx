import React, { useState } from 'react';
import { Stack, Box, Paper, Container, Typography, TextField, Button } from '@mui/material'
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '@mui/material';
import image from './images/logo.png'
import { Divider } from '@mui/material';
import jsPDF from 'jspdf';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    overflow: 'auto',
    height: '70%',
    scrollBehavior: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,

};

function Notes() {

    const media = useMediaQuery('(max-width: 600px)');

    const styles = {
        imagecss: {
            maxWidth: media ? "50px" : "100px"
        },
        paper: {
            padding: "5%",
            margin: "5%",
            border: "1px solid black",
        },
        Container2: {
            background: 'conic-gradient(from 0deg at 50% 50%, #1A66CA 0deg, rgba(18, 71, 140, 0.695026) 133.37deg, rgba(26, 102, 202, 0) 360deg), radial-gradient(188.3% 109.79% at 49.46% 50%, rgba(26, 102, 202, 0.7) 0%, rgba(26, 102, 202, 0) 100%)',
            backdropFilter: 'blur(40px)',
            display: "flex",
            flexDirection: media ? "column" : "row",
            padding: "0",
            height: "max-content"
        },
        Container4: {
            fontWeight: "bold",
            background: 'linear-gradient(0deg, rgba(26, 102, 202, 0.3), rgba(26, 102, 202, 0.3)), #F1F2F5',
            border: '1px solid #000000',
            boxSizing: 'border-box',
            borderRadius: "5px",
            minWidth: "30%",
            margin: "5% auto",
            color: '#000',
            padding: '10px',
        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setItem((prev) => {
            return [values, ...prev]
        })
        setValues({
            Name: "",
            UGPG: "",
            DateOfBirth: "",
            OnlyGmailID: "",
            EnrollmentNo: "",
            Department: "",
            None: "",
            XXXXXXXXXX: "",
            PostGraduation1: "",
            PostGraduation2: "",
            PostGraduation3: "",
            PostGraduation4: "",
            Graduation1: "",
            Graduation2: "",
            Graduation3: "",
            Graduation4: "",
            th1: "",
            th2: "",
            th3: "",
            th4: "",
            Diploma1: "",
            Diploma2: "",
            Diploma3: "",
            Diploma4: "",
            sth1: "",
            sth2: "",
            sth3: "",
            sth4: "",
            Achievement1: "",
            AchievementDuration1: "",
            Achievement12: "",
            AchievementDuration2: "",
            Achievement3: "",
            AchievementDuration3: "",
            ProjectTitle1: "",
            ProjectTitleDuration: "",
            FacultyMentorsName: "",
            MentorDeptInstitute: "",
            ProjectDescription1: "",
            ProjectDescription2: "",
            ProjectTitle2: "",
            ProjectTitleDuration2: "",
            FacultyMentorsName2: "",
            MentorDeptInstitute2: "",
            ProjectDescription21: "",
            ProjectDescription22: "",
            ProjectTitle3: "",
            ProjectTitleDuration3: "",
            FacultyMentorsName3: "",
            MentorDeptInstitute3: "",
            ProjectDescription31: "",
            ProjectDescription32: "",
            Operating: "",
            Programming: "",
            Web: "",
            Software: "",
            Position1: "",
            PositionDuration1: "",
            PositionDescription1: "",
            Position2: "",
            PositionDuration2: "",
            PositionDescription2: "",
            Event1: "",
            EventDuration1: "",
            EventDescription1: "",
            Event2: "",
            EventDuration2: "",
            EventDescription2: "",
        })
    }


    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const [item, setItem] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = React.useState({
        Name: "",
        UGPG: "",
        DateOfBirth: "",
        OnlyGmailID: "",
        EnrollmentNo: "",
        Department: "",
        None: "",
        XXXXXXXXXX: "",
        PostGraduation1: "",
        PostGraduation2: "",
        PostGraduation3: "",
        PostGraduation4: "",
        Graduation1: "",
        Graduation2: "",
        Graduation3: "",
        Graduation4: "",
        th1: "",
        th2: "",
        th3: "",
        th4: "",
        Diploma1: "",
        Diploma2: "",
        Diploma3: "",
        Diploma4: "",
        sth1: "",
        sth2: "",
        sth3: "",
        sth4: "",
        Achievement1: "",
        AchievementDuration1: "",
        Achievement12: "",
        AchievementDuration2: "",
        Achievement3: "",
        AchievementDuration3: "",
        ProjectTitle1: "",
        ProjectTitleDuration: "",
        FacultyMentorsName: "",
        MentorDeptInstitute: "",
        ProjectDescription1: "",
        ProjectDescription2: "",
        ProjectTitle2: "",
        ProjectTitleDuration2: "",
        FacultyMentorsName2: "",
        MentorDeptInstitute2: "",
        ProjectDescription21: "",
        ProjectDescription22: "",
        ProjectTitle3: "",
        ProjectTitleDuration3: "",
        ProjectDescription31: "",
        ProjectDescription32: "",
        Operating: "",
        Programming: "",
        Web: "",
        Software: "",
        Position1: "",
        PositionDuration1: "",
        PositionDescription1: "",
        Position2: "",
        PositionDuration2: "",
        PositionDescription2: "",
        Event1: "",
        EventDuration1: "",
        EventDescription1: "",
        Event2: "",
        EventDuration2: "",
        EventDescription2: "",
    })



    const onDelete = id => {
        setItem((prevData) =>
            prevData.filter((arrElem, index) => {
                return index !== id;
            })
        )
    }

    const GeneratePdf = () => { 
    var doc = new jsPDF("p", "pt", "a1");
    doc.html(document.querySelector("#content"),{
        callback: function(pdf){
            //  var pageCount = doc.internal.getNumberofPages();
            //  pdf.deletePage(pageCount);
            pdf.save("resume.pdf");
        }
    })
    }


    return (
        <>
            <Container>
                <Box>

                    <Stack sx={{ minWidth: "100%", flexWrap: "wrap", margin: "5% 0px" }} display="flex" justifyContent="space-evenly"
                        direction="row">

                    </Stack>
                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        minWidth: "100%",
                        alignItems: "center",
                    }} justifyContent="space-between">
                        <Button onClick={handleOpen} className='btn btn-primary'
                            color="secondary" style={styles.Container4}
                        >Create Your Resume</Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Typography id="modal-modal-title" variant={media ? "h5" : "h4"} my={2} component="h2">
                                    <b>Fill Your Details</b>
                                </Typography>

                                <Stack direction="row" justifyContent="space-between" >

                                    <Stack>
                                        <TextField
                                            onChange={handleChange}
                                            value={values.Name}
                                            name="Name"
                                            id="Name"
                                            placeholder="Your Full Name" />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.UGPG}
                                            name="UGPG"
                                            id="UGPG"
                                            placeholder="UG/PG  I/II / III / final yr" />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.DateOfBirth}
                                            name="DateOfBirth"
                                            id="DateOfBirth"
                                            placeholder="  Date Of Birth" />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.OnlyGmailID}
                                            name="OnlyGmailID"
                                            id="OnlyGmailID"
                                            placeholder="Email ID : (Only Gmail ID)" />
                                    </Stack>

                                    <Stack>
                                        <TextField
                                            onChange={handleChange}
                                            value={values.EnrollmentNo}
                                            name="EnrollmentNo"
                                            id="EnrollmentNo"
                                            placeholder="Enrollment No." />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.Department}
                                            name="Department"
                                            id="Department"
                                            placeholder="Department" />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.None}
                                            name="None"
                                            id="None"
                                            placeholder="Specialization: None" />
                                        <TextField
                                            onChange={handleChange}
                                            value={values.XXXXXXXXXX}
                                            name="XXXXXXXXXX"
                                            id="XXXXXXXXXX"
                                            placeholder="Mobile # : +91 XXXXXXXXXX" />
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
                                    <TextField
                                        onChange={handleChange}
                                        value={values.PostGraduation1}
                                        name="PostGraduation1"
                                        id="PostGraduation1"
                                        placeholder="University / Board" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.PostGraduation2}
                                        name="PostGraduation2"
                                        id="PostGraduation2"
                                        placeholder="Institute / School" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.PostGraduation3}
                                        name="PostGraduation3"
                                        id="PostGraduation3"
                                        placeholder="Year of Passing" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.PostGraduation4}
                                        name="PostGraduation4"
                                        id="PostGraduation4"
                                        placeholder="CGPA / Percentage" />
                                </Stack>
                                <hr></hr>
                                <Stack>
                                    <Typography>
                                        Graduation
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Graduation1}
                                        name="Graduation1"
                                        id="Graduation1"
                                        placeholder="University / Board" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Graduation2}
                                        name="Graduation2"
                                        id="Graduation2"
                                        placeholder="Institute / School" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Graduation3}
                                        name="Graduation3"
                                        id="Graduation3"
                                        placeholder="Year of Passing" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Graduation4}
                                        name="Graduation4"
                                        id="Graduation4"
                                        placeholder="CGPA / Percentage" />
                                </Stack>
                                <hr></hr>
                                <Stack>
                                    <Typography>
                                        12th
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={values.th1}
                                        name="th1"
                                        id="th1"
                                        placeholder="University / Board" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.th2}
                                        name="th2"
                                        id="th2"
                                        placeholder="Institute / School" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.th3}
                                        name="th3"
                                        id="th3"
                                        placeholder="Year of Passing" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.th4}
                                        name="th4"
                                        id="th4"
                                        placeholder="CGPA / Percentage" />
                                </Stack>
                                <hr></hr>
                                <Stack>
                                    <Typography>
                                        Diploma Studies
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Diploma1}
                                        name="Diploma1"
                                        id="Diploma1"
                                        placeholder="University / Board" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Diploma2}
                                        name="Diploma2"
                                        id="Diploma2"
                                        placeholder="Institute / School" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Diploma3}
                                        name="Diploma3"
                                        id="Diploma3"
                                        placeholder="Year of Passing" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.Diploma4}
                                        name="Diploma4"
                                        id="Diploma4"
                                        placeholder="CGPA / Percentage" />
                                </Stack>
                                <hr></hr>
                                <Stack>
                                    <Typography>
                                        10th
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={values.sth1}
                                        name="sth1"
                                        id="sth1"
                                        placeholder="University / Board" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.sth2}
                                        name="sth2"
                                        id="sth2"
                                        placeholder="Institute / School" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.sth3}
                                        name="sth3"
                                        id="sth3"
                                        placeholder="Year of Passing" />
                                    <TextField
                                        onChange={handleChange}
                                        value={values.sth4}
                                        name="sth4"
                                        id="sth4"
                                        placeholder="CGPA / Percentage" />
                                </Stack>
                                <hr></hr>
                                <br></br>
                                <Stack>
                                    <Typography>Scholastic Achievements</Typography>
                                    <Divider />
                                    <ul>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Achievement1}
                                                name="Achievement1"
                                                id="Achievement1"
                                                placeholder="Description of Achievement" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.AchievementDuration1}
                                                name="AchievementDuration1"
                                                id="AchievementDuration1"
                                                placeholder="Duration" />
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Achievement12}
                                                name="Achievement12"
                                                id="Achievement12"
                                                placeholder="Description of Achievement" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.AchievementDuration2}
                                                name="AchievementDuration2"
                                                id="AchievementDuration2"
                                                placeholder="Duration" />
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Achievement3}
                                                name="Achievement3"
                                                id="Achievement3"
                                                placeholder="Description of Achievement" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.AchievementDuration3}
                                                name="AchievementDuration3"
                                                id="AchievementDuration3"
                                                placeholder="Duration" />
                                        </Stack>
                                    </ul>

                                    <Stack>
                                        <Typography>
                                            Academic Projects
                                        </Typography>
                                        <Divider />
                                        <br></br>

                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitle1}
                                                name="ProjectTitle1"
                                                id="ProjectTitle1"
                                                placeholder="Project Title 1" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitleDuration}
                                                name="ProjectTitleDuration"
                                                id="ProjectTitleDuration"
                                                placeholder="Duration" />
                                        </Stack>

                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.FacultyMentorsName}
                                                name="FacultyMentorsName"
                                                id="FacultyMentorsName"
                                                placeholder="Faculty Mentor’s Name" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.MentorDeptInstitute}
                                                name="MentorDeptInstitute"
                                                id="MentorDeptInstitute"
                                                placeholder="Mentor’s Dept & Institute" />
                                        </Stack>

                                        <Stack>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription1}
                                                name="ProjectDescription1"
                                                id="ProjectDescription1"
                                                placeholder="Project Description" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription2}
                                                name="ProjectDescription2"
                                                id="ProjectDescription2"
                                                placeholder="Project Description" />
                                        </Stack>
                                        <br></br>
                                        <br></br>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitle2}
                                                name="ProjectTitle2"
                                                id="ProjectTitle2"
                                                placeholder="Project Title 2" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitleDuration2}
                                                name="ProjectTitleDuration2"
                                                id="ProjectTitleDuration2"
                                                placeholder="Duration" />
                                        </Stack>

                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.FacultyMentorsName2}
                                                name="FacultyMentorsName2"
                                                id="FacultyMentorsName2"
                                                placeholder="Faculty Mentor’s Name" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.sth4}
                                                name="MentorDeptInstitute2"
                                                id="MentorDeptInstitute2"
                                                placeholder="Mentor’s Dept & Institute" />
                                        </Stack>
                                        <Stack>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription21}
                                                name="ProjectDescription21"
                                                id="ProjectDescription21"
                                                placeholder="Project Description" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription22}
                                                name="ProjectDescription22"
                                                id="ProjectDescription22"
                                                placeholder="Project Description" />
                                        </Stack>

                                    </Stack>
                                    <br></br>
                                    <Stack>
                                        <Typography>Technical </Typography>
                                        <Divider />
                                        <br></br>
                                        <Stack direction="row" justifyContent="space-between"  >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitle3}
                                                name="ProjectTitle3"
                                                id="ProjectTitle3"
                                                placeholder="Project Title 1" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectTitleDuration3}
                                                name="ProjectTitleDuration3"
                                                id="ProjectTitleDuration3"
                                                placeholder="Duration" />
                                        </Stack>
                                        <Stack>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription31}
                                                name="ProjectDescription31"
                                                id="ProjectDescription31"
                                                placeholder="Project Description" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.ProjectDescription32}
                                                name="ProjectDescription32"
                                                id="ProjectDescription32"
                                                placeholder="Project Description" />
                                        </Stack>
                                    </Stack>

                                    <Stack>
                                        <Typography>Platforms Worked</Typography>
                                        <Divider />
                                        <br></br>
                                        <ul>
                                            <Stack direction="row" justifyContent="space-between" >
                                                <li>Operating Systems  &nbsp; &nbsp;:</li>
                                                <TextField
                                                    onChange={handleChange}
                                                    value={values.Operating}
                                                    name="Operating"
                                                    id="Operating"
                                                    placeholder="Operating Systems" />
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between" >
                                                <li>Programming Skills  &nbsp; &nbsp;:</li>
                                                <TextField
                                                    onChange={handleChange}
                                                    value={values.Programming}
                                                    name="Programming"
                                                    id="Programming"
                                                    placeholder="Programming Skills " />
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between" >
                                                <li>Web Designing  &nbsp; &nbsp;:</li>
                                                <TextField
                                                    onChange={handleChange}
                                                    value={values.Web}
                                                    name="Web"
                                                    id="Web"
                                                    placeholder="Web Designing" />
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between" >
                                                <li>Software Skills  &nbsp; &nbsp;:</li>
                                                <TextField
                                                    onChange={handleChange}
                                                    value={values.Software}
                                                    name="Software"
                                                    id="Software"
                                                    placeholder="Software Skills" />
                                            </Stack>
                                        </ul>
                                    </Stack>

                                    <Stack>
                                        <Typography>Positions of Responsibility</Typography>
                                        <Divider />
                                        <br></br>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Position1}
                                                name="Position1"
                                                id="Position1"
                                                placeholder="Position" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.PositionDuration1}
                                                name="PositionDuration1"
                                                id="PositionDuration1"
                                                placeholder="Duration" />
                                        </Stack>
                                        <ul>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.PositionDescription1}
                                                name="PositionDescription1"
                                                id="PositionDescription1"
                                            placeholder="Description" />
                                        </ul>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Position2}
                                                name="Position2"
                                                id="Position2"
                                                placeholder="Position" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.PositionDuration2}
                                                name="PositionDuration2"
                                                id="PositionDuration2"
                                                placeholder="Duration" />
                                        </Stack>
                                        <ul>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.sth4}
                                                name="PositionDescription2"
                                                id="PositionDescription2"
                                                placeholder="Description" />
                                        </ul>
                                    </Stack>

                                    <Stack>
                                        <Typography>Extracurricular Activities</Typography>
                                        <Divider />
                                        <br></br>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Event1}
                                                name="Event1"
                                                id="Event1"
                                                placeholder="Event" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.EventDuration1}
                                                name="EventDuration1"
                                                id="EventDuration1"
                                                placeholder="Duration" />
                                        </Stack>
                                        <ul>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.EventDescription1}
                                                name="EventDescription1"
                                                id="EventDescription1"
                                                placeholder="Description" />
                                        </ul>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <TextField
                                                onChange={handleChange}
                                                value={values.Event2}
                                                name="Event2"
                                                id="Event2"
                                                placeholder="Event" />
                                            <TextField
                                                onChange={handleChange}
                                                value={values.EventDuration2}
                                                name="EventDuration2"
                                                id="EventDuration2"
                                                placeholder="Duration" />
                                        </Stack>
                                        <ul>
                                            <TextField
                                                onChange={handleChange}
                                                value={values.EventDescription2}
                                                name="EventDescription2"
                                                id="EventDescription2"
                                                placeholder="Description" />
                                        </ul>
                                    </Stack>
                                </Stack>

                                <Button
                                    style={{ backgroundColor: "#1A66CA", color: "white" }}
                                    onClick={handleClose}
                                >Post</Button>
                            </Box>
                        </Modal>
                    </Stack>

                </Box>
            </Container>




            {item.map((value, index) => {
                return (
                    <>
                        <hr></hr>
                        <Stack justifyContent="space-between" direction="row" maxWidth="90%" style={{margin: "auto", padding: "1% 0px"}} >
                        <Typography variant="h5" textAlign="center" ><b>Your Resume</b></Typography>
                        <Button onClick={GeneratePdf} color="secondary" style={{backgroundColor: "#800080", color: "white"}} >Download</Button>
                        <Button onClick={(id) => onDelete(index)} style={{ backgroundColor: "#CA0B00", color: "white" }} >By Mistake</Button>
                        </Stack>
                        <hr></hr>
                        <div id="content"> 
                        <Paper  key={index} id={index} style={styles.paper} >
                            <Stack direction="row" justifyContent="space-between" >
                                <Stack>
                                    <img style={styles.imagecss} src={image} />
                                </Stack>

                                <Stack>
                                    <Typography>
                                        {value.Name}
                                    </Typography>
                                    <Typography>
                                        {value.UGPG}
                                    </Typography>
                                    <Typography>
                                        SGSITS, Indore
                                    </Typography>
                                    <Typography>
                                        {value.DateOfBirth}
                                    </Typography>
                                    <Typography>
                                        Email ID : {value.OnlyGmailID}
                                    </Typography>
                                </Stack>

                                <Stack>
                                    <Typography textAlign="right" >
                                        {value.EnrollmentNo}
                                    </Typography>
                                    <Typography textAlign="right" >
                                        {value.Department}
                                    </Typography>
                                    <Typography textAlign="right" >
                                        SGSITS, Indore
                                    </Typography>
                                    <Typography textAlign="right" >
                                        Specialization:{value.None}
                                    </Typography>
                                    <Typography textAlign="right" >
                                        Mobile # : +91 {value.XXXXXXXXXX}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <br></br>
                            <hr></hr>

                            <br></br>
                            <hr></hr>
                            <Stack style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} >
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
                            <Stack  style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} >
                                <Typography>
                                    Post Graduation
                                </Typography>
                                <Typography>
                                    {value.PostGraduation1}
                                </Typography>
                                <Typography>
                                    {value.PostGraduation2}
                                </Typography>
                                <Typography>
                                    {value.PostGraduation3}
                                </Typography>
                                <Typography>
                                    {value.PostGraduation4}
                                </Typography>
                            </Stack>
                            <hr></hr>
                            <Stack style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} >
                                <Typography>
                                    Graduation
                                </Typography>
                                <Typography>
                                    {value.Graduation1}
                                </Typography>
                                <Typography>
                                    {value.Graduation2}
                                </Typography>
                                <Typography>
                                    {value.Graduation3}
                                </Typography>
                                <Typography>
                                    {value.Graduation4}
                                </Typography>
                            </Stack>
                            <hr></hr>
                            <Stack style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}  >
                                <Typography>
                                    12th
                                </Typography>
                                <Typography>
                                    {value.th1}
                                </Typography>
                                <Typography>
                                    {value.th2}
                                </Typography>
                                <Typography>
                                    {value.th3}
                                </Typography>
                                <Typography>
                                    {value.th4}
                                </Typography>
                            </Stack>
                            <hr></hr>
                            <Stack style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}  >
                                <Typography>
                                    Diploma Studies
                                </Typography>
                                <Typography>
                                    {value.Diploma1}
                                </Typography>
                                <Typography>
                                    {value.Diploma2}
                                </Typography>
                                <Typography>
                                    {value.Diploma3}
                                </Typography>
                                <Typography>
                                    {value.Diploma4}
                                </Typography>
                            </Stack>
                            <hr></hr>
                            <Stack style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} >
                                <Typography>
                                    10th
                                </Typography>
                                <Typography>
                                    {value.sth1}
                                </Typography>
                                <Typography>
                                    {value.sth2}
                                </Typography>
                                <Typography>
                                    {value.sth3}
                                </Typography>
                                <Typography>
                                    {value.sth4}
                                </Typography>
                            </Stack>
                            <hr></hr>
                            <br></br>
                            <Typography><b>Scholastic Achievements</b></Typography>
                            <hr></hr>
                          
                                <ul>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <li>{value.Achievement1}</li>
                                        <Typography>{value.AchievementDuration1}</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <li>{value.Achievement12}</li>
                                        <Typography>{value.AchievementDuration2}</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <li>{value.Achievement3}</li>
                                        <Typography>{value.AchievementDuration3}</Typography>
                                    </Stack>
                                </ul>

                                <br></br>
                              

                                <Stack>
                                <Typography><b> Academic Projects</b></Typography>
                                <hr></hr>
                                <br></br>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>
                                            {value.ProjectTitle1}
                                        </Typography>
                                        <Typography>
                                            {value.ProjectTitleDuration}
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>
                                            {value.FacultyMentorsName}
                                        </Typography>
                                        <Typography>
                                            {value.MentorDeptInstitute}
                                        </Typography>
                                    </Stack>

                                    <ul>
                                        <li>{value.ProjectDescription1}</li>
                                        <li>{value.ProjectDescription2}</li>
                                    </ul>

                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>
                                            {value.ProjectTitle2}
                                        </Typography>
                                        <Typography>
                                            {value.ProjectTitleDuration2}
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>
                                            {value.FacultyMentorsName2}
                                        </Typography>
                                        <Typography>
                                            {value.MentorDeptInstitute2}
                                        </Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.ProjectDescription21}</li>
                                        <li>{value.ProjectDescription22}</li>
                                    </ul>

                                </Stack>
                                <br></br>
                                <br></br>
                                <Typography><b>Technical</b></Typography>
                                    <hr></hr>
                                    <br></br>
                                <Stack>
                                    <Stack direction="row" justifyContent="space-between"  >
                                        <Typography>{value.ProjectTitle3}</Typography>
                                        <Typography>{value.ProjectTitleDuration3}</Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.ProjectDescription31}</li>
                                        <li>{value.ProjectDescription32}</li>
                                    </ul>
                                </Stack>

                                <br></br>
                                    <Typography><b>Platforms Worked</b></Typography>
                                    <hr></hr>
                                <Stack>
                                   
                                    <ul>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <li>Operating Systems  &nbsp; &nbsp;:</li>
                                            <Typography>{value.Operating}</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <li>Programming Skills &nbsp; &nbsp;:</li>
                                            <Typography>{value.Programming}</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <li>Web Designing &nbsp; &nbsp;:</li>
                                            <Typography>{value.Web}</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" >
                                            <li>Software Skills  &nbsp; &nbsp;:</li>
                                            <Typography>{value.Software}</Typography>
                                        </Stack>
                                    </ul>
                                </Stack>

                                <br></br>
                                    <Typography><b>Positions of Responsibility</b></Typography>
                                    <hr></hr>
                                <Stack>   
                                 <Stack direction="row" justifyContent="space-between" >
                                        <Typography>{value.Position1}</Typography>
                                        <Typography>{value.PositionDuration1}</Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.PositionDescription1}</li>
                                    </ul>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>{value.Position2}</Typography>
                                        <Typography>{value.PositionDuration2}</Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.PositionDescription2}</li>
                                    </ul>
                                </Stack>

                                <br></br>
                                    <Typography><b>Extracurricular Activities</b></Typography>
                                    <hr></hr>
                                <Stack> 
                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>{value.Event1}</Typography>
                                        <Typography>{value.EventDuration1}</Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.EventDescription1}</li>
                                    </ul>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <Typography>{value.Event2}</Typography>
                                        <Typography>{value.EventDuration2}</Typography>
                                    </Stack>
                                    <ul>
                                        <li>{value.EventDescription2}</li>
                                    </ul>
                                </Stack>
                         
                        </Paper>
                        </div>
                    </>
                )
            }
            )}

        </>
    )
}

export default Notes;

