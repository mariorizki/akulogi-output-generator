import React from 'react';

import ReactToPrint from 'react-to-print';
import Output from './Output';

import classes from './Form.module.css';

// import idiot from '../assets/images/idiot.png';
// import moron from '../assets/images/moron.png';
// import below_average from '../assets/images/below_average.png';
// import average from '../assets/images/average.png';

class form extends React.PureComponent {
  state = {
    nama: '',
    tglLahir: '',
    tglPemeriksaan: '',
    sekolah: '',
    iq: 100,
    category: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      nama,
      tglLahir,
      tglPemeriksaan,
      sekolah,
      iq,
      category
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
          tglLahir={tglLahir}
          tglPemeriksaan={tglPemeriksaan}
          sekolah={sekolah}
          iq={iq}
          category={category}
          ref={el => (this.componentRef = el)}
        />
      </>
    );
  }
}

export default form;
