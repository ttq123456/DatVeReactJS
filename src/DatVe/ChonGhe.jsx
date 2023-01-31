import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChonGhe extends Component {
    luaGhe = () => {
        if (this.props.ChonGhe) {

        }
    }

    renderGhe = () => {
        return this.props.danhSachGhe.map((ghe) => {
            return <tr key={ghe.hang}>
                <td>{ghe.hang}</td>
                {
                    ghe.danhSachGhe.map((hang) => {
                        if (hang.gia === 0) {
                            return <td key={hang.soGhe}>
                                {hang.soGhe}
                            </td>
                        }
                        else {
                            if (!hang.daDat) {
                                return <td key={hang.soGhe}>
                                    <button type="text" className='ghe m-1' value={hang.soGhe}>{hang.soGhe}</button>
                                </td>
                            }
                            else {
                                return <td key={hang.soGhe}>
                                    <button type="text" className='gheDangChon m-1' value={hang.soGhe}></button>
                                </td>
                            }

                        }

                    })

                }

            </tr>
        })
    }
    render() {
        return (
            <div className="col-8">
                <div className="rap text-center text-white">
                    <h2 >Màn hình</h2>
                    <div className="screen w-100"></div>
                    <table className='ml-5'>
                        {this.renderGhe()}
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGhe: rootReducer.datVeReducer.danhSachGhe,
        chonGhe: rootReducer.datVeReducer.chonGhe,

    }
}

export default connect(mapStateToProps)(ChonGhe)