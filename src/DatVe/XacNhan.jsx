import React, { Component } from 'react'
import { connect } from 'react-redux'

class XacNhan extends Component {
    renderGheChon() {
        return this.props.gheDangChon.map((ghe) => {
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
                    <thead>
                        <td>Số ghế</td>
                        <td>Giá</td>
                        <td>

                        </td>
                    </thead>
                    <tbody>
                        {this.renderGheChon()}
                    </tbody>
                    <tfoot>
                        <td>Tổng tiền:</td>
                        <td>{this.props.tongTien}</td>
                    </tfoot>
                </table>
                <button onClick={() => {
                    let action = {
                        type: "XAC_NHAN",
                    }
                    this.props.dispatch(action)
                }} className='btn btn-danger'>Xác nhận đặt vé</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gheDangChon: rootReducer.datVeReducer.gheDangChon,
        tongTien: rootReducer.datVeReducer.tongTien
    }
}

export default connect(mapStateToProps)(XacNhan)