import React, { Component } from 'react'
import { connect } from 'react-redux'

class XacNhan extends Component {
    renderGheChon() {
        return this.props.gheDaChon.map((ghe) => {
            return <tr key={ghe.soGhe}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td>
                    <button className='btn btn-danger'>Huỷ</button>
                </td>
            </tr>
        })

    }

    render() {
        return (
            <div className="col-4" >
                <h3>Danh sách ghế đã chọn</h3>
                <div className='d-flex'>
                    <div className='ml-4'>
                        <button className='ghe ml-0'></button>
                        <p>Ghế trống</p>
                    </div>
                    <div className='ml-4'>
                        <button className='gheDangChon'></button>
                        <p>Ghế đã chọn</p>
                    </div>
                    <div className='ml-4'>
                        <button className='gheDuocChon'></button>
                        <p>Ghế đang chọn</p>
                    </div>
                </div>

                <h3 className='py-3'>Thông tin đặt vé</h3>
                <table className='table' style={{ color: 'white' }}>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>

                        </th>
                    </tr>
                    {this.renderGheChon()}
                </table>
                <button className='btn btn-danger'>Xác nhận đặt vé</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gheDaChon: rootReducer.datVeReducer.gheDaChon,
    }
}

export default connect(mapStateToProps)(XacNhan)