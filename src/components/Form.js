import React from 'react';

import ReactToPrint from 'react-to-print';
import Output from './Output';

import classes from './Form.module.css';

class form extends React.PureComponent {
  state = {
    nama: '',
    tglLahir: '',
    tglPemeriksaan: '',
    sekolah: '',
    iq: 100,
    category: '',
    dayaTangkap: 0,
    kemampuanNumerik: 0,
    kemampuanAnalisis: 0,
    fleksibilitasBerpikir: 0,
    abstraksiVerbal: 0,
    abstraksiRuang: 0,
    dayaIngat: 0
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      nama,
      usia,
      tglPemeriksaan,
      sekolah,
      iq,
      category,
      dayaTangkap,
      kemampuanNumerik,
      kemampuanAnalisis,
      fleksibilitasBerpikir,
      abstraksiVerbal,
      abstraksiRuang,
      dayaIngat
    } = this.state;

    let newCategory = '';
    if (iq < 69) {
      newCategory = 'idiot';
      this.setState({ category: newCategory });
    } else if (iq > 69 && iq <= 79) {
      newCategory = 'moron';
      this.setState({ category: newCategory });
    } else if (iq > 79 && iq <= 89) {
      newCategory = 'below average';
      this.setState({ category: newCategory });
    } else if (iq > 89 && iq <= 109) {
      newCategory = 'average';
      this.setState({ category: newCategory });
    }

    console.log(category);
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
            <label>Usia</label>
            <input
              name="usia"
              type="number"
              value={usia}
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

          <div>
            <label>Daya Tangkap</label>
            <input
              name="dayaTangkap"
              type="number"
              value={dayaTangkap}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Kemampuan Numerik</label>
            <input
              name="kemampuanNumerik"
              type="number"
              value={kemampuanNumerik}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Kemampuan Analisis</label>
            <input
              name="kemampuanAnalisis"
              type="number"
              value={kemampuanAnalisis}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Fleksibilitas Berpikir</label>
            <input
              name="fleksibilitasBerpikir"
              type="number"
              value={fleksibilitasBerpikir}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Abstraksi Verbal</label>
            <input
              name="abstraksiVerbal"
              type="number"
              value={abstraksiVerbal}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Abstraksi Ruang</label>
            <input
              name="abstraksiRuang"
              type="number"
              value={abstraksiRuang}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Daya Ingat</label>
            <input
              name="dayaIngat"
              type="number"
              value={dayaIngat}
              onChange={this.handleChange}
              min="1"
              max="7"
            />
          </div>
        </form>

        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '30px'
                }}
              >
                <button>Generate PDF</button>
              </div>
            );
          }}
          content={() => this.componentRef}
        />
        <Output
          nama={nama}
          usia={usia}
          tglPemeriksaan={tglPemeriksaan}
          sekolah={sekolah}
          iq={iq}
          category={category}
          dayaTangkap={dayaTangkap}
          kemampuanNumerik={kemampuanNumerik}
          kemampuanAnalisis={kemampuanAnalisis}
          fleksibilitasBerpikir={fleksibilitasBerpikir}
          abstraksiVerbal={abstraksiVerbal}
          abstraksiRuang={abstraksiRuang}
          dayaIngat={dayaIngat}
          ref={el => (this.componentRef = el)}
        />
      </>
    );
  }
}

export default form;
