import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.lastPage = this.lastPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    lastPage() {
        if(this.props.page !== 1) {
            this.props.onPageChanged(this.props.page - 1);
        }
    }
    nextPage() {
        if(this.props.page !== this.props.pages) {
            this.props.onPageChanged(this.props.page + 1);
        }
    }
    changePage(page) {
        if(page > 0 && page <= this.props.pages) {
            this.props.onPageChanged(page);
        }
    }
    render() {
        return (
            <nav>
                <ul className="pagination">
                    <li className={this.props.page === 1 ? 'disabled' : ''}>
                        <a style={{cursor: 'pointer'}} onClick={this.lastPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                        {
                            _.range(1, this.props.pages + 1).map(function m(num) {
                                return (
                                    <li className={this.props.page === num ? 'active' : ''}>
                                        <a style={{cursor: 'pointer'}} onClick={()=>this.changePage(num)}>{num}</a>
                                    </li>
                                );
                            }.bind(this))
                        }
                    <li className={this.props.page === this.props.pages ? 'disabled' : ''}>
                        <a style={{cursor: 'pointer'}} onClick={this.nextPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

Pagination.propTypes = {
    page: PropTypes.number,
    pages: PropTypes.number,
    onPageChanged: PropTypes.function,
};
