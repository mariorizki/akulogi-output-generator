import React from 'react';
import classes from './Output.module.css';

import idiot from '../assets/images/idiot.png';
import moron from '../assets/images/moron.png';
import below_average from '../assets/images/below_average.png';
import average from '../assets/images/average.png';

class Output extends React.PureComponent {
  render() {
    let imageCategory = null;
    if (this.props.category === 'idiot') {
      imageCategory = idiot;
    } else if (this.props.category === 'moron') {
      imageCategory = moron;
    } else if (this.props.category === 'below average') {
      imageCategory = below_average;
    } else if (this.props.category === 'average') {
      imageCategory = average;
    }
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

        <div className={classes.PageOneOutput}>
          <div className={classes.PageOneDesc}>
            <p>
              <b>
                {this.props.nama}, Kamu memiliki skor IQ {this.props.category}
              </b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              blanditiis adipisci enim veritatis placeat nisi distinctio odit,
              dolor tenetur saepe eum labore aliquid voluptas commodi numquam
              asperiores, architecto natus alias?Id officiis illo, nisi at in
              harum sapiente omnis quis sed voluptas perspiciatis temporibus
              quam tempore a molestiae, facere iure.
            </p>
          </div>

          <div className={classes.PageOneImage}>
            <img src={imageCategory} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
