import React, { Component } from 'react'
import ChonGhe from './ChonGhe'
import ThongTinDatVe from './ThongTinDatVe'
import XacNhan from './XacNhan'

export default class DatVe extends Component {
    
    render() {
        return (
            <div className="bookTicket">
                <div className='container-fluid' style={{backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
                   <ThongTinDatVe/>
                    <div className="row" style={{color:'white'}}>
                        <ChonGhe/>
                        <XacNhan/>
                    </div>

                </div>
            </div>

        )
    }
}
