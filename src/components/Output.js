import React from 'react';
import classes from './Output.module.css';
import { Bar } from 'react-chartjs-2';

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

    const data = {
      labels: [
        ['Daya', 'Tangkap'],
        ['Kemampuan', 'Numerik'],
        ['Kemampuan', 'Analisis'],
        ['Fleksibilitas', 'Berpikir'],
        ['Abstraksi', 'Verbal'],
        ['Abstraksi', 'Ruang'],
        ['Daya', 'Ingat']
      ],
      datasets: [
        {
          data: [
            this.props.dayaTangkap,
            this.props.kemampuanNumerik,
            this.props.kemampuanAnalisis,
            this.props.fleksibilitasBerpikir,
            this.props.abstraksiVerbal,
            this.props.abstraksiRuang,
            this.props.dayaIngat
          ],
          backgroundColor: [
            '#ffadad',
            '#ffd6a5',
            '#fdffb6',
            '#caffbf',
            '#9bf6ff',
            '#a0c4ff',
            '#bdb2ff'
          ]
        }
      ]
    };
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
                <b>Tempat tanggal lahir</b> {this.props.usia}
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
            <div className={classes.BubbleText}>
              <b>
                <p>Skor IQ</p>
              </b>
              <b>
                <p>Kamu {this.props.iq}!</p>
              </b>
              <p>Skala IST</p>
            </div>
          </div>
        </div>
        <div
          style={{ height: '500px', width: '93%', margin: '30px auto 0 auto' }}
        >
          <Bar
            data={data}
            options={{
              title: {
                display: true,
                text: 'PSIKOGRAM',
                fontSize: 24
              },
              maintainAspectRatio: false,
              legend: { display: false },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      max: 7
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Output;
