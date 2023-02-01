import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatVe extends Component {
    handleOnChange = (event) => {
        let { value, name } = event.target;
        let newValue = { ...this.props.nguoiDatVe }
        newValue[name] = value;
        let action = {
            type: 'THONG_TIN',
            newValue: newValue
        }
        this.props.dispatch(action)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        let isValid = true;
        for (const key in this.props.nguoiDatVe) {
            if (this.props.nguoiDatVe[key] === '') {
                isValid = false;
            }
        }

        if (isValid) {
            let action = {
                type: "BAT_DAU",
                chon: true
            }
            this.props.dispatch(action)
        }
        else {
            alert('Mời bạn nhập đầy đủ thông tin người đặt vé và số ghế');
        } 
            
    }

    render() {
        return (
            <div className="thongTin" >
                <div className="container">
                    <h1 className='text-white'>Đặt vé xem phim</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="" className='text-white'>Họ tên người đặt vé</label>
                                <input onChange={this.handleOnChange} name='hoTen' type="text" className="form-control" placeholder='Họ tên' value={this.props.nguoiDatVe.hoTen}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="" className='text-white'>Số vé đặt</label>
                                <input onChange={this.handleOnChange} name='soLuong' type="text" className="form-control" placeholder='Số vé' value={this.props.nguoiDatVe.soLuong} />
                            </div>
                        </div>
                        <button className='btn btn-danger my-2'>Chọn ghế</button>
                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        nguoiDatVe: rootReducer.datVeReducer.nguoiDatVe
    }
}

export default connect(mapStateToProps)(ThongTinDatVe)