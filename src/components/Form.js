import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Output from './Output';

import classes from './Form.module.css';
import idiot from '../assets/images/idiot.png';
import moron from '../assets/images/moron.png';
import below_average from '../assets/images/below_average.png';
import average from '../assets/images/average.png';

class form extends Component {
  state = {
    nama: '',
    tglLahir: '',
    tglPemeriksaan: '',
    sekolah: '',
    iq: 0
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nama, tglLahir, tglPemeriksaan, sekolah, iq } = this.state;

    let category = null;
    if (iq < 69) {
      category = idiot;
    } else if (iq > 69 && iq <= 79) {
      category = moron;
    } else if (iq > 79 && iq <= 89) {
      category = below_average;
    } else if (iq > 89 && iq <= 109) {
      category = average;
    }

    return (
      <>
        <form action="" className={classes.Form}>
          <h3>Akulogi Output Generator</h3>
          <div>
            <label>Nama</label>
            <input
              name="nama"
              type="text"
              value={nama}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tempat tanggal lahir</label>
            <input
              name="tglLahir"
              type="text"
              value={tglLahir}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tanggal pemeriksaan</label>
            <input
              name="tglPemeriksaan"
              type="text"
              value={tglPemeriksaan}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Sekolah</label>
            <input
              name="sekolah"
              type="text"
              value={sekolah}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Skor IQ</label>
            <input
              name="iq"
              type="number"
              value={iq}
              onChange={this.handleChange}
            />
          </div>

          <button>Print Output</button>
        </form>
        <Output
          nama={nama}
          tglLahir={tglLahir}
          tglPemeriksaan={tglPemeriksaan}
          sekolah={sekolah}
        />
      </>
    );
  }
}

export default form;
