import React from "react";
import { Navbar } from "./Navbar";
import {useNavigate} from 'react-router-dom';
import "./Booking.css";

export const Booking = () => {
  const navigate = useNavigate();

  const navigateToBooking = () => {
    navigate('/');
  };
  return (
    <>
    <Navbar/>
    <div className="counter">
    <h1>Welcome to the platform that eases your life</h1>
    <label htmlFor="position">
        What is the sample that you need ?
                            <select name="samples" id="samples">
                                <option value="EDTA-Blut">EDTA-Blut</option>
                                <option value="Punktat_EDTA">Punktat_EDTA</option>
                                <option value="Serum">Serum</option>
                                <option value="Stuhl">Stuhl</option>
                                <option value="Serum+Plasma">Serum+Plasma</option>
                                <option value="sonstiges-Material">sonstiges-Material</option>
                                <option value="Sammelurin">Sammelurin</option>
                                <option value="Citratplasma">Citratplasma</option>
                                <option value="Urin">Urin</option>
                                <option value="EDTA-Plasma">EDTA-Plasma</option>
                                <option value="Zecke">Zecke</option>
                                <option value="GlucoSpezial">GlucoSpezial</option>
                                <option value="OC-Sensor-Probenr.">OC-Sensor-Probenr.</option>
                                <option value="Punktat">Punktat</option>
                                <option value="Vollblut">Vollblut</option>
                                <option value="Liquor">Liquor</option>
                                <option value="Stein">Stein</option>
                                <option value="Citrat-Blut">Citrat-Blut</option>
                                <option value="Serum+Urin">Serum+Urin</option>
                                <option value="Spezialröhrchen">Spezialröhrchen</option>
                                <option value="Speichel">Speichel</option>
                                <option value="Glukose_Röhrchen">Glukose_Röhrchen</option>
                                <option value="Abstrich">Abstrich</option>
                                <option value="Ausstrich">Ausstrich</option>
                                <option value="Kapillarblut (EDTA)">Kapillarblut_EDTA</option>
                                <option value="COBAS_PCR_Medium">COBAS_PCR_Medium</option>
                                <option value="NaF-Plasma">NaF-Plasma</option>
                                <option value="Heparin-Blut">Heparin-Blut</option>
                                <option value="EDTA/Serum">EDTA/Serum</option>
                                <option value="Dialysat">Dialysat</option>
                                <option value="Serum+Liquor">Serum+Liquor</option>
                                <option value="Bronchiallavage">Bronchiallavage</option>
                                <option value="NaF-Blut">NaF-Blut</option>
                                <option value="Biopsie">Biopsie</option>
                                <option value="Abstrich_trocken">Abstrich_trocken</option>
                                <option value="EDTA-Plasma/Serum">EDTA-Plasma/Serum</option>
                                <option value="Neutral-Monovette">Neutral-Monovettes</option>
                                <option value="Rollrandröhrchen">Rollrandröhrchen</option>
                                <option value="ThromboExact">ThromboExact</option>
                                <option value="Ejakulat">Ejakulat</option>
                                <option value="Li-Hepa/Plasma">Li-Hepa/Plasma</option>
                                <option value="Hämolysat">Hämolysat</option>
                                <option value="Serum_ohne_TrennGel">Serum_ohne_TrennGel</option>
                            </select>
                        </label>
                        
    <h1>How many samples are you booking ?</h1>
    <span className="counter__output"></span>
    <div className="btn__container">
      <button className="control__btn">+</button>
      <button className="control__btn">-</button>
      <button className="reset">Reset</button>
    </div>
  </div>
    </>
  );
};