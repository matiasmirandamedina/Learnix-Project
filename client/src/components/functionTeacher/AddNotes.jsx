import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from '@mui/material';
import axios from "axios";
import NavBarTeacher from '../navBarPages/navBarTeacher';

import { useLocation } from "react-router-dom";

function AddNotes() {
  const location = useLocation();
  const state = location.state || {};

  console.log(state.alumnos);

  return <div>Aquí van las notas</div>;
}

export default AddNotes;