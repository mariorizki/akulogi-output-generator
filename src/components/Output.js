import React from 'react';
import classes from './Output.module.css';

function Output(props) {
  return (
    <div className={classes.Output}>
      <div className={classes.Rahasia}>
        <div>Rahasia</div>
      </div>

      <h1>Hasil Pemeriksaan Psikologis</h1>

      <div className={classes.BioContainer}>
        <div className={classes.Bio}>
          <div className={classes.BioItem}>
            <p>
              <b>Nama</b> {props.nama}
            </p>
            <p>
              <b>Tempat tanggal lahir</b> {props.tglLahir}
            </p>
            <p>
              <b>Tanggal pemeriksaan</b> {props.tglPemeriksaan}
            </p>
            <p>
              <b>Sekolah</b> {props.sekolah}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Output;
