import React from 'react';
import classes from './Output.module.css';

class Output extends React.PureComponent {
  render() {
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
                <b>Nama</b> {this.props.nama}
              </p>
              <p>
                <b>Tempat tanggal lahir</b> {this.props.tglLahir}
              </p>
              <p>
                <b>Tanggal pemeriksaan</b> {this.props.tglPemeriksaan}
              </p>
              <p>
                <b>Sekolah</b> {this.props.sekolah}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
